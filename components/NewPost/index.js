import Link from 'next/link';
import Avatar from 'react-avatar';
import { useAuth } from '../../context/authContext';
import {
    CloseIcon,
    AvatarContainer,
    Content,
    DeleteImageItem,
    ImageIcon,
    ImageItem,
    ImagesWrapper,
    Profile,
    ProfilePhoto,
    SubmitButton,
    Textarea,
    Toolbar,
    ToolbarFragment,
    Wrapper,
    UpdateImageItem,
    DragArea,
    AddImage,
} from './index.styles';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import ImageUploading from 'react-images-uploading';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import dataURLtoBlob from '../../helpers/dataURLToBlob';
import Notification from '../Notification';

const NewPost = () => {
    const { user } = useAuth();
    const tempUsername = sessionStorage.getItem('username');
    const [data, setData] = useState('');
    const [images, setImages] = useState();
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState([]);
    const maxNumber = 4;

    const storage = getStorage();

    const handleChange = (e) => {
        setData(e.target?.value);
    };

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const createPost = async (urls) => {
        await addDoc(collection(db, 'posts'), {
            message: data,
            createdAt: serverTimestamp(),
            createdBy: user,
            likes: [],
            comments: [],
            images: urls,
        })
            .then(() => {
                setData('');
                setImages([]);
            })
            .catch((err) => console.log(err));
    };

    const getURLS = async () => {
        const promises = [];
        images &&
            images.map((image) => {
                const storageRef = ref(storage, `images/${image?.file?.name + v4()}`);
                promises.push(
                    uploadBytesResumable(storageRef, dataURLtoBlob(image.data_url)).then((uploadResult) => {
                        return getDownloadURL(uploadResult.ref);
                    })
                );
            });

        const urls = await Promise.all(promises);

        try {
            createPost(urls);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Wrapper>
            <Profile>
                <Link href={`/${user?.uid}`}>
                    {user?.photoURL ? (
                        <ProfilePhoto src={user?.photoURL} alt="" />
                    ) : (
                        <AvatarContainer>
                            <Avatar name={user?.displayName ? user?.displayName : tempUsername} round={true} className="avatar" />
                        </AvatarContainer>
                    )}
                </Link>
            </Profile>
            <Content>
                <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                    {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps, errors }) => (
                        <>
                            <DragArea {...dragProps} isDragging={isDragging}>
                                <Textarea
                                    value={data}
                                    onChange={handleChange}
                                    maxRows="25"
                                    placeholder="What's happening?"
                                    spellCheck={false}></Textarea>
                                {images?.length ? (
                                    <ImagesWrapper>
                                        {imageList.map((image, index) => (
                                            <ImageItem key={index}>
                                                <picture>
                                                    <img src={image['data_url']} alt="" />
                                                </picture>
                                                <DeleteImageItem onClick={() => onImageRemove(index)}>
                                                    <CloseIcon />
                                                </DeleteImageItem>
                                                <UpdateImageItem onClick={() => onImageUpdate(index)}>Update</UpdateImageItem>
                                            </ImageItem>
                                        ))}
                                    </ImagesWrapper>
                                ) : null}
                            </DragArea>
                            {errors && (
                                <div>
                                    {errors.maxNumber && <Notification>Number of selected images exceed maxNumber</Notification>}
                                    {errors.acceptType && <Notification>Your selected file type is not allow</Notification>}
                                    {errors.maxFileSize && <Notification>Selected file size exceed maxFileSize</Notification>}
                                    {errors.resolution && <Notification>Selected file is not match your desired resolution</Notification>}
                                </div>
                            )}
                            <Toolbar>
                                <AddImage onClick={onImageUpload}>
                                    Add image
                                    <ImageIcon />
                                </AddImage>
                                <SubmitButton onClick={getURLS} disabled={!data.length ? true : false}>
                                    Create post
                                </SubmitButton>
                            </Toolbar>
                        </>
                    )}
                </ImageUploading>
            </Content>
        </Wrapper>
    );
};

export default NewPost;

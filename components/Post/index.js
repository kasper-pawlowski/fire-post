import {
    AvatarContainer,
    CommentIcon,
    Container,
    Content,
    Date,
    DisplayName,
    FilledLikeIcon,
    IconContainer,
    ImageItem,
    ImagesWrapper,
    Interaction,
    InteractionIcon,
    InteractionsContainer,
    LikeIcon,
    Message,
    NameAndDate,
    OptionsIcon,
    Profile,
    ProfilePhoto,
    RePostIcon,
    Wrapper,
} from './index.styles';
import Link from 'next/link';
import Avatar from 'react-avatar';
import { useEffect, useState } from 'react';
import { doc, deleteDoc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useAuth } from '../../context/authContext';
import CommentModal from '../CommentModal';

const Post = ({ postData }) => {
    const [commentModalOpen, setCommentModalOpen] = useState(false);
    const { user } = useAuth();
    dayjs.extend(relativeTime);
    const {
        id,
        data: { message, createdBy, createdAt, likes, comments, images },
    } = postData;

    const handleDeleteDoc = async () => {
        await deleteDoc(doc(db, 'posts', id));
    };

    const likesRef = doc(db, 'posts', id);
    // const commentsRef = doc(db, 'posts', id, asdasd);

    const handleLike = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid),
            })
                .then(() => {
                    console.log('unliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid),
            })
                .then(() => {
                    console.log('liked');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    return (
        <>
            <Wrapper>
                <Profile>
                    <Link href={`/${createdBy?.uid}`}>
                        {createdBy?.photoURL ? (
                            <ProfilePhoto src={createdBy?.photoURL} alt="" />
                        ) : (
                            <AvatarContainer>
                                <Avatar name={createdBy?.displayName} round={true} className="avatar" />
                            </AvatarContainer>
                        )}
                    </Link>
                </Profile>
                <Content>
                    <Container>
                        <NameAndDate>
                            <Link href={`/${createdBy?.uid}`} passHref>
                                <DisplayName>{createdBy?.displayName}</DisplayName>
                            </Link>
                            <Date>{`${dayjs(createdAt?.toDate()).fromNow(true)} ago`}</Date>
                        </NameAndDate>

                        <IconContainer>
                            <OptionsIcon />
                        </IconContainer>
                    </Container>
                    <Message>{message}</Message>
                    <ImagesWrapper>
                        {images.map((image, index) => (
                            <ImageItem key={index}>
                                <picture>
                                    <img src={image} alt="" />
                                </picture>
                            </ImageItem>
                        ))}
                    </ImagesWrapper>
                    <InteractionsContainer>
                        <Interaction onClick={() => setCommentModalOpen(true)}>
                            <CommentIcon />
                            <p>{comments?.length !== 0 ? comments?.length : null}</p>
                        </Interaction>
                        <Interaction>
                            <RePostIcon />
                            <p>8</p>
                        </Interaction>
                        <Interaction onClick={handleLike}>
                            {likes?.includes(user?.uid) ? <FilledLikeIcon /> : <LikeIcon />}
                            <p>{likes?.length !== 0 ? likes?.length : null}</p>
                        </Interaction>
                    </InteractionsContainer>
                </Content>
                {commentModalOpen && (
                    <CommentModal commentModalOpen={commentModalOpen} setCommentModalOpen={setCommentModalOpen} postData={postData} />
                )}
            </Wrapper>
        </>
    );
};

export default Post;

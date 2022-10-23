import { useRouter } from 'next/router';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { DisplayName, PhotoURL, ProfilePictureContainer, Wrapper } from './index.styles';
import Avatar from 'react-avatar';

const Profile = () => {
    const router = useRouter();
    const { uid } = router.query;
    const [data, setData] = useState();
    const [loading, isLoading] = useState(true);
    const tempUsername = sessionStorage.getItem('username');

    const docRef = doc(db, 'users', uid);

    useEffect(() => {
        const fetchUser = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setData(docSnap.data());
            } else {
                console.log('No such document!');
            }
        };
        fetchUser().then(() => isLoading(false));
    }, [docRef]);

    const handleDeleteProfile = () => {
        deleteDoc(docRef);
    };

    if (loading) {
        return <Wrapper>loading...</Wrapper>;
    }

    return (
        <Wrapper>
            <ProfilePictureContainer>
                {data?.photoURL ? (
                    <PhotoURL src={data?.photoURL} alt="" />
                ) : (
                    <Avatar name={data?.displayName ? data?.displayName : tempUsername} round={true} className="avatar" />
                )}
            </ProfilePictureContainer>
            <DisplayName>{data?.displayName ? data?.displayName : tempUsername}</DisplayName>
            <button onClick={handleDeleteProfile}>Delete profile</button>
        </Wrapper>
    );
};

export default Profile;

import { Wrapper } from './index.styles';
import Post from '../Post';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const Feed = () => {
    const [posts, setPosts] = useState();

    // collection(db, "posts")
    // const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(3));

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, data: doc.data() });
            });
            setPosts(posts);
        });
    }, []);

    return (
        <>
            <Wrapper>
                {posts?.map((post) => (
                    <Post key={post?.id} postData={post} />
                ))}
            </Wrapper>
        </>
    );
};

export default Feed;

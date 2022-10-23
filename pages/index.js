import FeedHeader from '../components/FeedHeader';
import NewPost from '../components/NewPost';
import Feed from '../components/Feed';
import { Wrapper } from './index.styles';

const Home = () => {
    return (
        <Wrapper>
            <NewPost />
            <FeedHeader />
            <Feed />
        </Wrapper>
    );
};

export default Home;

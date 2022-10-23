import { SortContainer, SortOption, Title, Wrapper } from './index.styles';

const FeedHeader = () => {
    return (
        <Wrapper>
            <Title>Feed</Title>
            <SortContainer>
                <SortOption>New</SortOption>
                <SortOption>Top</SortOption>
                <SortOption>Yours</SortOption>
            </SortContainer>
        </Wrapper>
    );
};

export default FeedHeader;

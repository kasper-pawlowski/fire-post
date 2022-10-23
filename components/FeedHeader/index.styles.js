import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const SortContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const SortOption = styled.div`
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 100vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

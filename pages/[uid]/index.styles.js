import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 46%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    border-radius: 10px;
    margin: 110px auto;
    @media (min-width: 1400px) {
        width: 35%;
    }
`;

export const ProfilePictureContainer = styled.div`
    width: 150px;
    aspect-ratio: 1 / 1;

    .avatar {
        height: 100% !important;
        width: 100% !important;
        cursor: context-menu !important;
        user-select: none;
    }
`;

export const PhotoURL = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const DisplayName = styled.p`
    font-weight: 800;
    font-size: 34px;
`;

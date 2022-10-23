import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    /* border-bottom: 1px solid #b5bdc4; */
    padding: 10px 10vw;
    z-index: 9;

    box-shadow: 0 2px 2px -2px rgba(0, 10, 0, 0.1);

    @media (min-width: 1400px) {
        padding: 10px 16vw;
    }
`;

export const Logo = styled.a`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 0 16px;
    font-weight: 700;
    font-size: 24px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

export const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
`;

export const ProfilePhoto = styled.img`
    border-radius: 50%;
    height: 100%;
    cursor: pointer;
`;

export const AvatarContainer = styled.div`
    aspect-ratio: 1 / 1;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;

    .avatar {
        height: 100% !important;
        width: 100% !important;
        cursor: pointer !important;
        user-select: none;
    }
`;

export const Login = styled.a`
    height: 100%;
    color: ${({ theme }) => theme.colors.dark};
    padding: 0 16px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
`;

export const Signup = styled.a`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 0 16px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

export const Logout = styled.button`
    border: none;
    height: 100%;
    color: ${({ theme }) => theme.colors.dark};
    padding: 0 16px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
`;

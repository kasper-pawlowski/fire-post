import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

export const Wrapper = styled.div`
    margin: calc(5vh + 70px) auto;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const Title = styled.p`
    font-size: 36px;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrey2};
    border: none;
    border-radius: 5px;
    padding: 14px 24px;
    font-size: 16px;
    font-weight: 700;
`;

export const SubmitButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark};
    border: 2px solid ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 14px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
`;

export const SignupWithGoogle = styled(SubmitButton)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark};
    gap: 5px;
`;

export const GoogleIcon = styled(FcGoogle)`
    font-size: 20px;
`;

export const NoAccountContainer = styled.p`
    font-size: 14px;
    font-weight: 500;
`;

export const NoAccount = styled.a`
    cursor: pointer;
    font-weight: 700;
    text-decoration: underline;
    margin-left: 5px;
`;

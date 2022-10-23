import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
import reactTextareaAutosize from 'react-textarea-autosize';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(91, 112, 131, 0.4);
    z-index: 999;
`;

export const Wrapper = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    height: fit-content;
    max-height: 80%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;

    width: 36%;
    @media (min-width: 1400px) {
        width: 35%;
    }
`;

export const DeleteImageItem = styled.button`
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    backdrop-filter: blur(4px);
    background-color: rgba(15, 20, 25, 0.75);
    transition-duration: 0.1s;
    &:hover {
        background-color: rgba(27, 36, 44, 0.75);
    }
`;

export const CloseIcon = styled(RiCloseFill)`
    color: #ffffff;
    font-size: 18px;
`;

export const Referenced = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 20px;
`;

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const Line = styled.div`
    width: 2px;
    flex: 1;
    background-color: #d0d0d0;
`;

export const ReferencedProfilePhoto = styled.img`
    border-radius: 50%;
    width: 48px;
    cursor: pointer;
`;

export const ReferencedAvatarContainer = styled.div`
    aspect-ratio: 1 / 1;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;

    .avatar {
        height: 100% !important;
        width: 100% !important;
        cursor: pointer !important;
        user-select: none;
    }
`;

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 5px;
`;

export const ReferencedNameAndDate = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ReferencedDisplayName = styled.a`
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ReferencedDate = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.lightGrey4};
`;

export const ReferencedMessage = styled.p`
    font-size: 15px;
    font-weight: 500;
    white-space: pre-line;
`;

export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`;

export const CommentLine = styled.div`
    width: 2px;
    height: 20px;
    background-color: #d0d0d0;
`;

export const Textarea = styled(reactTextareaAutosize)`
    margin-top: 20px;
    width: 100%;
    resize: none;
    padding: 10px 0px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    &::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #bdb9ce;
    }
`;

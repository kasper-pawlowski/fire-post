import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { FaRegSmile } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import { RiFileGifLine } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    display: flex;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const Profile = styled.div`
    padding: 20px 0 20px 20px;
`;

export const ProfilePhoto = styled.img`
    border-radius: 50%;
    width: 48px;
    cursor: pointer;
`;

export const AvatarContainer = styled.div`
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

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const DragArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    ${({ isDragging, theme }) => isDragging && `box-shadow: 0 0 0 5px ${theme.colors.lightDark};`};
    border-radius: 10px;
`;

export const Textarea = styled(TextareaAutosize)`
    background-color: ${({ theme }) => theme.colors.lightGrey3};
    width: 100%;
    resize: none;
    padding: 10px;
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

export const ImagesWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    position: relative;
`;

export const ImageItem = styled.div`
    position: relative;
    flex: calc(50% - 5px);
    img {
        width: 100%;
        border-radius: 10px;
    }
`;

export const DeleteImageItem = styled.button`
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
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

export const UpdateImageItem = styled.button`
    border-radius: 100vw;
    padding: 10px 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    backdrop-filter: blur(4px);
    background-color: rgba(15, 20, 25, 0.75);
    transition-duration: 0.1s;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 13px;
    &:hover {
        background-color: rgba(27, 36, 44, 0.75);
    }
`;

export const CloseIcon = styled(RiCloseFill)`
    color: #ffffff;
    font-size: 18px;
`;

export const Toolbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ToolbarFragment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    &:first-child {
        align-self: flex-end;
    }
`;

export const SubmitButton = styled.button`
    background-color: #160c29;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 100vw;
    transition: background-color 0.1s linear;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightDark};
    }
`;

export const ImageIcon = styled(FiImage)`
    transition-duration: 0.1s;
    height: 18px;
    width: 18px;

    border-radius: 50%;
    box-sizing: content-box;
    cursor: pointer;
`;

export const AddImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 100vw;
    padding: 7px 10px;
    transition-duration: 0.1s;
    cursor: pointer;
    background-color: rgba(29, 155, 240, 0.1);
    &:hover {
        color: rgb(29, 155, 240);
        background-color: rgba(29, 155, 240, 0.2);
    }
`;

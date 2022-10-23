import styled from 'styled-components';
import { SlOptions } from 'react-icons/sl';
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
    cursor: pointer;

    &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
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
    gap: 5px;
    padding: 20px;
    padding: 20px 20px 14px 20px;
`;

export const NameAndDate = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const DisplayName = styled.a`
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Date = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.lightGrey4};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Message = styled.p`
    font-size: 15px;
    font-weight: 500;
    white-space: pre-line;
`;

export const IconContainer = styled.div`
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition-duration: 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    cursor: pointer;
    &:hover {
        background-color: rgba(29, 155, 240, 0.2);
    }
`;

export const OptionsIcon = styled(SlOptions)`
    transition-duration: 0.1s;
    width: 14px;
    color: #160c29;
    ${IconContainer}:hover & {
        color: rgb(29, 155, 240);
    }
`;

export const ImagesWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`;

export const ImageItem = styled.div`
    flex: calc(50% - 5px);
    img {
        width: 100%;
        border-radius: 10px;
    }
`;

export const InteractionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-right: 30px;
`;

export const Interaction = styled.div`
    display: flex;
    align-items: center;
    translate: -8px 0;
    transition-duration: 0.1s;

    p {
        font-size: 12px;
        margin: 0px 6px 0 4px;
    }

    &:hover {
        &:nth-child(1) {
            color: rgb(29, 155, 240);
        }
        &:nth-child(2) {
            color: rgb(0, 186, 124);
        }
        &:nth-child(3) {
            color: rgb(249, 24, 128);
        }
    }
`;

export const CommentIcon = styled(FaRegComment)`
    transition-duration: 0.1s;
    height: 16px;
    width: 16px;
    padding: 7px;
    border-radius: 50%;
    box-sizing: content-box;
    ${Interaction}:hover & {
        color: rgb(29, 155, 240);
        background-color: rgba(29, 155, 240, 0.2);
    }
`;
export const RePostIcon = styled(AiOutlineRetweet)`
    transition-duration: 0.1s;
    height: 18px;
    width: 18px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: content-box;
    ${Interaction}:hover & {
        color: rgb(0, 186, 124);
        background-color: rgba(0, 186, 124, 0.2);
    }
`;
export const LikeIcon = styled(AiOutlineHeart)`
    transition-duration: 0.1s;
    scale: 0.9;
    height: 18px;
    width: 18px;
    padding: 8px;
    border-radius: 50%;
    box-sizing: content-box;
    ${Interaction}:hover & {
        color: rgb(249, 24, 128);
        background-color: rgba(249, 24, 128, 0.2);
    }
`;

export const FilledLikeIcon = styled(AiFillHeart)`
    transition-duration: 0.1s;
    scale: 0.9;
    height: 18px;
    width: 18px;
    padding: 8px;
    border-radius: 50%;
    box-sizing: content-box;
    color: rgb(249, 24, 128);
    ${Interaction}:hover & {
        background-color: rgba(249, 24, 128, 0.2);
    }
`;

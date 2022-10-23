import React, { useEffect, useRef, useState } from 'react';
import Portal from '../../HOC/Portal';
import {
    CloseIcon,
    CommentLine,
    CommentWrapper,
    DeleteImageItem,
    Line,
    Overlay,
    Referenced,
    ReferencedAvatarContainer,
    ReferencedDate,
    ReferencedDisplayName,
    LeftPanel,
    ReferencedMessage,
    ReferencedNameAndDate,
    ReferencedProfilePhoto,
    RightPanel,
    Wrapper,
    Textarea,
} from './index.styles';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Link from 'next/link';
import Avatar from 'react-avatar';
import dayjs from 'dayjs';
import { useAuth } from '../../context/authContext';

const CommentModal = ({ commentModalOpen, setCommentModalOpen, postData }) => {
    const [data, setData] = useState('');
    const {
        id,
        data: { message, createdBy, createdAt, likes, comments, images },
    } = postData;
    const { user } = useAuth();
    const ref = useRef();

    useOnClickOutside(ref, () => setCommentModalOpen(false));

    const handleChange = (e) => {
        setData(e.target?.value);
    };

    return (
        <Portal>
            <Overlay>
                <Wrapper ref={ref}>
                    <DeleteImageItem onClick={() => setCommentModalOpen(false)}>
                        <CloseIcon />
                    </DeleteImageItem>
                    <Referenced>
                        <LeftPanel>
                            <Link href={`/${createdBy?.uid}`}>
                                {createdBy?.photoURL ? (
                                    <ReferencedProfilePhoto src={createdBy?.photoURL} alt="" />
                                ) : (
                                    <ReferencedAvatarContainer>
                                        <Avatar name={createdBy?.displayName} round={true} className="avatar" />
                                    </ReferencedAvatarContainer>
                                )}
                            </Link>
                            <Line />
                        </LeftPanel>
                        <RightPanel>
                            <ReferencedNameAndDate>
                                <Link href={`/${createdBy?.uid}`} passHref>
                                    <ReferencedDisplayName>{createdBy?.displayName}</ReferencedDisplayName>
                                </Link>
                                <ReferencedDate>{`${dayjs(createdAt?.toDate()).fromNow(true)} ago`}</ReferencedDate>
                            </ReferencedNameAndDate>
                            <ReferencedMessage>{message}</ReferencedMessage>
                        </RightPanel>
                    </Referenced>
                    <CommentWrapper>
                        <LeftPanel>
                            <CommentLine />
                            <Link href={`/${user?.uid}`}>
                                {user?.photoURL ? (
                                    <ReferencedProfilePhoto src={user?.photoURL} alt="" />
                                ) : (
                                    <ReferencedAvatarContainer>
                                        <Avatar name={user?.displayName} round={true} className="avatar" />
                                    </ReferencedAvatarContainer>
                                )}
                            </Link>
                        </LeftPanel>
                        <RightPanel>
                            <Textarea value={data} onChange={handleChange} maxRows="25" placeholder="Type your reply" spellCheck={false}></Textarea>
                        </RightPanel>
                    </CommentWrapper>
                </Wrapper>
            </Overlay>
        </Portal>
    );
};

export default CommentModal;

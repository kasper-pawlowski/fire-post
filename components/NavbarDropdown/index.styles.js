import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

// variant idea

// const ButtonStyle = styled.button`
//     color: ${(props) => props.theme.primary};
// `;

// const ButtonStyleFlashy = styled(ButtonStyle)`
//     color: fuchsia;
// `;

// const ButtonDisabled = styled(ButtonStyle)`
//     color: ${(props) => props.theme.grey};
// `;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
`;

export const Caret = styled(AiFillCaretDown)`
    color: #160c29;
    cursor: pointer;
    transition-duration: 0.15s;
    /* rotate: ${({ open }) => open && '-180deg'}; */
    scale: ${({ open }) => (open ? '1 -1' : '-1 1')};
`;

export const Menu = styled.div`
    width: fit-content;
    position: absolute;
    right: 0;
    top: 60px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
    box-shadow: 0 8px 16px #00000029;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const MenuOption = styled.button`
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 40px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    white-space: nowrap;
`;

export const LogoutIcon = styled(FiLogOut)`
    font-size: 16px;
`;

export const ProfileIcon = styled(CgProfile)`
    font-size: 18px;
`;

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Caret, LogoutIcon, Menu, MenuOption, ProfileIcon, Wrapper } from './index.styles';

const NavbarDropdown = () => {
    const { logout, user } = useAuth();
    const [open, setOpen] = useState(false);
    const drop = useRef(null);

    const handleClick = (e) => {
        if (!e.target.closest(`.${drop.current.className}`) && open) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });

    return (
        <Wrapper>
            <div className="drop" ref={drop}>
                <Caret onClick={() => setOpen((open) => !open)} open={open} />
            </div>
            {open && (
                <Menu>
                    <Link href={`/${user.uid}`} passHref>
                        <MenuOption>
                            <>
                                <ProfileIcon />
                                Profile
                            </>
                        </MenuOption>
                    </Link>
                    <MenuOption onClick={logout}>
                        <LogoutIcon /> <p>Log out</p>
                    </MenuOption>
                </Menu>
            )}
        </Wrapper>
    );
};

export default NavbarDropdown;

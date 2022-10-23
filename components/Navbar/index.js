import Link from 'next/link';
import { useAuth } from '../../context/authContext';
import { AuthContainer, AvatarContainer, Login, Logo, ProfilePhoto, Signup, Wrapper } from './index.styles';
import Avatar from 'react-avatar';
import NavbarDropdown from '../NavbarDropdown';
import { useEffect } from 'react';

const Navbar = () => {
    const { user } = useAuth();
    const tempUsername = sessionStorage.getItem('username');

    return (
        <Wrapper>
            <Link href="/" passHref>
                <Logo>🔥POST</Logo>
            </Link>

            <AuthContainer>
                {user ? (
                    <>
                        <Link href={`/${user?.uid}`}>
                            {user?.photoURL ? (
                                <ProfilePhoto src={user?.photoURL} alt="" />
                            ) : (
                                <AvatarContainer>
                                    <Avatar name={user?.displayName ? user?.displayName : tempUsername} round={true} className="avatar" />
                                </AvatarContainer>
                            )}
                        </Link>
                        <NavbarDropdown />
                    </>
                ) : (
                    <>
                        <Link href="/login" passHref>
                            <Login>Log in</Login>
                        </Link>
                        <Link href="/signup" passHref>
                            <Signup>Sign up</Signup>
                        </Link>
                    </>
                )}
            </AuthContainer>
        </Wrapper>
    );
};

export default Navbar;

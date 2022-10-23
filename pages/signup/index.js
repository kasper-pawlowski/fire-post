import Link from 'next/link';
import { GoogleIcon, Input, NoAccount, NoAccountContainer, SignupWithGoogle, SubmitButton, Title, Form, Wrapper } from './index.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Signup = () => {
    const { loginWithGoogle, signup, user } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password, username }) => {
        signup(email, password, username);
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle();
    };

    useEffect(() => {
        if (user) {
            router.replace('/');
        }
    }, [router, user]);

    return (
        <Wrapper>
            <Title>Signup</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input name="username" placeholder="Username" type="text" {...register('username', { required: true })} />
                <Input name="email" placeholder="Email" type="email" {...register('email', { required: true })} />
                <Input name="password" placeholder="Password" type="password" {...register('password', { required: true })} />
                <SubmitButton type="submit">Continue</SubmitButton>
            </Form>
            <SignupWithGoogle onClick={handleLoginWithGoogle}>
                <GoogleIcon /> Sign up with Google
            </SignupWithGoogle>
            <NoAccountContainer>
                Already have an account?
                <Link href="/login" passHref>
                    <NoAccount>Log in</NoAccount>
                </Link>
            </NoAccountContainer>
        </Wrapper>
    );
};

export default Signup;

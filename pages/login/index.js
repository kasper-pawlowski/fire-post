import Link from 'next/link';
import {
    ForgotPassword,
    GoogleIcon,
    Input,
    NoAccount,
    NoAccountContainer,
    SigninWithGoogle,
    SubmitButton,
    Title,
    Form,
    Wrapper,
} from './index.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
    const { loginWithGoogle, login, user } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password, username }) => {
        login(email, password);
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
            <Title>Log in</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" placeholder="Email" type="text" {...register('email', { required: true })} />
                <Input name="password" placeholder="Password" type="password" {...register('password', { required: true })} />
                <ForgotPassword>Forgot password</ForgotPassword>
                <SubmitButton type="submit">Continue</SubmitButton>
            </Form>
            <SigninWithGoogle onClick={handleLoginWithGoogle}>
                <GoogleIcon /> Sign in with Google
            </SigninWithGoogle>
            <NoAccountContainer>
                {`Don't have an account?`}
                <Link href="/signup" passHref>
                    <NoAccount>Sign up</NoAccount>
                </Link>
            </NoAccountContainer>
        </Wrapper>
    );
};

export default Login;

import React, { useState, MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../molecules/ErrorMessage/ErrorMessage';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Input } from '../components/Input/Input';
import { LoginButton, IdLoginButton } from '../components/Button/Button';
import { loginUser, fetchAllUsers } from '../store/Users/actions';
import { Users } from '../interfaces/Users/Users';


const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 50px);
`;

const LoginSectionHeading = styled(Heading)`
    margin-top: 100px;
    margin-bottom: 10px;
`;

const LoginParagraph = styled(Paragraph)`
    text-align: center;
`;

const AsideWrapper = styled.aside`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 25px;
`;

const Egde = styled.div`
    width: 30vw;
    height: 1px;
    border: 1px solid gray;
`;

const AsideParagraph = styled(Paragraph)`
    color: gray;
    text-align: center;
    margin: 0 10px 6px 10px;
    padding-top: -10px;
`;

const IdLoginBtn = styled(IdLoginButton)`
    margin: 20px auto;
    display: block;
`;

interface IRootState {
    errors: {
        message: string,
    }
}

const initialLoginData: LoginData = {
    email: "",
    user_id: null,
    password: "",

}

interface LoginData {
    email: Users['email'],
    user_id: Users['user_id'],
    password: Users['password'],

}

const LoginSection = () => {

    const [loginById, setLoginById] = useState<boolean>(true);
    const [loginData, setLoginData] = useState<LoginData>(initialLoginData);

    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector((state: IRootState) => state.errors.message);
    

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    const handleClickIdLoginBtn = (e: MouseEvent): void => {
        e.preventDefault();
        setLoginById(!loginById);
        console.log(loginById);
    }

    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement ;
        setLoginData({
            ...loginData,
            [target.name]: target.value, 
        })
    }
    
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        try {
            dispatch(loginUser(loginData, history))

        } catch (error) {
            console.log(error.response);
        }
    }

    return(
        <Wrapper>
            
            {
                loginById ? (
                    <LoginSectionHeading>Zaloguj się</LoginSectionHeading>
                ) : (
                    <LoginSectionHeading>Podaj identyfikator firmowy</LoginSectionHeading>
                )
            }
            <LoginParagraph>Nie pamiętasz hasła? Wygeneruj nowe</LoginParagraph>

            {
                error && (<ErrorMessage error={error} />)
            }

            <form onSubmit={(e) => handleSubmit(e)}>

                
                {
                    loginById ? ( <Input name="email" type="email" placeholder="Podaj email" onChange={ (e) => handleChange(e) } /> ) : (
                        <Input name="user_id" type="number" placeholder="Podaj id" onChange={ (e) => handleChange(e) } />
                    )
                }
                        
                
                <Input name="password" type="password" placeholder="Podaj hasło" onChange={ (e) => handleChange(e) } />
                <LoginButton onSubmit={(e) => handleSubmit(e)}>Zaloguj się</LoginButton>
            </form>
                
            {
                loginById && (
                <>
                    <AsideWrapper>
                        <Egde />
                        <AsideParagraph>Lub</AsideParagraph>
                        <Egde />
                    </AsideWrapper>
                    <IdLoginBtn onClick={(e) => handleClickIdLoginBtn(e)}>Skorzystaj z identyfikatora</IdLoginBtn>
                </>
                )
            }
            

        </Wrapper>
    )
}

export default LoginSection;
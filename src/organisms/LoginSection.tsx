import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Input } from '../components/Input/Input';
import { LoginButton, IdLoginButton } from '../components/Button/Button';


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

const LoginSection = () => {

    const [loginById, setLoginById] = useState<boolean>(false);

    const handleClickIdLoginBtn = (e: MouseEvent): void => {
        e.preventDefault();
        setLoginById(!loginById);
        console.log(loginById);
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
            <form>
                <Input />

                {
                    loginById && (
                        <Input />
                    )
                }
                <LoginButton onClick={(e) => handleClickIdLoginBtn(e)}>Zaloguj się</LoginButton>
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
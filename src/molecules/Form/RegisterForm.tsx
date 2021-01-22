import React from 'react';
import styled from 'styled-components';
import { LoginButton } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const RegisterBtn = styled(LoginButton)`
    margin-top: 20px;
`;

const RegisterInput = styled(Input)`
    margin: 5px auto;
    height: 35px;
`;

const RegisterForm = () => {
    return(
        <Form>
             <RegisterInput />
             <RegisterInput />
             <RegisterInput />
             <RegisterInput />
             <RegisterInput />
             <RegisterInput />
            <RegisterBtn>Utwórz konto</RegisterBtn>
        </Form>
    )
}

export default RegisterForm;
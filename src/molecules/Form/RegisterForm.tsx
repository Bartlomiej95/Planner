import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LoginButton } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { createUser, fetchAllUsers } from '../../store/Users/actions';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { RegisterUserData } from '../../interfaces/Users/Users';
import { useHistory } from 'react-router';

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

interface IRootState {
    errors: {
        message: string,
    }
}

const RegisterForm: React.FC = () => {

    const [registerData, setRegisterData] = useState<RegisterUserData>({ 
        name: '',
        surname: '',
        email: '',
        password: '',
        replayPassword: '',
        user_id: '',
    });
    const history = useHistory();


   const error = useSelector((state: IRootState) => state.errors.message)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
       setRegisterData({
           ...registerData, 
           [target.name]: target.value,
       })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {

        e.preventDefault();
        console.log(registerData);

        try {
            dispatch(createUser(registerData, history))
            
        } catch (error) {
           console.log(error)
        }
            

    }

    return(
        <Form onSubmit={ (e) => handleSubmit(e) }>
            { error && <ErrorMessage error={error} /> }
             <RegisterInput name="name" type="text" placeholder="Imię" value={registerData.name} onChange={(e) => handleChange(e)} />
             <RegisterInput name="surname" type="text" placeholder="Nazwisko" value={registerData.surname} onChange={ (e) => handleChange(e) } />
             <RegisterInput name="email" type="email" placeholder="Adres email" value={registerData.email} onChange={ (e) => handleChange(e) } />
             <RegisterInput name="password" type="password" placeholder="Hasło" value={registerData.password} onChange={ (e) => handleChange(e) } />
             <RegisterInput name="replayPassword" type="password" placeholder="Potwórz hasło" value={registerData.replayPassword} onChange={ (e) => handleChange(e) } />
             <RegisterInput name="user_id" type="number" placeholder="Identyfikator pracownika" value={registerData.user_id} onChange={ (e) => handleChange(e) } />
            <RegisterBtn>Utwórz konto</RegisterBtn>
        </Form>
    )
}

export default RegisterForm;
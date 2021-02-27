import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';

const Form = styled.form`
    margin-top: 51px;
`;

const CreateProjectForm = () => {
    return(
        <>
            <Heading>Nowy projekt</Heading>
            <Form>
                <Input placeholder="Nazwa projektu"/>
                <Input placeholder="Klient"/>
                <Input placeholder="Termin oddania projektu"/>
                <Input placeholder="Ilość godzin na projekt"/>
                <Input placeholder="Wartość projektu w PLN"/>
            </Form>
        </>
    )
}

export default CreateProjectForm;
import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';

const Form = styled.form`
    margin-top: 51px;
`;

const initialProjectData = {
    name: '',
    customer: '',
    deadline: '',
    hours: '',
    projectValue: '',
}

interface Props {
    getFormData: () => void,
}

const CreateProjectForm = ({ getFormData }:Props) => {

    const [ projectData, setProjectData ] = useState(initialProjectData);

    const handleChange = (e :React.SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        const name = target.name;
        console.log(projectData);
        setProjectData({
            ...projectData,
            [name]:target.value
        });
        getFormData();
    }

    // useEffect(() => {
    //     return getFormData(projectData)
    // }, [projectData])

    return(
        <>
            <Heading>Nowy projekt</Heading>
            <Form>
                <Input placeholder="Nazwa projektu" type="string" name="name" onChange={ (e) => handleChange(e) } value={projectData.name} />
                <Input placeholder="Klient" type="string" name="customer" onChange={ (e) => handleChange(e)} value={projectData.customer} />
                <Input placeholder="Termin oddania projektu" type="date" name="deadline" onChange={ (e) => handleChange(e) } value={projectData.deadline} />
                <Input placeholder="Ilość godzin na projekt" type="number" name="hours" onChange={ (e) => handleChange(e) } value={projectData.hours} />
                <Input placeholder="Wartość projektu w PLN" type="number" name="projectValue" onChange={ (e) => handleChange(e) } value={projectData.projectValue} />
            </Form>
        </>
    )
}

export default CreateProjectForm;
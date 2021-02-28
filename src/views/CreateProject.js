import React from 'react';
import styled from 'styled-components';
import PersonToProject from '../molecules/PersonToProject/PersonToProject';
import CreateProjectForm from '../organisms/CreateProjectForm';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import TextArea from '../components/TextArea/TextArea';
import { SubHeading } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';
import AsideSection from '../organisms/AsideSection';
import LabelSection from '../organisms/LabelSection';


const AssignmentSection = styled.section`
    max-width: 275px;
    margin: 0 auto;
`;

const MarksSection = styled.section`
    max-width: 275px;
    margin: 50px auto 0px auto;
`;

const CreateBtn = styled(LoginButton)`
    margin-bottom: 40px;
`;

const CreateProject = () => {
    return(
       <>
            <Header />
            <AsideSection />
            <CreateProjectForm>
            </CreateProjectForm>
            <LabelSection title="Wybierz dział odpowiedzialny za projekt" category="department" />
            <AssignmentSection>
                <SubHeading>Przypisz osoby <br /> pracujące przy projekcie</SubHeading>
                <PersonToProject />
                <PersonToProject />
                <PersonToProject />
            </AssignmentSection>
            <MarksSection>
                <SubHeading>Przekaż wytyczne<br /> dotyczące projektu</SubHeading>
                <TextArea placeholder="Treść wiadomości" />
            </MarksSection>
            <CreateBtn >Utwórz projekt</CreateBtn>

            <Footer />
       </>
    )
}

export default CreateProject;
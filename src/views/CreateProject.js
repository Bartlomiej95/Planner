import React from 'react';
import styled from 'styled-components';
import Label from '../molecules/Label/Label';
import PersonToProject from '../molecules/PersonToProject/PersonToProject';
import CreateProjectForm from '../organisms/CreateProjectForm';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import TextArea from '../components/TextArea/TextArea';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { LoginButton } from '../components/Button/Button';

const Aside = styled.aside`
    padding: 0 35px;
`;

const AsideParagraph = styled(Paragraph)`
    font-weight: 700;
    text-align: right;
    margin-top: 35px;
    margin-bottom: 80px;
    cursor: pointer;
`;

const DepartmentSection = styled.section`
     max-width: 300px;
     margin: 0 auto;
     padding-top: 75px;
`;

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 40px auto;
`;

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
            <Aside>
                <AsideParagraph>Wróć</AsideParagraph>
            </Aside>
            <CreateProjectForm>
            </CreateProjectForm>

            <DepartmentSection>
                <SubHeading>Wybierz dział <br/> odpowiedzialny za projekt</SubHeading>
                <LabelWrapper>
                    <Label division="Dział graficzny" isSelect={true} />
                    <Label division="Dział marketingu" isSelect={false} />
                    <Label division="Dział programistyczny" isSelect={false} />
                    <Label division="Administracja" isSelect={false} />
                    <Label division="Testerzy" isSelect={false} />
                    <Label division="Dział obsługi klienta" isSelect={false} />
                </LabelWrapper>
            </DepartmentSection>
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
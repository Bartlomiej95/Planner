import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../organisms/Footer';
import AsideSection from '../organisms/AsideSection';
import Header from '../organisms/Header';
import PersonToProject from '../molecules/PersonToProject/PersonToProject';
import LabelSection from '../organisms/LabelSection';
import TextArea from '../components/TextArea/TextArea';
import acceptingIcon from '../assets/accept.svg';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';
import { Paragraph } from '../components/Paragraph/Paragraph';


const AssignmentSection = styled.section`
    max-width: 275px;
    margin: 0 auto;
`;

const MarksSection = styled.section`
    max-width: 275px;
    margin: 50px auto 0px auto;
`;

const ConfirmDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 275px;
`;

const ConfirmBtn = styled(LoginButton)`
    margin: 40px auto;
`;

const ConfirmBox = styled.div`
    border: 1px solid #D1D1D1;
    width: 41px;
    height: 41px;
    background-color: #D1D1D1;
    border-radius: 50%;
    cursor: pointer;
    background-image: none;

    ${({ userSelect }) => userSelect && css`
        background-image: url(${({ icon }) => icon });
        background-position: center;
        background-repeat: no-repeat;
        background-color: #00BD51;
    `}
`;

const ParagraphBox = styled(Paragraph)`
    width: 70%;
`;

const TasksToProject = () => {

    const [isAccept, setIsAccept] = useState(false);

    return(
        <>
            <Header/>
            <AsideSection />
            <Heading> Projekt XYZ </Heading>
            <AssignmentSection>
                <SubHeading>Przydziel zadania do projektu</SubHeading>
                <PersonToProject />
                <PersonToProject />
                <PersonToProject />
            </AssignmentSection>
            <LabelSection title="Wybierz kategorię zadania" category="tasks"></LabelSection>
            <MarksSection>
                <SubHeading>Przekaż wytyczne<br /> dotyczące projektu</SubHeading>
                <TextArea placeholder="Treść wiadomości" />
            </MarksSection>
            <ConfirmDiv>
                <ConfirmBox  icon={acceptingIcon} onClick={() => setIsAccept( prev => !prev)} userSelect={isAccept} />
                <ParagraphBox>Poproś o raport z postępu prac po upływie 50% czasu.</ParagraphBox>
            </ConfirmDiv>
            <ConfirmBtn>Zatwierdź zadanie</ConfirmBtn>

            <Footer/>
        </>
    )
}

export default TasksToProject;
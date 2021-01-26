import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import ArchivesCard from '../molecules/ArchivesCard/ArchivesCard';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import TasksSection from './TasksSection';

const Wrapper = styled.main`
    min-height: 100vh;

`;

const WrapperNavbar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;

`;

const NavSubHeading = styled(SubHeading)`
    font-size: 12px;
    color: #0903B0;
`;

const WrapperProjectCard = styled.div`
    width: 100%;
    margin-top: 42px;
`;

const WrapperHelpdeskInfo = styled.div`
    width: 50%;
    height: 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

const ParagraphHelpdesk = styled(Paragraph)`
    margin-top: 14px;
`;

const SpanHelpdesk = styled.span`
    font-weight: 700;
    cursor: pointer;
`;

enum MainSectionType {
    Project = 'project',
    Archives = 'archives',
    Tasks = 'tasks'
}

const MainSection :React.FC = () => {

    const [typeOfMainSection, setTypeOfMainSection] = useState(MainSectionType.Project)
    console.log(typeOfMainSection);
    return(
        <Wrapper>
            <WrapperNavbar>
                <NavSubHeading onClick={() => setTypeOfMainSection(MainSectionType.Project)}>Projekty</NavSubHeading>
                <NavSubHeading onClick={() => setTypeOfMainSection(MainSectionType.Archives)}>Archiwum projektów</NavSubHeading>
                <NavSubHeading onClick={() => setTypeOfMainSection(MainSectionType.Tasks)}>Lista zadań</NavSubHeading>
            </WrapperNavbar>
            {
                typeOfMainSection === MainSectionType.Project && ( 
                    <WrapperProjectCard>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </WrapperProjectCard>
                ) 
            }
            {
                typeOfMainSection === MainSectionType.Archives && (
                    <WrapperProjectCard>
                        <ArchivesCard />
                        <ArchivesCard />
                        <ArchivesCard />
                    </WrapperProjectCard>
                )
            }
            {
                typeOfMainSection === MainSectionType.Tasks && (
                    <WrapperProjectCard>
                       <TasksSection />
                    </WrapperProjectCard>
                )
            }
            <WrapperHelpdeskInfo>
                <SubHeading>Masz problem z obsługą planera?</SubHeading>
                <ParagraphHelpdesk> <SpanHelpdesk>Zgłoś się</SpanHelpdesk> do naszego helpdesku</ParagraphHelpdesk>
            </WrapperHelpdeskInfo>
        </Wrapper>
    )
}

export default MainSection;
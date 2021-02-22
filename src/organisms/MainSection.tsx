import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import ArchivesCard from '../molecules/ArchivesCard/ArchivesCard';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import TasksSection from './TasksSection';
import { fetchAllProjects } from '../actions/projects';
import InnerUserNavbar from '../molecules/InnerUserNavbar/InnerUserNavbar';

const Wrapper = styled.main`
    min-height: 100vh;
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
    ProjectManager = "projectManager",
    Tasks = 'tasks'
}

interface RootState {
    projects: {
        name: String,
        map: Function,
    };   
}

const MainSection :React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProjects());
    }, [dispatch]);

    const [typeOfMainSection, setTypeOfMainSection] = useState(MainSectionType.Project)
    
    const projects = useSelector( (state: RootState) => state.projects);

    const isAdmin = true;

    return(
        <Wrapper>
            <InnerUserNavbar 
                typeFn={ (typeOfMainSection: React.SetStateAction<MainSectionType>) => setTypeOfMainSection(typeOfMainSection)}
                valueOfType={typeOfMainSection} 
            />
            {
                typeOfMainSection === MainSectionType.Project && ( 
                    projects.map( (project: any) => 
                        
                    <WrapperProjectCard>
                        <ProjectCard  titleProject={project.name} description={project.description} />
                    </WrapperProjectCard>
                    )
                ) 
            }
            {
                typeOfMainSection === MainSectionType.Archives && (
                    <WrapperProjectCard>
                        <ArchivesCard admin={false} />
                        <ArchivesCard admin={false} />
                        <ArchivesCard admin={false} />
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
               {
                typeOfMainSection === MainSectionType.ProjectManager && (
                    <WrapperProjectCard>
                        <ArchivesCard admin={isAdmin} />
                        <ArchivesCard admin={isAdmin} />
                        <ArchivesCard admin={isAdmin}/>
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
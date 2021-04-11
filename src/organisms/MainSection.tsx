import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import ArchivesCard from '../molecules/ArchivesCard/ArchivesCard';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import TasksSection from './TasksSection.js';
import { fetchAllProjects, fetchData } from '../actions/projects';
import InnerUserNavbar from '../molecules/InnerUserNavbar/InnerUserNavbar';
import { LoginButton, IdLoginButton } from '../components/Button/Button';
import UserContext from '../context/UserContext';

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

const BtnCreateProject = styled(LoginButton)`
    width: 214px;
    margin-bottom: 45px;
`;

const BtnLoadMore = styled(IdLoginButton)`
    display: block;
    margin: 50px auto;
    width: 150px;
`;


enum MainSectionType {
    Project = 'project',
    Archives = 'archives',
    ProjectManager = "projectManager",
    Tasks = 'tasks',
    Data = 'data',
}

interface RootState {
    projects: {
        name: String,
        map: Function,
        slice: Function,
        projects: any,
    };   
}

const MainSection :React.FC = () => {

    const { user, getUser } = useContext(UserContext);
    const [typeOfMainSection, setTypeOfMainSection] = useState(MainSectionType.Project);
    const [counterClickLoadMore, setCounterClickLoadMore] = useState(0);
    const projects = useSelector( (state: RootState) => state.projects.projects);
    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
        getUser();
    }, [dispatch]);

    // dispatchujemy odpowiednią funkcję w zależności na jaką zakładkę kliknie project manager
    // w zakładce project manager - musi zarządzać wszystkimi projektami
    // z kolei w zakładce projekty - musi widzieć tylko projekty do których sam należy
    useEffect(() => {
        if(typeOfMainSection === MainSectionType.ProjectManager ){
            dispatch(fetchAllProjects())
        } if( typeOfMainSection === MainSectionType.Project){
            dispatch(fetchData())
        }
    }, [typeOfMainSection])

    if(user === null || projects === null) {
        return(
            <h1>Loading ...</h1>
        )
    }
    const isAdmin = user[0].is_admin;
    let superAdmin = false;
    
    if(user[0].hasOwnProperty('super_admin')){
        console.log('super_admin');
        superAdmin = user[0].super_admin;
    }

    let numberOfProjectOnTheOneLoad = 5;
    let numberOfLoadedProjectsAtTheBeggining = 3;
    let numberOfProjects = numberOfLoadedProjectsAtTheBeggining + numberOfProjectOnTheOneLoad * counterClickLoadMore;
    const projectsDivide = projects.slice(0,numberOfProjects)

    return(
        <Wrapper>
            {/* InnerUserNavbar - menu przesuwane pod profilem użytkownika */}
            <InnerUserNavbar 
                typeFn={ (typeOfMainSection: React.SetStateAction<MainSectionType>) => setTypeOfMainSection(typeOfMainSection)}
                valueOfType={typeOfMainSection} 
                isAdmin={isAdmin}
                superAdmin={superAdmin}
            />
            {
                typeOfMainSection === MainSectionType.Project && ( 
                    <WrapperProjectCard>
                    {   projects.map( (project: any) =>   
                            <ProjectCard  titleProject={project.name} description={project.content} departments={project.departments} />
                        )
                    }
                    </WrapperProjectCard>
                ) 
            }
            {
                typeOfMainSection === MainSectionType.Archives && (
                    <WrapperProjectCard>
                        <ArchivesCard admin={false} name="Nazwa projektu" description="Opis projektu" id={1} projectUsers={[]} customer="klient" hours={10} projectValue={1000}/>
                        <ArchivesCard admin={false} name="Nazwa projektu" description="Opis projektu" id={1} projectUsers={[]} customer="klient" hours={10} projectValue={1000}/>
                        <ArchivesCard admin={false} name="Nazwa projektu" description="Opis projektu" id={1} projectUsers={[]} customer="klient" hours={10} projectValue={1000}/>
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
                (isAdmin || superAdmin) && ( typeOfMainSection === MainSectionType.ProjectManager) && (
                    <WrapperProjectCard>
                        <BtnCreateProject onClick={() => history.push('/homepage/project/create')}>Dodaj nowy projekt</BtnCreateProject>
                        {
                            projectsDivide.map((item : any) => (
                                <ArchivesCard 
                                    admin={isAdmin} 
                                    key={item._id} 
                                    name={item.name} 
                                    description={item.content} 
                                    id={item._id} 
                                    customer={item.customer}
                                    projectUsers={item.projectUsers} 
                                    hours={item.hours}
                                    projectValue={item.projectValue}
                                    />
                            ))
                        }
                        <BtnLoadMore onClick={() => setCounterClickLoadMore(prev => prev + 1)} > Załaduj więcej </BtnLoadMore>
                    </WrapperProjectCard>
                )
            }
            {
                superAdmin && (typeOfMainSection === MainSectionType.Data) && (
                    <SubHeading>Witaj SuperAdminie, dej więcej kasy pracownikom</SubHeading>
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
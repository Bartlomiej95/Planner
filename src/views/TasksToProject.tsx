import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import PersonToProject from '../molecules/PersonToProject/PersonToProject';
import LabelSection from '../organisms/LabelSection';
import TextArea from '../components/TextArea/TextArea';
import acceptingIcon from '../assets/accept.svg';
import ErrorMessage from '../molecules/ErrorMessage/ErrorMessage';
import Projects from '../interfaces/Projects/Projects';
import { Users } from '../interfaces/Users/Users';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Input } from '../components/Input/Input';
import { createNewTask, getEmpty } from '../store/Tasks/actions';
import { addTaskToProject } from '../store/Projects/actions';
import { InitialTaskData, Task } from '../interfaces/Tasks/Tasks';


const AssignmentSection = styled.section`
    max-width: 275px;
    margin: 0 auto;
`;

const FormSection = styled.section`
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

const ConfirmBox = styled.div<{readonly userSelect :boolean, readonly icon :string}>`
    border: 1px solid #D1D1D1;
    width: 41px;
    height: 41px;
    background-color: #D1D1D1;
    border-radius: 50%;
    cursor: pointer;
    background-image: none;

    ${({ userSelect }) => userSelect && css<{ readonly icon :string}>`
        background-image: url(${({ icon }) => icon });
        background-position: center;
        background-repeat: no-repeat;
        background-color: #00BD51;
    `}
`;

const ParagraphBox = styled(Paragraph)`
    width: 70%;
`;

const ParagraphNote = styled(Paragraph)`
    color: #0903B0;
    text-align: center;
`;

const ParagraphRemark = styled(Paragraph)`
    color: red;
    text-align: center;
    font-weight: 700;
`;

const SpanNote = styled.span`
    font-weight: 700;
`;

const SubHeadingForm = styled(SubHeading)`
    margin: 30px auto;
`;

const initialTaskData: InitialTaskData = {
    title: '',
    brief: '',
    time: 0,
    guidelines: '',
    categoryTask: [''],
    projectId: '',
    projectName: '',
    halfTimeReport: false,
    taskUsers: [''],
    isFinish: false,
    taskTime: 0,
    weight: 0,
    id: '',
    _id: '',
}


interface DefaultRootState {
    users: Array<Users>,
    tasks: {
        categoryTask: string[],
    },
    errors: {
        message: string,
    }
}

interface Props {
    location: {
        state: Projects
    }
}

const TasksToProject = (props :Props) => {

    const [taskData, setTaskData] = useState(initialTaskData);
    const [isAccept, setIsAccept] = useState(false);
    const [halfTimeReport, setHalfTimeRaport] = useState(false);
    const [idUserAssign, setIdUserAssign] = useState<Array<string>>([]); 
    const [changeDetektor, setChangeDetektor] = useState(false);
    const [status, setStatus] = useState(false);
    const users = useSelector((state:DefaultRootState) => state.users);
    const categoryTask = useSelector((state:DefaultRootState) => state.tasks.categoryTask);
    const errorMessage = useSelector((state:DefaultRootState) => state.errors.message);
    const dispatch = useDispatch();
    const history = useHistory();

    const { id, projectUsers, name, hours }:Projects = props.location.state;
    const [ remainingProjectTime, setRemainingProjectTime ] = useState(Number(hours)*60); //pozpostały czas projektu w minutach stąd mnożenie 

    useEffect(() => {
        setIdUserAssign(idUserAssign);
        dispatch(getEmpty());
    }, [changeDetektor]);

    useEffect(()=> {
        setTaskData({
            ...taskData,
            categoryTask,
            projectId: id,
            projectName: name,
        })
    }, [status])

    useEffect(()=>{
        setTaskData({
            ...taskData,
            halfTimeReport
        })
    },[isAccept])

    const handleAssignIdUserToProject = (id :string, department :string) => {
         // sprawdzamy czy jakiś użytkownik nie został wcześniej do zadania przypisany
         if(typeof idUserAssign !== "undefined" && idUserAssign.length > 0){
            // jeśli ktoś już jest to sprawdzamy czy czasami przed chwilą kliknięty pracownik, to nie jest ten, który został już wcześniej przypisany do tego projektu
            // mówiąc prościej czy pracownik nie został klinięty drugi raz -> czyli odklinięty
            const foundExistingId = idUserAssign.includes(id);
            
            if(foundExistingId){
                // jeśli istnieje, to musimy go usunąć z tablicy
                const filteredArray = idUserAssign.filter(item => item !== id );
        
                setTaskData({
                    ...taskData,
                    taskUsers: filteredArray
                })
                return setIdUserAssign(filteredArray) //zwracamy tablicę bez usuniętego id              
                
            }
        }
        setIdUserAssign([
            ...idUserAssign,
            id
        ])
        setTaskData({
            ...taskData,
            taskUsers: [...idUserAssign, id]
        })

        setChangeDetektor(!changeDetektor);
    }

    const handleChange = (e :React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement ;

        // obsługujemy inputa w którym użytkownik podaje informajce ile minut przeznacza na zadanie. Automatycznie o tyle skracamy 
        // czas który pozostał do ukończenia całego projektu
        let remainingTime = Number(hours) * 60 - Number(target.value);

        if(target.name === "time"){
            setRemainingProjectTime(Number((remainingTime).toFixed(2)));
        }  
        setTaskData({
            ...taskData,
            [target.name]: target.value,
        })
        
    }

    const handleClickBox = (e :React.SyntheticEvent) => {
        e.preventDefault();
        setHalfTimeRaport(prev => !prev);
        setIsAccept(prev => !prev);
        setTaskData({
            ...taskData,
            halfTimeReport,
        })
    }

    const handleSubmit = (e :React.SyntheticEvent) => {
        try { 
            e.preventDefault();
            dispatch(createNewTask(taskData, history));
            dispatch(addTaskToProject(id, taskData));
            console.log(taskData);
        } catch (error) {
            console.log(error); 
        }
    }
    // potrzebujemy wiedzieć kto jest przypisany do projektu - tylko tym osobom możemy przypisać zadanie w ramach projektu
    // id projektu, id osób w projekcie 

    const usersInProject = users.filter(user => projectUsers.includes(user._id));

    return(
        <>
            <Header/>
            <Heading> {name} </Heading>
            <AssignmentSection>
                <SubHeading>Przydziel zadania do projektu</SubHeading>
                {
                    usersInProject.map(user => (
                        <PersonToProject 
                            key={user._id}
                            id={user._id}
                            name={user.name}
                            surname={user.surname}
                            position={user.position}
                            department={user.department}
                            assignUserToProject={ () => handleAssignIdUserToProject(user._id, user.department)}
                            assignUsersFromEditProject={[]}
                        />
                    ))
                }
            </AssignmentSection>
            <LabelSection title="Wybierz kategorię zadania" category="tasks" changeStatus={() => setStatus(!status)} />
            <FormSection>
                <form id="task-form" onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Nazwa zadania" type="string" name="title" value={taskData.title} onChange={(e) => handleChange(e)} />
                    <Input placeholder="Skrócony opis zadania" type="string" name="brief" value={taskData.brief} onChange={(e) => handleChange(e)} />
                    <Input placeholder="Podaj czas pracy w minutach" type="number" name="time" value={taskData.time} onChange={(e) => handleChange(e)} />
                    {
                        remainingProjectTime < 0 ? ( 
                            <ParagraphRemark> Przekroczono limit czasu przeznaczonego na projekt!</ParagraphRemark>
                        ) : ( 
                            <ParagraphNote><SpanNote>Uwaga!</SpanNote> W ramach tego projektu <br/>zostało do zagospodarowania <SpanNote>{Math.floor(remainingProjectTime/60)} godzin {(remainingProjectTime % 60).toFixed(0)} minut</SpanNote></ParagraphNote>
                        )
                    }
                    <SubHeadingForm>Opisz zakres pracy<br /> w ramach zadania</SubHeadingForm>
                    <TextArea placeholder="Treść wiadomości" name="guidelines" value={taskData.guidelines} onChange={(e) => handleChange(e)} />
                    <ConfirmDiv>
                        <ConfirmBox icon={acceptingIcon} onClick={(e) => handleClickBox(e)} userSelect={isAccept} />
                        <ParagraphBox >Poproś o raport z postępu prac po upływie 50% czasu.</ParagraphBox>
                    </ConfirmDiv>
                    {errorMessage && <ErrorMessage error={errorMessage} />}
                    <ConfirmBtn form="task-form">Zatwierdź zadanie</ConfirmBtn>
                </form>
            </FormSection>

            <Footer/>
        </>
    )
}

export default TasksToProject;
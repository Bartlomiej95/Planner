import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PersonToProject from '../molecules/PersonToProject/PersonToProject';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import TextArea from '../components/TextArea/TextArea';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';
import LabelSection from '../organisms/LabelSection';
import { Input } from '../components/Input/Input';
import { fetchAllUsers } from '../actions/users';
import { addActiveDepartmentFromEdit  } from '../actions/departments';
import { createProject, editProject, fetchAllProjects } from '../actions/projects';
import ErrorMessage from '../molecules/ErrorMessage/ErrorMessage';

const CreateProjectFormDiv = styled.div`
    max-width: 275px;
    margin: 50px auto 0 auto;
`;

const Form = styled.form`
    margin-top: 51px;
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

const CustomerTextArea = styled(TextArea)`
    min-height: 100px;
    width: 300px;
    border-radius: 20px;
    padding: 10px 10px 10px 15px;
    margin: 10px auto;

    ::placeholder{
        padding-left: 25px;
        color: rgb(55, 47, 255, 0.5);
    }
`;

const initialProjectData = {
    name: '',
    customer: '',
    deadline: '',
    hours: '',
    projectValue: '',
    content: '',
    assumptions: '',
    scopeOfWork: '',
    customerInfo: '',
}

const CreateProject = (props) => {
    
    const [projectData, setProjectData] = useState(initialProjectData);
    const [department, setDepartemnt] = useState([]);
    const [users, setUsers] = useState([]);
    const [ status, setStatus] = useState(false);
    const [ idUsersAssignToProject, setIdUsersAssignToProject] = useState([]); //id użytkowników przypisanych (klikniętych) do wykonania projektu
    const [ changeDetektor, setChangeDetektor] = useState(false);
    
    // flagi dzięki którym dane z edytowanego projektu będą uruchamiane w useEffect tylko raz, po pierwszym uruchomieniu damy false
    const [ isEditedDataUpdate, setIsEditedDataUpdate ] = useState(true); 
    const [ isEditedIdAssign, setIsEditedIdAssign ] = useState(true);
    
    const dispatch = useDispatch();
    const fetchUsers = useSelector(state => state.users);
    const fetchDepartments = useSelector(state => state.departments);
    const errorMessage = useSelector(state => state.errors.message);
    const history = useHistory();
    const { isEdited, name, customer, hours, projectValue, deadline, content, projectUsers, departments, id, scopeOfWork, assumptions, customerInfo } = props.location.state;

    useEffect(() => {
        dispatch(fetchAllUsers());
        setUsers(fetchUsers);
    }, [])

    useEffect(() => {
       setDepartemnt(fetchDepartments);
       if(isEdited && isEditedDataUpdate){
            dispatch(addActiveDepartmentFromEdit(departments)); 
            dispatch(fetchAllProjects());
            setIsEditedDataUpdate(false);
            setProjectData({
                ...projectData,
                name: name,
                customer: customer,
                deadline: deadline,
                hours: hours,
                projectValue: projectValue,
                content: content, 
                projectUsers: projectUsers,
                departments: departments,
                scopeOfWork: scopeOfWork,
                assumptions: assumptions,
                customerInfo: customerInfo,
            })
            return
       }
       setProjectData({
        ...projectData,
        departments: [...nameActiveDepartments]
    })
    }, [status])    

    useEffect(()=>{
        if(isEdited && isEditedIdAssign){
            setIdUsersAssignToProject(projectUsers);
            setIsEditedIdAssign(false);
            return;
        }
        setIdUsersAssignToProject(idUsersAssignToProject);
    }, [changeDetektor])

    //activeDepartments - nazwy działów które zostały wybrane do realizacji projektu
    let activeDepartments = department.filter(item => item.active);
    let nameActiveDepartments = activeDepartments.map(item => item.name);
    console.log(nameActiveDepartments);

    const assignUsersToSelectedDepartment = (user) => {
        let amountConditions = nameActiveDepartments.length;
        let i = 0;
        while(i < amountConditions){
            if(user.department === nameActiveDepartments[i]){
                return user
            }
            i++;
        }
    }

    //userzy z działów, które zostały wybrane
    const usersFromSelectedDepartments = fetchUsers.filter(assignUsersToSelectedDepartment);  

    const handleChange = (e) => {
        if(isEdited && isEditedDataUpdate){
            console.log(projectData);
            return;
        }
        e.preventDefault();
        const name = e.target.name;
        setProjectData({
            ...projectData,
            [name]:e.target.value
        });
    }

    // let projectUsers = [];
    //funkcja usuwająca użytkownika z tablicy, gdy admin kliknie drugi raz (czyli odkliknie udział użytkownika w projekcie)
    const handleAssignIdUserToProject = (id, department) => {
        
        // sprawdzamy czy jakiś użytkownik nie został wcześniej do projektu przypisany
        if(typeof idUsersAssignToProject !== "undefined" && idUsersAssignToProject.length > 0){
            // jeśli ktoś już jest to sprawdzamy czy czasami przed chwilą kliknięty pracownik, to nie jest ten, który został już wcześniej przypisany do tego projektu
            // mówiąc prościej czy pracownik nie został klinięty drugi raz -> czyli odklinięty
            const foundExistingId = idUsersAssignToProject.includes(id);
            
            if(foundExistingId){
                // jeśli istnieje, to musimy go usunąć z tablicy
                const filteredArray = idUsersAssignToProject.filter(item => item !== id );
        
                setProjectData({
                    ...projectData,
                    projectUsers: filteredArray
                })
                return setIdUsersAssignToProject(filteredArray) //zwracamy tablicę bez usuniętego id              
                
            }
        }

        // sprawdzamy czy dział ostanio używanego u
        const filteredActiveDepartment = nameActiveDepartments.includes(department);
        if(filteredActiveDepartment){
            setIdUsersAssignToProject([
                ...idUsersAssignToProject,
                id
            ])
            
            setProjectData({
                ...projectData,
                projectUsers: [
                    ...idUsersAssignToProject,
                    id
                ]
            })
        } 
        setChangeDetektor(!changeDetektor);
        
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if(isEdited){
                console.log(projectData);
                dispatch(editProject(projectData, name, id, history));
                return;
            }
            
            dispatch(createProject(projectData, history));
            console.log(projectData);
            
        } catch (error) {
            console.log(error)
        }
    
    }

    return(
       <>
            <Header />
            <CreateProjectFormDiv>
                <Heading>
                    {
                        isEdited ? ( name ) : ("Nowy projekt")     
                    }    
                </Heading>
                <Form id="project-form" onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Nazwa projektu" type="string" name="name" onChange={ (e) => handleChange(e) } value={projectData.name} />
                    <Input placeholder="Klient" type="string" name="customer" onChange={ (e) => handleChange(e)} value={projectData.customer} />
                    <CustomerTextArea placeholder="Krótki opis klienta" name="customerInfo" onChange={(e) => handleChange(e)} value={projectData.customerInfo} />
                    <Input placeholder="Termin oddania projektu" type="date" name="deadline" onChange={ (e) => handleChange(e) } value={projectData.deadline} />
                    <Input placeholder="Ilość godzin na projekt" type="number" name="hours" onChange={ (e) => handleChange(e) } value={projectData.hours} />
                    <Input placeholder="Wartość projektu w PLN" type="number" name="projectValue" onChange={ (e) => handleChange(e) } value={projectData.projectValue} />
                
                    <SubHeading>Opisz założenia projektowe</SubHeading>
                    <TextArea placeholder="Treść wiadomości" name="assumptions" onChange={(e) => handleChange(e)} value={projectData.assumptions} />
                    <SubHeading>Opisz zakres pracy <br /> w ramach projektu</SubHeading>
                    <TextArea placeholder="Treść wiadomości" name="scopeOfWork" onChange={(e) => handleChange(e)} value={projectData.scopeOfWork} />
                </Form>
            </CreateProjectFormDiv>
            {/* changeStatus - funkcja sprawdzająca czy został kliknięty jakikolwiek Label - efektem jest zmiana statusu boolean na przeciwny, co powoduje przerenderowanie komponentu
            w celu pobrania zaktualizowanych statusów department */}
            <LabelSection title="Wybierz dział odpowiedzialny za projekt" category="department" changeStatus={() => setStatus(!status)} />
            <AssignmentSection>
                <SubHeading>Przypisz osoby <br /> pracujące przy projekcie</SubHeading>
                {
                    usersFromSelectedDepartments.map(user => {
                        return(
                            <PersonToProject
                                key={user._id}
                                id={user._id} 
                                position={user.position} 
                                name={user.name}
                                surname={user.surname} 
                                department={user.department}
                                assignUserToProject={ () => handleAssignIdUserToProject(user._id, user.department)}
                                assignUsersFromEditProject={projectUsers}
                                isFromEdition={isEdited}
                            />
                        )
                    })
                }
            </AssignmentSection>
            <MarksSection>
                <SubHeading>Przekaż wytyczne<br /> dotyczące projektu</SubHeading>
                <TextArea placeholder="Treść wiadomości" form="project-form" name="content" onChange={(e) => handleChange(e)} value={projectData.content} />
            </MarksSection>
            { errorMessage && <ErrorMessage error={errorMessage} /> }
            <CreateBtn form="project-form">{ isEdited ? ('Edytuj') : ('Utwórz projekt') }</CreateBtn>

            <Footer />
       </>
    )
}

export default CreateProject;
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Input } from '../components/Input/Input';
import UserContext from '../context/UserContext';
import DefaultRootState from '../interfaces/DefaultRootState/DefaultRootState';
import TaskCard from '../molecules/TaskCard/TaskCard';

const TaskInput = styled(Input)`
    margin-bottom: 30px;
`;

const TaskSection  = () => {

    const tasks = useSelector((state :DefaultRootState) => state.tasks.tasks)
    const { user, getUser } = useContext(UserContext);
    const [ searchTask, setSearchTask ] = useState('');

    useEffect(() => {
        <TaskSection />
    }, [tasks]);

    //wydzielamy zadania dla zalogowanego aktualnie użytkownika - tylko takie chcemy wyświetlać
    const tasksForUser = tasks.filter(item => item.taskUsers.includes(user[0]._id));

    const handleChange = (e :React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        setSearchTask(target.value);
    }
    let filterTaskFromInput = [...tasksForUser];

    if(searchTask !== ''){
        const inputSearchValue = searchTask.toString().toLowerCase(); // wartosc wyszukiwana przez użytkownika
        filterTaskFromInput = tasksForUser.filter(item => 
            item.title.toLowerCase().includes(inputSearchValue) || item.categoryTask[0].toString().toLowerCase().includes(inputSearchValue)
        );
        
    };

    return(
        <>
            <TaskInput placeholder="Wpisz nazwę zadania" value={searchTask} onChange={(e) => handleChange(e) } />
            {

                filterTaskFromInput.map( item=> (
                    <TaskCard
                        key={item._id} 
                        division={item.categoryTask}
                        title={item.title}
                        time={item.time}
                        id={item._id}
                        taskTime={item.taskTime}
                        isFinish={item.isFinish}
                    />
                ))
            }
        </>
    )
}

export default TaskSection;
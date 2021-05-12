import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Input } from '../components/Input/Input';
import UserContext from '../context/UserContext';
import TaskCard from '../molecules/TaskCard/TaskCard';

const TaskInput = styled(Input)`
    margin-bottom: 30px;
`;


const TaskSection  = () => {

    const tasks = useSelector(state => state.tasks.tasks)
    const { user, getUser } = useContext(UserContext);

    useEffect(() => {
        <TaskSection />
    }, [tasks])

    //wydzielamy zadania dla zalogowanego aktualnie użytkownika - tylko takie chcemy wyświetlać
    const tasksForUser = tasks.filter(item => item.taskUsers.includes(user[0]._id));

    return(
        <>
            <TaskInput />
            {
                tasksForUser.map( item=> (
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
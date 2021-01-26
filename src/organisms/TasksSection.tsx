import styled from 'styled-components';
import { Input } from '../components/Input/Input';
import TaskCard from '../molecules/TaskCard/TaskCard';

const TaskInput = styled(Input)`
    margin-bottom: 30px;
`;

const TaskSection :React.FC = () => {
    return(
        <>
            <TaskInput />
            <TaskCard division="Marketing" />
            <TaskCard division="Konsultacje" />
            <TaskCard division="Marketing" />
        </>
    )
}

export default TaskSection;
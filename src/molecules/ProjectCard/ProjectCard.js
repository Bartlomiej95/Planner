import styled from 'styled-components';
import Label from '../../molecules/Label/Label';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTask } from '../../actions/tasks';

const Wrapper = styled.div`
    position: relative;
    width: 305px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    margin-bottom: 25px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;

`;

const ProjectCardParagraph = styled(Paragraph)`
    margin: 15px 0;
`;

const WrapperProjectCompletePercent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 70%;
`;

const Diagram = styled.div`
    position: relative;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 2px solid #0903B0;
    margin-right: 15px;
`;

const DiagramPercent= styled(Paragraph)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #0903B0;
    font-weight: 700;
`;

const WrapperLabels = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
`;

const LabelCard = styled.p`
    position: absolute;
    top: 8%;
    right: 8%;
    font-size: 12px;
    color: #0903B0;
    font-weight: 700;
`;

const ProjectCard = ({ titleProject, description, departments, projectId, projectTasks }) => {
    
    // const percentProjectCompletion = ((amountFinsishedTasksInProject * 100)/(projectTasks.length)).toFixed(2);
    
    const getWeightOfTask = (task) => {
        // przypisujemy wagę zadania na podstawie czasu jego trwania
        // funkcja przyjmuje obiekt jednego zadania i przypisuje mu wagę potrzebną do obliczenia procentowego ukończenia projektu
        if(task.time <= 30){
            return 0.5;
        } else if(task.time > 30 && task.time <= 60) {
            return 0.75;
        } else if(task.time > 60 && task.time <= 120) {
            return 1;
        } else if( task.time > 120 && task.time <= 240 ) {
            return 1.5;
        } else if( task.time > 240 && task.time <= 480 ) {
            return 2;
        } else if( task.time > 480 ){
            return 3;
        }
    }

    const countPercent = (tasks) => {
        //funkcja przyjmuje tablicę zadań, a ma zwracać obiekt wyników wag zadań zrobionych, oraz sume wszystkich wag 
        let getPoints = null; // jeśli zadanie jest skończone to dodaj jego wagę
        let allPoints = null; // suma wag wszystkich zadań

        for(let i = 0; i < tasks.length; i++){
            allPoints = allPoints + tasks[i].weight;
        }

        tasks.forEach(task =>{

            if(task.isFinish){
                getPoints = getPoints + task.weight;
            }
        });
        
        return {getPoints, allPoints}
    }
    
    const countPercentProjectCompletion = (tasks) => {
        //funkcja obliczająca procent ukończenia projektu na podstawie ukończonych zadań
        // przyjmuje tablicę zadań, a zwraca procent ukończenia projektu
        
        tasks.forEach(task=> {
            const weight = getWeightOfTask(task);
            task.weight = weight;
        });

        const result = countPercent(tasks);

        return (`${(result.getPoints * 100 / result.allPoints).toFixed(1)}%`);

    }

    return(
        <Wrapper>
            <SubSubHeading>{titleProject}</SubSubHeading>
            <ProjectCardParagraph>{description}</ProjectCardParagraph>
            <WrapperProjectCompletePercent>
                <Diagram>
                    <DiagramPercent>{countPercentProjectCompletion(projectTasks)}</DiagramPercent>
                </Diagram>
                <Paragraph>Stopień ukończenia projektu</Paragraph>
            </WrapperProjectCompletePercent>
            <WrapperLabels>
                {
                    departments.map(item => (
                        <Label division={item} type="card"/>
                    ))
                }
            </WrapperLabels>
            <LabelCard>Zespół</LabelCard>
        </Wrapper>
    )
}

export default ProjectCard;
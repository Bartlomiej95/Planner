import styled from 'styled-components';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import Label from '../molecules/Label/Label';
import { SubHeading } from '../components/Heading/Heading';

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

const MainSection = () => {
    return(
        <Wrapper>
            <WrapperNavbar>
                <NavSubHeading>Projekty</NavSubHeading>
                <NavSubHeading>Archiwum projektów</NavSubHeading>
                <NavSubHeading>Lista zadań</NavSubHeading>
            </WrapperNavbar>
            <WrapperProjectCard>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </WrapperProjectCard>
        </Wrapper>
    )
}

export default MainSection;
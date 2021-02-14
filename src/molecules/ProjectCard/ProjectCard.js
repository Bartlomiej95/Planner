import styled from 'styled-components';
import Label from '../../molecules/Label/Label';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

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



const ProjectCard = ({ titleProject, description }) => {
    return(
        <Wrapper>
            <SubSubHeading>{titleProject}</SubSubHeading>
            <ProjectCardParagraph>{description}</ProjectCardParagraph>
            <WrapperProjectCompletePercent>
                <Diagram>
                    <DiagramPercent>27%</DiagramPercent>
                </Diagram>
                <Paragraph>Stopień ukończenia projektu</Paragraph>
            </WrapperProjectCompletePercent>
            <WrapperLabels>
                <Label division="Marketing" />
                <Label division="Konsultacja" />
                <Label division="UX/UI" />
            </WrapperLabels>
            <LabelCard>Zespół</LabelCard>
        </Wrapper>
    )
}

export default ProjectCard;
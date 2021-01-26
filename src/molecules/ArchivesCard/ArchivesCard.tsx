import styled from 'styled-components';
import arrayBackIcon from '../../assets/arrayBack.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    position: relative;
    width: 315px;
    min-height: 100px;
    padding: 13px 42px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
`;

const ArrayBackIcon = styled.img`
    position: absolute;
    top: 10%;
    right: 5%;
`;

const ArchivesHeading = styled(SubHeading)`
    text-align: left;
    margin-bottom: 10px;
`;

const ArchivesCard: React.FC = () => {
    return(
        <Wrapper>
            <ArchivesHeading>Nazwa projektu</ArchivesHeading>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</Paragraph>
            <ArrayBackIcon src={arrayBackIcon} alt="ikonka powrotu do poprzedniej strony" />
        </Wrapper>
    )
} 

export default ArchivesCard;
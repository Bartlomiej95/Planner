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

const WrapperLinkInCard = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

const LinkInCard = styled(Paragraph)`
    color: #372FFF;
    font-weight: 600;
`;

interface Props {
    admin: boolean,
}

const ArchivesCard = ({ admin } : Props) => {

    return(
        <Wrapper>
            <ArchivesHeading>Nazwa projektu</ArchivesHeading>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</Paragraph>
            {
               !admin && <ArrayBackIcon src={arrayBackIcon} alt="ikonka powrotu do poprzedniej strony" />
            }
            {
                admin && (
                    <WrapperLinkInCard>
                        <LinkInCard>Edytuj</LinkInCard>
                        <LinkInCard>Przydziel zadania</LinkInCard>
                        <LinkInCard>Szczegóły</LinkInCard>
                    </WrapperLinkInCard>
                )
            }
        </Wrapper>
    )
} 

export default ArchivesCard;
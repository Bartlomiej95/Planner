import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import arrayBackIcon from '../../assets/arrayBack.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { useDispatch } from 'react-redux';
import { getDetailsProject } from '../../actions/projects';

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
    cursor: pointer;
`;

interface Props {
    admin: boolean,
    name: String,
    description: String,
    id: Number ,
    projectUsers: Array<Number>,
    customer: String,
    hours: Number, 
    projectValue: Number,
}

const ArchivesCard = ({ admin, name, description, id, projectUsers, customer, hours, projectValue } : Props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleDetailsProjectClick = () => {
        dispatch(getDetailsProject(name));
        history.push({
            pathname: `/homepage/project/${name}`,
            state: {
                id,
                name,
                customer,
                hours,
                projectValue,
            }
        })
    }

    return(
        <Wrapper>
            <ArchivesHeading>{name}</ArchivesHeading>
            <Paragraph> {description} </Paragraph>
            {
               !admin && <ArrayBackIcon src={arrayBackIcon} alt="ikonka powrotu do poprzedniej strony" />
            }
            {
                admin && (
                    <WrapperLinkInCard>
                        <LinkInCard>Edytuj</LinkInCard>
                        <LinkInCard onClick={() => history.push({
                            pathname: '/homepage/project/tasks',
                            state: {
                                id,
                                projectUsers,
                                name,
                            }
                        })}>Przydziel zadania</LinkInCard>
                        <LinkInCard onClick={() => handleDetailsProjectClick()}>Szczegóły</LinkInCard>
                    </WrapperLinkInCard>
                )
            }
        </Wrapper>
    )
} 

export default ArchivesCard;
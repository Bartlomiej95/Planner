import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import arrayBackIcon from '../../assets/arrayBack.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { useDispatch } from 'react-redux';
import { getDetailsProject } from '../../store/Projects/actions';
import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../../context/theme';

const Wrapper = styled.div<{ readonly typeTheme: string }>`
    position: relative;
    width: 315px;
    min-height: 100px;
    padding: 13px 42px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    background-color:  ${props => props.typeTheme === ThemeType.Light ? '#FFF' : '#F8FAFE'};
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
    name: string,
    description: string,
    id: string ,
    projectUsers: Array<number>,
    customer: string,
    hours: number | string, 
    projectValue: number | string,
    deadline: Date,
    content: string,
    departments: Array<String>,
    scopeOfWork: string, 
    assumptions: string,
    customerInfo: string,
}

const ArchivesCard = ({ admin, name, description, id, projectUsers, customer, hours, projectValue, departments, deadline, content, assumptions, scopeOfWork, customerInfo } : Props) => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const { typeTheme, ThemeType } = useContext(ThemeContext);

    const handleDetailsProjectClick = () => {
        dispatch(getDetailsProject(name));
        history.push({
            pathname: `/homepage/project/${name}`,
            state: {
                id,
                name,
            }
        })
    }

    return(
        <Wrapper typeTheme={typeTheme}>
            <ArchivesHeading>{name}</ArchivesHeading>
            <Paragraph> {description} </Paragraph>
            {
               !admin && <ArrayBackIcon src={arrayBackIcon} alt="ikonka powrotu do poprzedniej strony" />
            }
            {
                admin && (
                    <WrapperLinkInCard>
                        <LinkInCard onClick={() => history.push({
                            pathname: `/homepage/project/edit/${name}`,
                            state: {
                                isEdited: true,
                                name,
                                customer,
                                hours,
                                description,
                                projectValue,
                                projectUsers,
                                departments,
                                deadline,
                                id,
                                content,
                                assumptions,
                                scopeOfWork,
                                customerInfo
                            }
                        })}>Edytuj</LinkInCard>
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
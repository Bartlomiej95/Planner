import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { logoutUser } from '../store/Users/actions';
import { Logo, SubHeading } from '../components/Heading/Heading';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    position: sticky;
    flex-direction: column;
    z-index: 100;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #EFF1F5;
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height:10vh;
    margin: 0 auto;
    
`;

const MiddleDiv = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ExitDiv = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ExitSubHeading = styled.div`
    color: #372FFF;
`;

const LogoutSubHeading = styled(SubHeading)`
    cursor: pointer;

    :hover{
        color: darkgray;
    }
`;

interface Props {
    isActive: boolean,
    exitHiddenMenu: () => void,
}

const HiddenMenu = ({ isActive, exitHiddenMenu } :Props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        history.push('/homepage/logout');
        dispatch(logoutUser());
    }
    
    return(
        isActive ?  (
            <Wrapper>
                <LogoDiv>
                    <Logo>Planner</Logo>
                </LogoDiv>
                <MiddleDiv>
                    <LogoutSubHeading onClick={ () => handleLogoutClick()} >Wyloguj się</LogoutSubHeading>
                </MiddleDiv>
                <ExitDiv onClick={() => exitHiddenMenu()}>
                    <ExitSubHeading>Zamknij</ExitSubHeading>
                </ExitDiv>  
            </Wrapper>
        ) : (
            <>
            </>
        )
    )
}

export default HiddenMenu; 
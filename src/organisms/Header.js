import { useContext, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import menuIcon from '../assets/menuIcon.svg';
import mailIcon from '../assets/mailIcon.svg';
import UserContext from '../context/UserContext';
import HiddenMenu from './HiddenMenu';
import { Logo } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    flex: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 33px;
`;

const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    margin-left: 30px;
    cursor: pointer;

    ${({ bcgIcon }) => bcgIcon && css`
    
        background-image: url(${bcgIcon});
        background-position: center;
        background-repeat: no-repeat;
    `}
`;

const BackButton = styled(LoginButton)`
    width: 60px;
    height: 30px;
    font-size: 12px;
    font-weight: 700;
    border: none;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    margin-left: 30px;
`;

const Header = (props) => {

    const { user } = useContext(UserContext);
    const [showHiddenMenu, setShowHiddenMenu] = useState(false);
    const history = useHistory();
    const hiddenBackBtn = props.match.path === "/homepage" || props.match.path === "/homepage/user"
    console.log(hiddenBackBtn);
    
    return(
        <>
            {
                !showHiddenMenu && (
                    <Wrapper>
                        <Logo>Planner</Logo>
                        <IconsDiv>
                            {
                                user && (
                                    <>
                                        <Icon bcgIcon={mailIcon} />
                                    </>
                                )
                            }
                            <Icon bcgIcon={menuIcon} onClick={() => setShowHiddenMenu(prev => !prev)} />

                            {
                                !hiddenBackBtn && ( <BackButton onClick={ () => history.goBack()}>Wróc</BackButton> )
                            }
                            

                        </IconsDiv>
                    </Wrapper>
                )
            }
            <HiddenMenu isActive={showHiddenMenu} exitHiddenMenu={() => setShowHiddenMenu(false)} />
        </>
    )
}

export default withRouter(Header);
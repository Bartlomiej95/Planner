import styled from 'styled-components';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MessageCard from '../molecules/MessageCard/MessageCard';
import Messages from '../interfaces/Messages/Messages';
import { LoginButton } from '../components/Button/Button';
import { Heading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { showAllMessages } from '../store/Messages/actions';
import LoadingWrapper from '../molecules/LoadingWrapper/LoadingWrapper';
import { Users } from '../interfaces/Users/Users';


const MessageHeading = styled(Heading)`
    margin-top: 100px;
    margin-bottom: 40px;
`;

const MainWrapper = styled.div`
    min-height: calc(100vh - 125px);
    padding-top: 50px;
    padding-bottom: 20px;
`;

const MessageBtn = styled(LoginButton)`
    margin: 50px auto;
`;

const WrapperBoxMessagesCards = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WrapperNav = styled.div`
    
`;

interface DefaultRootState {
    messages: {
        messages: Array<Messages>;
    };
    auth: Users;
}

const MessagesPage = () => {

    const history = useHistory();
    const messages = useSelector((state: DefaultRootState) => state.messages.messages);
    const auth = useSelector((state: DefaultRootState) => state.auth);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(showAllMessages(auth.email));
    }, []);

    return(
        <>
            <Header/>
            <MessageHeading>Wiadomości</MessageHeading>
            <Input placeholder="Znajdź wiadomość" />
            <MessageBtn onClick={() => history.push({ pathname: '/homepage/message/create'}) }>Utwórz wiadomość</MessageBtn>
            <WrapperBoxMessagesCards>
                {
                    messages.map(item => (
                        <MessageCard 
                            title={item.title} 
                            content={item.content}
                            sender={item.sender}
                        />
                    ))
                }
            </WrapperBoxMessagesCards>
            <WrapperNav>

            </WrapperNav>
            <Footer/>
        </>
    )
}


export default MessagesPage;
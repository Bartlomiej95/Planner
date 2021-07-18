import styled from 'styled-components';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MessageCard from '../molecules/MessageCard/MessageCard';
import Messages from '../interfaces/Messages/Messages';
import { IdLoginButton, LoginButton } from '../components/Button/Button';
import { Heading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { showAllMessages } from '../store/Messages/actions';
import { Users } from '../interfaces/Users/Users';


const MessageHeading = styled(Heading)`
    margin-top: 100px;
    margin-bottom: 40px;
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

const BtnLoadMore = styled(IdLoginButton)`
    display: block;
    margin: 30px auto;
    width: 150px;
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
    const [ counterClickLoadMore, setCounterClickLoadMore ] = useState(0);
    const [ searchMessage, setSearchMessage ] = useState('');
    const dispatch = useDispatch();
    
    
    useEffect(()=> {
        dispatch(showAllMessages(auth.email));
    }, []);

    let numberOfMsgsOnTheOneLoad = 5;
    let numberOfLoadedMsgsAtTheBeggining = 3;
    let numberOfMsgs = numberOfLoadedMsgsAtTheBeggining + numberOfMsgsOnTheOneLoad * counterClickLoadMore;
    const msgsDivide = messages.slice(0,numberOfMsgs);

    const handleChange = (e :React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        setSearchMessage(target.value);
    }

    let searchedMessage = [...msgsDivide];

    if(searchMessage !== ''){
        const inputSearch = searchMessage.toString().toLowerCase();
        searchedMessage = msgsDivide.filter( msg => 
            msg.title.toLowerCase().includes(inputSearch) || msg.sender.toLowerCase().includes(inputSearch) ||
            msg.content.toLowerCase().includes(inputSearch)
        );
    }

    return(
        <>
            <Header/>
            <MessageHeading>Wiadomości</MessageHeading>
            <Input placeholder="Znajdź wiadomość" value={searchMessage} onChange={(e) => handleChange(e)} />
            <MessageBtn onClick={() => history.push({ pathname: '/homepage/message/create'}) }>Utwórz wiadomość</MessageBtn>
            <WrapperBoxMessagesCards>
                {
                    searchedMessage.map(item => (
                        <MessageCard 
                            title={item.title} 
                            content={item.content}
                            sender={item.sender}
                            recipient={item.recipient}
                        />
                    ))
                }
            </WrapperBoxMessagesCards>
            <BtnLoadMore onClick={() => setCounterClickLoadMore(prev => prev + 1)} > Załaduj więcej </BtnLoadMore>
            <Footer/>
        </>
    )
}


export default MessagesPage;
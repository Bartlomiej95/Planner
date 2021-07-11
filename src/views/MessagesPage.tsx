import styled from 'styled-components';
import { LoginButton } from '../components/Button/Button';
import { Heading } from '../components/Heading/Heading';
import { Input } from '../components/Input/Input';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MessageCard from '../molecules/MessageCard/MessageCard';


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

const WrapperNav = styled.div`
    
`;

const MessagesPage = () => {

    return(
        <>
            <Header/>
            <MessageHeading>Wiadomości</MessageHeading>
            <Input placeholder="Znajdź wiadomość" />
            <MessageBtn>Utwórz wiadomość</MessageBtn>
            <WrapperBoxMessagesCards>
                <MessageCard title="Tytuł" content="Treś wiadomości lorem ipsum"/>
                <MessageCard title="Tytuł" content="Treś wiadomości lorem ipsum"/>
                <MessageCard title="Tytuł" content="Treś wiadomości lorem ipsum"/>
                <MessageCard title="Tytuł" content="Treś wiadomości lorem ipsum"/>
            </WrapperBoxMessagesCards>
            <WrapperNav>

            </WrapperNav>
            <Footer/>
        </>
    )
}


export default MessagesPage;
import { useContext } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LoginButton } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Input } from "../components/Input/Input";
import UserContext from '../context/UserContext';
import TextArea from "../components/TextArea/TextArea";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { createNewMessage } from "../store/Messages/actions";
import { useHistory } from "react-router";

const MessageHeading = styled(Heading)`
    margin-bottom: 30px;
`;

const MainWrapper = styled.div`
    min-height: calc(100vh - 125px);
    padding-top: 50px;
    padding-bottom: 20px;
`;

const MessageForm = styled.form``;

const MessageTextArea = styled(TextArea)`
    width: 290px;
`;


const initialMessageData = {
    title: '',
    recipient: '',
    content: '',
    sender: '',
}

const CreateMessagePage = () => {

    const { user } = useContext(UserContext);
    const dispatch = useDispatch();
    const [ messageData, setMessageData ] = useState(initialMessageData);
    const history = useHistory();

    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        const name = target.name;

        setMessageData({
            ...messageData,
            [name]: target.value,
        })

    }

    const handleSubmit = (e :React.SyntheticEvent) => {
        try {
            e.preventDefault();
            console.log(messageData, user[0].email);
            dispatch(createNewMessage(messageData.title, messageData.recipient, user[0].email ,messageData.content, history));

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <Header/>
            <MainWrapper>
                <MessageHeading>Utwórz wiadomość</MessageHeading>
                <MessageForm onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Tytuł wiadomości" name="title" value={messageData.title} onChange={(e) => handleChange(e)}/>
                    <Input placeholder="Odbiorca" name="recipient" value={messageData.recipient} onChange={(e) => handleChange(e)} />
                    <MessageTextArea placeholder="Treść wiadomości" name="content" value={messageData.content} onChange={(e) => handleChange(e)} />
                    <LoginButton>Wyślij</LoginButton>
                </MessageForm>
            </MainWrapper>
            <Footer/>
        </>
    )
}

export default CreateMessagePage;
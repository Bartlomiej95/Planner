import React, { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Users } from "../interfaces/Users/Users";
import { Paragraph } from "../components/Paragraph/Paragraph";

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

const ListOfRecipientsWrapper = styled.div`
    
    width: 290px;
    height: 100px;
    border: 1px #0903B0 solid;
    border-top: none;
    margin: 0 auto;
    transform: translateY(-10px);
    overflow: auto;
`;

const UsersMailBox = styled.div`
    padding: 7px 0px 7px 20px;
    cursor: pointer;

    :hover{
        background-color: #0903B0;
        color: white;
    }

`;


const initialMessageData = {
    title: '',
    recipient: '',
    content: '',
    sender: '',
}

interface DefaultState {
    users: Array<Users>
}

const CreateMessagePage = () => {

    const { user } = useContext(UserContext);
    const dispatch = useDispatch();
    const [ messageData, setMessageData ] = useState(initialMessageData);
    const [ activeRecipientInput, setActiveRecipientInput] = useState(false); //flaga wysuwanych mailowych odpowiedzi pod input recipients
    const users = useSelector((state: DefaultState) => state.users)
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
            dispatch(createNewMessage(messageData.title, messageData.recipient, user[0].email ,messageData.content, history));

        } catch (error) {
            console.log(error);
        }
    }

    const handleUsersMailFromList = (e: any, email: string) => {
        // po kliknięciu w przykładowy mail, widoczny w rozwinięciu po focusie na inputa
        e.preventDefault();
        setActiveRecipientInput(false);

        if(messageData.recipient === ""){

            setMessageData({
                ...messageData, 
                recipient: email,
            });
        } else {
            setMessageData({
                ...messageData, 
                recipient: messageData.recipient + '; ' + email,
            });
        }

    }

    const handleFocusTitleContentInputs = (e: React.SyntheticEvent) => {
        //gdy przełączamy focus na inny input niż wpisywanie odbiorcy, to wysuwane menu z podpowiedziami maili znika 
        setActiveRecipientInput(false);
    }


    return(
        <>
            <Header/>
            <MainWrapper>
                <MessageHeading>Utwórz wiadomość</MessageHeading>
                <MessageForm onSubmit={(e) => handleSubmit(e)}>
                    <Input 
                        placeholder="Tytuł wiadomości" 
                        name="title" 
                        value={messageData.title} 
                        onChange={(e) => handleChange(e)}
                        onFocus={(e) => handleFocusTitleContentInputs(e) }
                    />
                    <Input 
                        placeholder="Odbiorca" 
                        name="recipient" 
                        value={messageData.recipient} 
                        onChange={(e) => handleChange(e)} 
                        onFocus={() => setActiveRecipientInput(true)} 
                        autoComplete="off" 
                    />
                    {
                        activeRecipientInput && (
                            <ListOfRecipientsWrapper>
                                { 
                                    users.map(item => (
                                        <UsersMailBox onClick={ (e) => handleUsersMailFromList(e, item.email)}>
                                            <Paragraph>{item.email}</Paragraph>
                                        </UsersMailBox>
                                    ))
                                }
                            </ListOfRecipientsWrapper>
                        )
                    }
                    <MessageTextArea 
                        placeholder="Treść wiadomości" 
                        name="content" 
                        value={messageData.content} 
                        onChange={(e) => handleChange(e)} 
                        onFocus={(e) => handleFocusTitleContentInputs(e)}
                    />
                    <LoginButton>Wyślij</LoginButton>
                </MessageForm>
            </MainWrapper>
            <Footer/>
        </>
    )
}

export default CreateMessagePage;
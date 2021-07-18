import styled from "styled-components";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { SubHeading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { LoginButton } from "../components/Button/Button";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNewMessage } from "../store/Messages/actions";
import { useHistory } from "react-router";

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    min-height: calc( 100vh - 125px);
    width: 300px;
    margin: 0 auto;

    @media(min-width: 600px){
        width: 500px;
    }

    @media(min-width: 1300px){
        width: 800px;
    }
`;

const TitleHeading = styled(SubHeading)`
    text-align: left;
`;

const SenderParagraph = styled(Paragraph)`
    color: #707070;
    padding-top: 5px;
`;

const ContentMessageParagraph = styled(Paragraph)`
    padding: 30px 0;
`;

const ReplyWrapper = styled.div`
    background-color: white;
    padding-top: 40px;
`;

const ReplyForm = styled.form`
    display: block;
    border: 2px solid #0903B0;
`;

const MessageReplyTextArea = styled.textarea`
    display: block;
    width: 295px;
    height: 200px;
    margin: 0 auto;
    padding: 10px 10px 30px 10px;
    border: none;
    outline: none;

    @media(min-width: 600px){
        width: 495px;
    }

    @media(min-width: 1300px){
        width: 795px;
    }
`;

const RecipientInput = styled.input`
    width: 100%;
    padding: 5px 3px;
    border: none;
    border-bottom: 1px solid gray;
`;

const ButtonReply = styled(LoginButton)`
    margin-left: 1%;
    width: 60px;
    height: 30px;
    font-size: 12px;
`;

const initialData = {
    sender: '',
    title: '',
    content: '',
    recipient: '',
}

const DetailsMessage = (props: any) => {
    // dane pochodzą z messageCard, a więc wysyłając wtedy jest tutaj odbiorcą 
    const { title, content, sender, recipient } = props.location.state;
    const [ openReplyForm, setOpenReplyForm ] = useState(false);
    const [ messageData, setMessageData ] = useState(initialData);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setMessageData({
            ...messageData,
            recipient: sender, //ustawiamy na początek wysyłającego i tytuł - czyli zalogowany użytkownik, który odpowiada na wiadomość o danym tytule
            title,
        })
    },[]);

    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        const name = target.name;

        setMessageData({
            ...messageData,
            [name]: target.value,
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        try {
            e.preventDefault();
            dispatch(createNewMessage(title, messageData.recipient, sender, messageData.content, history));
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            <Header />
            <MainWrapper>
                <TitleHeading>{title}</TitleHeading>
                <SenderParagraph>{`DW: ${sender}`}</SenderParagraph>
                <ContentMessageParagraph>{content}</ContentMessageParagraph>
                <LoginButton onClick={() => setOpenReplyForm(!openReplyForm)}>Odpowiedz</LoginButton>
                {
                    openReplyForm && (
                    <ReplyWrapper>
                        <ReplyForm name="replyForm" onSubmit={(e) => handleSubmit(e)}>
                            <RecipientInput name="recipient" value={messageData.recipient} onChange={(e) => handleChange(e)} />
                            <MessageReplyTextArea name="content" value={messageData.content} onChange={(e) => handleChange(e)} />
                            <ButtonReply>Wyślij</ButtonReply>
                        </ReplyForm>
                    </ReplyWrapper>
                    )
                }
    
            </MainWrapper>
            <Footer />
        </>
    )

}

export default DetailsMessage;
import styled from "styled-components";
import { Heading } from "../components/Heading/Heading";
import { Input } from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const MessageHeading = styled(Heading)`
    margin-top: 100px;
    margin-bottom: 30px;
`;

const MessageForm = styled.form``;

const Textarea = styled.textarea`
    width: 300px;
`;

const CreateMessagePage = () => {
    return(
        <>
            <Header/>
            <MessageHeading>Utwórz wiadomość</MessageHeading>
            <MessageForm>
                <Input placeholder="Tytuł wiadomości" />
                <Input placeholder="Odbiorca" />
                <TextArea placeholder="Treść wiadomości" />
            </MessageForm>
            <Footer/>
        </>
    )
}

export default CreateMessagePage;
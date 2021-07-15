import MessagesConst from "./constants";
import Messages from '../../interfaces/Messages/Messages';

interface ActionShowAllMessages {
    type: MessagesConst.SHOW_ALL_MESSAGES,
    payload: {
        data: Array<Messages>
    }
}

interface ActionCreateNewMessage {
    type: MessagesConst.CREATE_NEW_MESSAGE,
    payload: {
        title: string,
        recipient: string, 
        sender: string, 
        content: string,
    }
}

type ActionsMessages = ActionCreateNewMessage | ActionShowAllMessages;

export default ActionsMessages;
import { Dispatch } from "react";
import * as api from '../../api/index';
import ActionsMessages from "./actionCreator";
import MessagesConst from "./constants";

interface History {
    push: (path: string) => void,
}

export const showAllMessages = (recipient: string) => async (dispatch: Dispatch<ActionsMessages>) => {
    try {
        const { data } = await api.showAllMessages(recipient);

        dispatch({ 
            type: MessagesConst.SHOW_ALL_MESSAGES, 
            payload: data 
        });
    } catch (error) {
        console.log(error);
    }
}


export const createNewMessage = (title: string, recipient: string, sender: string, content: string, history: History) => async (dispatch: Dispatch<ActionsMessages>) => {
    try {
        await api.createNewMessage(title, recipient, sender, content);
        
        history.push('/homepage/message');
        dispatch({
            type: MessagesConst.CREATE_NEW_MESSAGE,
            payload: { title, recipient, sender, content },
        })
        
    } catch (error) {
        console.log(error);
    }
}
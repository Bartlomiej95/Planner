import Messages from '../../interfaces/Messages/Messages';
import MessagesConst from './constants';
import ActionsMessages from './actionCreator';

interface MessagesState {
    messages: Array<Messages>,
}

const initialState: MessagesState = {
    messages: [],
}

export default (state: MessagesState = initialState, action: ActionsMessages) => {
    switch(action.type){
        case MessagesConst.SHOW_ALL_MESSAGES:
            return action.payload;
        case MessagesConst.CREATE_NEW_MESSAGE: 
            return {
                messages: [...state.messages, action.payload],
            };
        default:
            return state;
        }
}
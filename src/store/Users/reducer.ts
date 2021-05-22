import ActionsUsers from "./actionCreator";
import UsersConst from "./constants";
import { Users } from "../../interfaces/Users/Users";


export default (users: Array<Users> | [] = [], action: ActionsUsers) => {
    switch(action.type){
        case UsersConst.FETCH_ALL_USERS:
            return action.payload;
        case UsersConst.CREATE_USER:
            return [...users, action.payload];
        case UsersConst.LOGOUT_USER:
            return users;
        default:
            return users;
    }
}
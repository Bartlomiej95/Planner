import ActionsUsers from "./actionCreator";
import UsersConst from "./constants";

const authReducer = ( auth = [], action: ActionsUsers) => {
    switch (action.type) {
        case UsersConst.LOGIN_USER: 
            return action.payload;
        case UsersConst.LOGOUT_USER:
            return action.payload;   
        default:
            return auth;
        
   }
}

export default authReducer;
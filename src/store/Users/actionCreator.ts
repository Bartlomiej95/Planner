import  { Users, RegisterUserData } from "../../interfaces/Users/Users";
import UsersConst from "./constants";

interface LoginData {
    email: string | '',
    user_id: number | null,
    password: string | ''
}

interface ActionFetchAllUsers {
    type: UsersConst,
    payload: {
        data: Array<Users>,
    }
}

interface ActionCreateUser {
    type: UsersConst,
    payload: {
        data: RegisterUserData,
    }
}

interface ActionLogoutUser {
    type: UsersConst,
    payload: {
        data: Users,
    }
}

interface ActionLoginUser {
    type: UsersConst,
    payload: {
        data: LoginData,
    }
}

type ActionsUsers = ActionFetchAllUsers | ActionCreateUser
| ActionLogoutUser | ActionLoginUser;

export default ActionsUsers;

import Axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { Users } from '../interfaces/Users/Users';
import domain from '../util/domain';


const initialState: InitialState = {
    user: {},
    getUser: () => new Promise(() => console.log('')),
}

interface InitialState  {
    user: any,
    getUser: () => Promise<void>
}

const UserContext = createContext(initialState);

function UserContextProvider(props: any) {
    const [user, setUser] = useState(null);

    async function getUser(){
        const userRes = await Axios.get(`${domain}/homepage/user`);
        setUser(userRes.data.user); 
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, getUser }} >
            {props.children}
        </UserContext.Provider>
    )

    
}

export default UserContext;
export { UserContextProvider };


import Axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import domain from '../util/domain';

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    async function getUser(){
        const userRes = await Axios.get(`${domain}/homepage/user`);
        setUser(userRes.data.user);
        // console.log(userRes.data.user);
        // console.log(user);
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


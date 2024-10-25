import React, {useState} from 'react';
import UserContext from './UserContext';
import User from './User';

function Hooks() {
    const [name, setName] = useState("Ahmed");
    const UserContextValues = {name, setName};
    return (
        <UserContext.Provider value={UserContextValues}>
            <User />
        </UserContext.Provider>
    )
}

export default Hooks
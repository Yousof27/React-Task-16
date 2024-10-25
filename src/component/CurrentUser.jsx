import React, { useContext } from 'react';
import UserContext from './UserContext';

function CurrentUser() {
    const { name } = useContext(UserContext);
    return (
        <h2>{name}</h2>
    )
}

export default CurrentUser
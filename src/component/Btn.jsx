import React, { useContext } from 'react';
import UserContext from "./UserContext.js";

function Btn() {
    const { name, setName } = useContext(UserContext);
    let newName;
    name === "Ahmed" ? newName = "Yousof" : newName = "Ahmed";
    return (
        <button onClick={() => setName(newName)} style={{ cursor: "pointer" }}>{`Change To ${newName}`}</button>
    )
}

export default Btn
import React from 'react';
import Btn from './Btn';
import Cart from './Cart';
import CurrentUser from './CurrentUser';

function User() {
    return (
        <div>
            <Cart>
                <CurrentUser />
            </Cart>
            <Btn />
        </div>
    )
}

export default User
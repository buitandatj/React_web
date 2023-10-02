import React from 'react';
import { Outlet } from 'react-router-dom';

const userForm = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default userForm;
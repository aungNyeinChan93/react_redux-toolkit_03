import React from 'react';
import { useAddUserMutation } from '../../services/userData';

const LoginPage = () => {
    const [addUser, { data, error, isLoading }] = useAddUserMutation();
    console.log(error);

    const LoginHandler = async (e) => {
        const newUserData = {
            username: 'test',
            password: '123123123'
        };
        await addUser(newUserData);
    }


    return (
        <React.Fragment>
            <h1>LoginPage</h1>
            <button onClick={LoginHandler}>Add User</button>
        </React.Fragment>
    );
};

export default LoginPage;
import React, { useContext } from 'react';
import { useGetUsersQuery } from '../../services/userData';
import { ThemeContext } from '../../contexts/ThemeProvider';
import UserCard from '../../components/user/UserCard';

const UserPage = () => {
    const { theme } = useContext(ThemeContext)
    const { data, isError, isLoading } = useGetUsersQuery();

    if (isError) {
        return <div>Error . . .</div>
    }
    if (isLoading) {
        return <div className='text-3xl text-center text-red-500'>Loading . . .</div>
    }
    return (
        <React.Fragment>
            <h1 className='text-center p-4 text-2xl bg-gradient-to-r from-red-400 to-pink-400 text-white'>User Page</h1>
            <section className={theme.color == 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}>
                <div className='grid grid-cols-3 gap-6 mx-10 pt-10'>
                    {data?.users.map(user => {
                        return <UserCard key={user.id} {...user} />
                    })}
                </div>
            </section>
        </React.Fragment>
    );
};

export default UserPage;
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeProvider';
import DetailUserCard from '../../components/user/DetailUserCard';
import { useGetUserQuery } from '../../services/userData';
import { Link } from 'react-router';

const DetailUser = () => {
    const { theme } = useContext(ThemeContext)
    const { id } = useParams();
    const { data, error, isLoading } = useGetUserQuery(id);
    console.log(data);


    return (
        <React.Fragment>
            <section className={theme.color === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}>
                <div className='grid grid-cols-3 gap-1.5 w-full h-screen pt-[150px] '>
                    <div></div>
                    <div>
                        <DetailUserCard {...data} />
                        <Link to={'/users'} className='px-6 py-2 rounded bg-amber-300 mt-5 inline-block'  >Back</Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default DetailUser;
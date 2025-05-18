import React, { useContext } from 'react';
import Counter from '../components/Counter';
import { ThemeContext } from '../contexts/ThemeProvider';

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <section className={theme.color != 'dark' ? 'bg-slate-800 w-full h-screen text-white' : 'text-black bg-slate-200 w-full h-screen'}>
                <h1 className='font-bold p-2 text-2xl text-center bg-gradient-to-r from-cyan-400 to-amber-600 text-transparent bg-clip-text'>HomePage</h1>
                <Counter />
            </section>
        </React.Fragment>
    );
};

export default HomePage;
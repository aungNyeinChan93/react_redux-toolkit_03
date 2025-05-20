import React from 'react';
import { useGetQuotesQuery } from '../../services/quoteData';
import Quotes from '../../components/quote/Quotes';

const QuotePage = () => {
    const { data, error, isLoading } = useGetQuotesQuery();
    console.log(data);

    return (
        <React.Fragment>
            <section className={`w-full min-h-screen py-10`}>
                <div className='grid grid-cols-3 gap-1'>
                    <div></div>
                    <Quotes quotes={data?.quotes} />
                </div>
            </section>
        </React.Fragment>
    );
};

export default QuotePage;
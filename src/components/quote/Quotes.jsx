import React from 'react';

const Quotes = ({ quotes }) => {
    return (
        <React.Fragment>

            <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
                {
                    quotes?.map(quote => {
                        return (
                            <li key={quote.id} className="relative -ms-1.5 flex items-start gap-4">
                                <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                                <div className="-mt-2">
                                    <time className="text-xs/none font-medium text-gray-700">{quote.id}</time>

                                    <h3 className="text-lg font-bold text-gray-900">{quote.author}</h3>

                                    <p className="mt-0.5 text-sm text-gray-700">
                                        {quote.quote}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </React.Fragment>
    );
};

export default Quotes;
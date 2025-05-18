import React from 'react';

const CatCard = ({ id, url }) => {
    return (
        <React.Fragment>
            <a href="#" className="block">
                <img
                    alt=""
                    src={url}
                    className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
                />
            </a>
        </React.Fragment>
    );
};

export default CatCard;
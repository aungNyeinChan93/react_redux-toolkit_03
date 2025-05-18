import React from 'react';

const DetailUserCard = ({ username, id, gender, email, bloodGroup, university, address }) => {

    return (
        <React.Fragment>
            <div className="flow-root">
                <dl
                    className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm dark:divide-gray-700 dark:border-gray-800"
                >
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">ID</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-100">{id}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Name</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{username}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Gender</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{gender}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Email</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{email}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Blood Type</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{bloodGroup}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">University</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{university}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Address</dt>

                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                            <p>{`${address?.address} , ${address?.city} , ${address?.country}`}</p>
                        </dd>
                    </div>
                </dl>
            </div>
        </React.Fragment>
    );
};

export default DetailUserCard;
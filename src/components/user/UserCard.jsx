import React from 'react';
import { Link } from 'react-router';

const UserCard = ({ image, id, email, firstName, lastName, university, phone }) => {
    return (
        <React.Fragment>
            <article className="rounded-xl border-2 border-gray-100 bg-white">
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                    <a href="#" className="block shrink-0">
                        <img
                            alt=""
                            src={image}
                            className="size-14 rounded-lg object-cover"
                        />
                    </a>

                    <div>
                        <h3 className="font-medium sm:text-lg">
                            <a href="#" className="hover:underline"> Question about Livewire Rendering-3 and Alpine JS </a>
                        </h3>

                        <p className="line-clamp-2 text-sm text-gray-700">
                            {university}
                        </p>

                        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                    />
                                </svg>

                                <p className="text-xs">{phone}</p>
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                {firstName}
                                <Link to={`/users/${id}`} className="font-medium underline hover:text-gray-700"> {lastName} </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <strong
                        className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>

                        <span className="text-[10px] font-medium sm:text-xs">{email}</span>
                    </strong>
                </div>
            </article>
        </React.Fragment>
    );
};

export default UserCard;
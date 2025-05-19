import React from 'react';
import { useParams } from 'react-router';
import { useGetPostQuery } from '../../services/postData';
import PostCard from '../../components/post/PostCard';
import { Link } from 'react-router';

const DetailPost = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetPostQuery(id);
    console.log(data);

    return (
        <React.Fragment>
            <section className='grid grid-cols-3 gap-4 pt-[200px]'>
                <div></div>
                <div>
                    <PostCard {...data} />
                    <Link className='text-md text-gray-500 pt-2 inline-block ' to={`/posts`}>Back</Link>
                </div>

            </section>
        </React.Fragment>
    );
};

export default DetailPost;
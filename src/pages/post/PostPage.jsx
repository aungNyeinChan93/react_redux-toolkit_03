import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { useCreatePostMutation, useGetPostsQuery } from '../../services/postData';
import PostCard from '../../components/post/PostCard';

const PostPage = () => {
    const { theme } = useContext(ThemeContext);
    const { data, isError, isLoading } = useGetPostsQuery();
    const [createPost, { data: post, error }] = useCreatePostMutation();
    console.log(post);
    console.log(error);

    const addPostAction = async () => {
        const newPostData = {
            userId: 1,
            body: 'test body',
            reactions: 100,
            tags: ['html', 'css'],
            title: 'test title',
            views: 202,
        };
        await createPost(newPostData)
    }

    if (isLoading) {
        return <h2 className='text-center text-2xl text-red-600 pt-[200px]'>Loading . . . </h2>
    }
    return (
        <React.Fragment>
            <h1 className='p-3 text-3xl font-bold text-white bg-gradient-to-l from-pink-400 to-red-400 text-center'>Post Page</h1>
            <section className={`w-full min-h-screen ${theme.color == 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
                <div className=' flex justify-end mx-10 '>
                    <button onClick={addPostAction} className='px-4 py-2 rounded-2xl bg-amber-300 mt-2'> Add Post </button>
                </div>
                <div className='grid grid-cols-4 gap-4 mx-10 min-h-screen py-2 '>
                    {data?.posts.map(post => {
                        return <PostCard key={post.id} {...post} />
                    })}
                </div>
            </section>
        </React.Fragment>
    );
};

export default PostPage;
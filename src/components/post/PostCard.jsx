import React from 'react';
import { Link } from 'react-router';

const PostCard = ({ id, body, reactions, tags, title, views }) => {
    return (
        <React.Fragment>
            <article className="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4">
                <span className="block text-sm text-gray-600"> 👁️ {views}  👍 {reactions?.likes}  👎 {reactions?.dislikes}</span>

                <Link to={`/posts/${id}`}>
                    <h2 className='py-2 text-lg font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>{title}</h2>
                    <h3 className="mt-0.5 text-md font-medium text-gray-900">
                        {body?.substring(0, 100) + " . . ."}
                    </h3>
                </Link>

                <div className="mt-4 flex flex-wrap gap-1">
                    {tags?.map((tag, index) => {
                        return <span key={index}
                            className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                        >
                            {tag}
                        </span>
                    })}
                </div>
            </article>
        </React.Fragment>
    );
};

export default PostCard;
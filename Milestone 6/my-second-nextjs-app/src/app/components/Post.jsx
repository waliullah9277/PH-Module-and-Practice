import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border-gray-500 border p-2 rounded-2xl'>
            <h1>Title: {post.title}</h1>
            <h1>Body: {post.body}</h1>
        </div>
    );
};

export default Post;
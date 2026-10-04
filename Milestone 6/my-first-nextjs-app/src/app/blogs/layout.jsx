import React from 'react';

const PostLayout = ({children}) => {
    return (
        <div>
            <h2>Fixed Portion</h2>

            <div>
                {children}
            </div>
        </div>
    );
};

export default PostLayout;
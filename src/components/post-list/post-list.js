import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {    
    const elements = posts.map((post) => {
        const {id, ...postProps} = post;

        return (
            <li key={id} className="list-group-item" >
                <PostListItem 
                    {...postProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                />
            </li>
        );
    });
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default PostList;
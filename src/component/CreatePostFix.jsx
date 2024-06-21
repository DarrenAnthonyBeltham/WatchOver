import React, { useState } from 'react';
import "./ProfileUser.css";
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';

const CreatePostFix = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (content) => {
      setPosts([content, ...posts]);
    };
  
    return (
      <div>
        <CreatePost addPost={addPost} />
        <PostList posts={posts} />
      </div>
    );
  };

export default CreatePostFix;

import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.author} - {post.time}</h6>
        <p className="card-text">{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="img-fluid" />}
        <div className="mt-3">
          <span className="mr-3">👍 {post.likes}</span>
          <span className="mr-3">💬 {post.comments}</span>
          <span>🔄 {post.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

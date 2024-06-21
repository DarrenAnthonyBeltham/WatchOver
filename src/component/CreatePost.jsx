import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postContent">Write something...</label>
          <textarea
            id="postContent"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

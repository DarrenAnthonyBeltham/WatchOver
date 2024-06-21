import React from 'react';
import Post from './Post';

const PostList = () => {
  const posts = [
    {
      title: 'What was the best thing about the movie "The Batman" to you?',
      author: 'Gaurav Prabhu',
      time: '3d ago',
      content: 'I think The Dark Knight makes for a more realistic Batman movie but The Batman makes for a more accurate Batman movie. I think Matt Reeves makes the other few of his Batman movies as good as The Batman. It will stand as the undeniably greatest Batman trilogy and the quintessential live action Batman.',
      image: 'path/to/your/image.jpg', 
      likes: '5.1k',
      comments: '5.1k',
      shares: '5.1k'
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;

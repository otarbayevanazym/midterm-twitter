// src/components/Feed.js
import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed({ posts, setPosts }) {
  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      text: 'New post!',
      author: 'UserX',
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="Feed">
      <button onClick={addPost}>Add Post</button>
      {posts.map((post) => (
        <Post key={post.id} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
}

export default Feed;

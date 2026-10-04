import React from "react";
import Post from "../components/Post";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div>
      <h2>Total Post: {posts.length} </h2>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default PostPage;

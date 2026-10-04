import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Waliullah",
    category: "React",
    description:
      "Learn the basics of React and how to build your first component.",
    date: "2026-10-01",
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    author: "Waliullah",
    category: "TypeScript",
    description:
      "A beginner-friendly guide to understanding TypeScript types and interfaces.",
    date: "2026-10-02",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    author: "Rahim Ahmed",
    category: "JavaScript",
    description:
      "Explore modern JavaScript features like map, filter, reduce, and destructuring.",
    date: "2026-10-03",
  },
  {
    id: 4,
    title: "Introduction to Next.js",
    author: "Karim Hasan",
    category: "Next.js",
    description:
      "Learn why Next.js is popular and how it improves React applications.",
    date: "2026-10-04",
  },
  {
    id: 5,
    title: "Building Responsive Websites",
    author: "Nusrat Jahan",
    category: "Web Development",
    description:
      "Learn the fundamentals of creating websites that work well on all devices.",
    date: "2026-10-05",
  },
];

const PostDetails = async ({ params }) => {
  const { postId } = await params;
  const post = blogPosts.find((post) => post.id === parseInt(postId));
  return (
    <div>
      <h1>Post Details Page {postId}</h1>
      {post && (
        <div>
          <h2>Title: {post.title}</h2>
          <h3>Author: {post.author}</h3>
          <h3>Category: {post.category}</h3>
          <p>Description: {post.description}</p>
          <h4>Date: {post.date}</h4>
        </div>
      )}
    </div>
  );
};

export default PostDetails;

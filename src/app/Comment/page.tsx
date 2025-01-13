// components/CommentSection.tsx
"use client"
import React, { useState } from "react";

type Comment = {
  id: number; // Unique ID for each comment
  author: string; // The name of the commenter
  content: string; // The comment text
};

const Comment = () => {
  const [comments, setComments] = useState<Comment[]>([]); // State to store comments
  const [newComment, setNewComment] = useState(""); // State for the comment input field
  const [author, setAuthor] = useState(""); // State for the author input field

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim() || !author.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    // Create a new comment object
    const comment: Comment = {
      id: comments.length + 1, // Generate a unique ID
      author: author,
      content: newComment,
    };

    // Add the new comment to the list
    setComments([...comments, comment]);

    // Clear input fields
    setNewComment("");
    setAuthor("");
  };

  return (
    <div className="comment-section mt-10 border border-gray-200 rounded-lg p-4 shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Comments</h2>

      {/* Display Comments */}
      <div className="comments-list mb-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="comment bg-gray-100 p-3 rounded-md mb-3"
            >
              <p>
                <strong>{comment.author}</strong>: {comment.content}
              </p>
            </div>
          ))
        ) : (
          <p><span className="font-bold">Usman Asif</span>: This post was really helpful for me . Keep posting such content.</p>
          
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          className="border p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="border p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full md:w-auto"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;

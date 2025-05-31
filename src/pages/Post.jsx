import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import {
  getPostById,
  getCommentsByPostId,
  addComment,
  deleteComment,
  deletePost,
  validateUser,
} from '../service/PostService';
import PostCardtext from '../components/PostCardtext';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    validateUser().then((res) => setCurrentUser(res.data.username));

    getPostById(id).then((res) => setPost(res.data));
    getCommentsByPostId(id).then((res) => setComments(res.data));
  }, [id]);

const handleAddComment = () => {
  if (!newComment.trim()) return;
  addComment(newComment, id).then((res) => {
    // pastikan respons berisi comment lengkap termasuk id dan username
    const addedComment = res.data;
    setComments([...comments, addedComment]);
    setNewComment('');
  }).catch(err => {
    console.error('Add comment failed', err);
  });
};


  const handleDeleteComment = (commentId) => {
    deleteComment(commentId).then(() => {
      setComments(comments.filter((c) => c.id !== commentId));
    });
  };

  const handleDeletePost = () => {
    if (confirm('Yakin ingin menghapus post ini?')) {
      deletePost(id).then(() => navigate('/'));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PostCardtext post={post} canDelete={currentUser === post.username} onDelete={handleDeletePost} />
      <CommentSection
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        onAddComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
        currentUser={currentUser}
      />
    </div>
  );
}

export default PostPage;

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Post Related
export const fetchPosts = () => api.get('/posts');

export const likePost = (postId) =>
  api.post('/likes', { PostId: postId });

export const getPostById = (id) => api.get(`/posts/${id}`);

export const createPost = async (postData) => {
  try {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('postText', postData.postText);
    if (postData.image) {
      formData.append('image', postData.image);
    }

    const response = await api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (err) {
    console.error("Create post failed:", err.response?.data || err.message);
    throw err;
  }
};

export const deletePost = (id) => api.delete(`/posts/${id}`);

// Comments
export const getCommentsByPostId = (id) => api.get(`/comments/${id}`);

export const addComment = (commentBody, postId) =>
  api.post('/comments', { commentBody, PostId: postId });

export const deleteComment = (commentId) => api.delete(`/comments/${commentId}`);

// Auth
export const validateUser = () => api.get('/auth/auth');

export const fetchUser = () => api.get('/auth/auth');

export const updateUser = (data) => api.put('/auth/update', data);

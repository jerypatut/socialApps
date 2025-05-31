import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext';
import CreatePostForm from '../components/CreatePostForm';
import { createPost } from '../service/PostService';

export default function CreatePost() {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.status) {
      navigate('/login');
    }
  }, [authState, navigate]);

  const initialValues = {
    title: '',
    postText: '',
    image: null,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createPost(values);
      alert('Post berhasil dibuat!');
      navigate('/'); // kembali ke homepage
    } catch (error) {
      console.error('Error saat membuat post:', error);
      alert('Gagal membuat post.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CreatePostForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
}

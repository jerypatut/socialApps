import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext';
import { fetchPosts, likePost } from '../service/PostService';
import PostCard from '../components/PostCard';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.status) {
      navigate('/login');
      return;
    }

    fetchPosts()
      .then((response) => {
        setListOfPosts(response.data.listOfPosts || []);
        setLikedPosts(response.data.likedPosts || []);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      });
  }, [authState, navigate]);

  const likeAPost = (postId) => {
    likePost(postId)
      .then((response) => {
        setListOfPosts((prevList) =>
          prevList.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  Likes: response.data.liked
                    ? [...post.Likes, 0]
                    : post.Likes.slice(0, -1),
                }
              : post
          )
        );

        setLikedPosts((prevLikedPosts) =>
          prevLikedPosts.includes(postId)
            ? prevLikedPosts.filter((id) => id !== postId)
            : [...prevLikedPosts, postId]
        );
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      });
  };

  return (
<div className="bg-gray-90 min-h-screen py-8 px-4">
  <div className="max-w-3xl mx-auto">
    {listOfPosts.map((post) => (
      <PostCard
        key={post.id}
        post={post}
        likedPosts={likedPosts}
        onLike={likeAPost}
        onNavigate={navigate}
      />
    ))}
  </div>
</div>

  );
}

export default Home;

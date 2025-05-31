import React from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function PostCard({ post, likedPosts, onLike, onNavigate }) {
  const handleCardClick = () => {
    onNavigate(`/post/${post.id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLike(post.id);
  };
 const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  return (
    
    <div
      key={post.id}
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-md p-4 mb-6 max-w-md mx-auto cursor-pointer border border-gray-300 hover:shadow-lg transition-shadow"
    >
      {/* Title with border */}
      <div className="text-lg font-bold mb-3 text-gray-800 px-2 py-1 border border-blue-200 rounded-md bg-blue-50">
        {post.title}
      </div>

      {/* Post Text with border */}
      <div className="text-gray-700 mb-4 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
        {post.postText}
      </div>

      {/* Image */}
      {post.image && (
        <div
          className="mb-4 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-blue-400 transition-colors"
          style={{ maxHeight: '12rem', boxShadow: '0 2px 6px rgb(0 0 0 / 0.1)' }}
        >
          <img
            src={`${API_URL}${post.image}`}
            alt={post.title}
            className="w-full h-auto object-cover"
            style={{ maxHeight: '12rem' }}
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
        <div className="text-sm text-gray-500 italic border border-gray-200 rounded-md px-2 py-1 bg-gray-50">
          {post.username}
        </div>
        <div className="flex items-center space-x-2">
          <ThumbUpAltIcon
            onClick={handleLikeClick}
            className={`cursor-pointer transition-colors duration-200 ${
              likedPosts.includes(post.id)
                ? 'text-blue-600 hover:text-blue-800'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          />
          <span className="text-gray-700 font-medium">{post.Likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

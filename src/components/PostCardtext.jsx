
function PostCardtext({ post, canDelete, onDelete }) {
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-700">{post.postText}</p>
      {post.image && (
        <div className="overflow-hidden rounded-xl">
          <img src={`${API_URL}${post.image}`} alt={post.title} className="w-full object-cover" />
        </div>
      )}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <span>Posted by: <strong>{post.username}</strong></span>
        {canDelete && (
          <button
            onClick={onDelete}
            className="text-red-500 hover:underline"
          >
            Delete Post
          </button>
        )}
      </div>
    </div>
  );
}

export default PostCardtext;

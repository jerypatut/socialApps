
function CommentSection({ comments, newComment, setNewComment, onAddComment, onDeleteComment, currentUser }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={onAddComment}
          className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600"
        >
          Tambah
        </button>
      </div>
      <div className="space-y-2">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-100 p-3 rounded-xl flex justify-between items-start">
              <div>
                <p className="text-gray-800">{comment.commentBody}</p>
                <span className="text-xs text-gray-500">by {comment.username}</span>
              </div>
              {currentUser === comment.username && (
                <button
                  onClick={() => onDeleteComment(comment.id)}
                  className="text-red-400 hover:text-red-600 ml-4"
                >
                  ✕
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">Belum ada komentar.</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;

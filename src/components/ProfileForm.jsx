import React, { useState, useEffect } from 'react';

function ProfileForm({ user, onSave }) {
  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || ''); // jika backend support

  useEffect(() => {
    setUsername(user.username || '');
    setEmail(user.email || '');
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ username, email });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Username</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </form>
  );
}

export default ProfileForm;

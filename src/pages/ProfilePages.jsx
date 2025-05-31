import React, { useEffect, useState } from 'react';
import { fetchUser, updateUser } from '../service/PostService';
import ProfileForm from '../components/ProfileForm';

function ProfilePage() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUser()
      .then((res) => setUser(res.data))
      .catch(() => setMessage('Failed to load user data.'));
  }, []);

  const handleSave = (data) => {
    updateUser(data)
      .then(() => setMessage('Profile updated successfully!'))
      .catch(() => setMessage('Failed to update profile.'));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {message && (
        <div className="mb-6 text-center text-sm text-blue-600 font-medium">
          {message}
        </div>
      )}
      <ProfileForm user={user} onSave={handleSave} />
    </div>
  );
}

export default ProfilePage;

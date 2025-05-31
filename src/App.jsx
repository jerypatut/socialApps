import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './layouts/Navbar';
import PageNotFound from './pages/PagesNotfound';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Registration from './pages/RegistrationPage';
import Login from './pages/Login';
import Home from './pages/Home';
import ProfilePages from './pages/ProfilePages';
import Footer from './pages/Footer'; // Pastikan path-nya benar
import FloatingWhatsAppButton from './pages/FloatingWhatsAppButton'; // Hapus tanda titik koma di akhir path
import { AuthContext } from './contexts/Authcontext';
import { checkAuth, logout as logoutService } from './service/AuthService';

// Komponen ProtectedRoute untuk cek login
function ProtectedRoute({ auth, children }) {
  if (!auth.status) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  // Pastikan App ini dibungkus oleh <Router> di luar (index.js)
  const navigate = useNavigate();

  const [authState, setAuthState] = useState({
    username: '',
    id: 0,
    status: false,
  });

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    checkAuth()
      .then((response) => {
        if (response.data.error) {
          setAuthState((prev) => ({ ...prev, status: false }));
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      })
      .catch(() => {
        setAuthState((prev) => ({ ...prev, status: false }));
      })
      .finally(() => {
        setAuthLoading(false);
      });
  }, []);

  const logout = async () => {
    try {
      await logoutService();
      setAuthState({ username: '', id: 0, status: false });
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
      alert('Logout failed, please try again.');
    }
  };

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App font-sans bg-gray-50 min-h-screen flex flex-col">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Navbar logout={logout} />

        {/* Floating WA Button di luar Routes supaya selalu tampil */}
        <FloatingWhatsAppButton />

        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute auth={authState}>
                  <ProfilePages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute auth={authState}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/createpost"
              element={
                <ProtectedRoute auth={authState}>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

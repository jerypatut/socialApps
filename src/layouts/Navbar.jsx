import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Authcontext';
function Navbar({ logout }) {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();          // tunggu logout selesai
      navigate('/login');      // baru navigasi ke login
      setIsOpen(false);        // tutup menu
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          <Link to="/" onClick={() => setIsOpen(false)}>MyBlog</Link>
        </div>

        {/* Hamburger button untuk mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu utama */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center w-full md:w-auto absolute md:static top-full left-0 bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 md:transition-none ${
            isOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          {authState.status && (
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
            >
              Home
            </Link>
          )}

          {authState.status && (
            <Link
              to="/createpost"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
            >
              Create Post
            </Link>
          )}
          
          {authState.status && (
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
            >
           profile
            </Link>
          )}

          {!authState.status ? (
            <>
              <Link
                to="/registration"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 px-4 py-2">
              <span className="text-gray-600 font-medium mb-2 md:mb-0">Hello, {authState.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

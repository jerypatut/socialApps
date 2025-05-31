
export default function LoginComponent({ credentials, onChange, onSubmit }) {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-md">
      <label className="block mb-2 font-semibold text-gray-700">Username:</label>
      <input
        type="text"
        name="username"
        placeholder="Masukan username"
        value={credentials.username}
        onChange={onChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="block mb-2 font-semibold text-gray-700">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Masukan password"
        value={credentials.password}
        onChange={onChange}
        className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={onSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
}

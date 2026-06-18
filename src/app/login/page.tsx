export default function LoginPage() {
  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Login Page</h1>
      {/* Add your login form here */}
        <form className="max-w-sm mx-auto mt-8 p-4 border rounded">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input type="text" id="username" name="username" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input type="password" id="password" name="password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full">
            Login
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
          </p>
        </form>
      </div>
    );
  }
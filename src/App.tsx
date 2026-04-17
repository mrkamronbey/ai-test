import { Routes, Route, Link } from 'react-router-dom';
import AuthRoutes from './routes';

const HomePage = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to the Modular App!</h1>
    <p className="text-lg text-gray-600 mb-8">Navigate through the features:</p>
    <nav className="flex space-x-4">
      <Link to="/login" className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Go to Login
      </Link>
    </nav>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center p-4">
    <h2 className="text-4xl font-bold text-red-800 mb-4">404 - Page Not Found</h2>
    <p className="text-lg text-red-600 mb-8">The page you are looking for does not exist.</p>
    <Link to="/" className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300">
      Go Home
    </Link>
  </div>
);

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {AuthRoutes()}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

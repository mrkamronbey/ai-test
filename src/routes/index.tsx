import { Route } from 'react-router-dom';
import { LoginPage } from '@/features/auth';

// This function groups all authentication-related routes
const AuthRoutes = () => {
  return (
    <Route path="/">
      <Route path="login" element={<LoginPage />} />
      {/* Add other auth routes here, e.g., /register, /forgot-password */}
    </Route>
  );
};

export default AuthRoutes;

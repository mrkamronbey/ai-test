import { useState, useCallback } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  user: { username: string } | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
  });

  const login = useCallback((username: string) => {
    // Simulate API call for login
    console.log(`Attempting to log in user: ${username}`);
    setAuthState({
      isLoggedIn: true,
      user: { username },
    });
    // In a real app, you'd store tokens, user data in local storage/context etc.
  }, []);

  const logout = useCallback(() => {
    // Simulate API call for logout or clear session
    console.log('Logging out...');
    setAuthState({
      isLoggedIn: false,
      user: null,
    });
  }, []);

  return {
    ...authState,
    login,
    logout,
  };
};

export default useAuth;

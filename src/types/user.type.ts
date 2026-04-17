interface User {
  id: string; // Unique identifier for the user
  username: string; // User's unique username, often used for login
  firstName: string;
  lastName: string;
  email: string; // User's email address
  createdAt: Date; // Timestamp when the user account was created
  updatedAt: Date; // Timestamp when the user account was last updated
  isActive: boolean; // Indicates if the user account is active
  // Additional fields can be added here as needed, e.g., 'role', 'profilePictureUrl', etc.
}

export default User;
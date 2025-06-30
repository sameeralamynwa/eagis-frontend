// In utills/types/IAuthContext.ts

// <<< FIX: Add a new interface for the user's profile
export interface AuthUserProfile {
  about?: string | null;
  avatar?: string | null;
}

export interface AuthUser {
  id: number;
  // <<< FIX: Add the 'name' and 'email' fields
  name: string;
  email: string;
  username: string;
  permissions: string[];
  // <<< FIX: Use the new AuthUserProfile interface
  profile?: AuthUserProfile;
  // This 'avatar' is now inside the profile, but we keep it here
  // temporarily if other components use it directly.
  avatar?: string; 
}

export interface IAuthContext {
  user: AuthUser | null;
  token: string | null;
}
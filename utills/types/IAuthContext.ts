export interface AuthUser {
  id: number;
  username: string;
  permissions: string[];
  avatar?: string;
}

export interface IAuthContext {
  user: AuthUser | null;
  token: string | null;
}

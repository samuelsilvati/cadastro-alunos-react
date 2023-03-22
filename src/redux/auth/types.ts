export interface LoginRequestPayload {
  email: string;
  password: string;
}

export interface User {
  nome: string;
  email: string;
  id: number;
}

export interface AuthState {
  isLoggedIn: boolean;
  token: boolean | string;
  user: User;
  isLoading: boolean;
}

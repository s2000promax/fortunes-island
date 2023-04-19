export interface User {
  id: string;
  username: string;
  avatar?: string;
  balance?: number;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}

export type ListType = {
  id: string;
  name: string;
  userId: string;
};

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export interface IRegisterState {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
}

export interface ILoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

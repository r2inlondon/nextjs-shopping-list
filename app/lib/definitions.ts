export type ListType = {
  id: string;
  name: string;
  userId: string;
};

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

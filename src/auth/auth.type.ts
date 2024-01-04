import type { IUser } from '../types/user-control.type';
export type RegisterPayload = Omit<IUser, 'id'> & { passwordRepeat: string };
export type LoginPayload = Partial<Pick<IUser, 'name' | 'email' | 'phone'>> & {
  password: string;
};

import { IUser } from 'src/types/user-control.type';

export type IUserUpdatePayload = Partial<Omit<IUser, 'id' | 'password'>> &
  Required<Pick<IUser, 'password' | 'id'>>;

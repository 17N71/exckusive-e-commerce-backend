export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  avatar?: string;
}
export type ICreateUser = Omit<IUser, 'id'>;
export interface ICreateUserWithRepeat extends ICreateUser {
  passwordRepeat?: string;
}

export type ILoginResult = Omit<IUser, 'password'>;

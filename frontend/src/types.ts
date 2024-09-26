export type UserType = {
  id: number;
  role: number;
  username: string;
  name: string;
  email: string;
  password: string;
};

export type EventType = {
  id: number;
  name: string;
  description: string;
  datetime_from: Date;
  datetime_to: Date;
};

export enum Roles {
  ADMIN,
  USER,
}

import moment from "moment/moment";

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
  description?: string;
  datetime_from: moment.Moment;
  datetime_to: moment.Moment;
};

export enum Roles {
  ADMIN,
  USER,
}

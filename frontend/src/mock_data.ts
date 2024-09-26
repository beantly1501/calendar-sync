import { EventType, Roles, UserType } from "./types";
import moment from "moment/moment";

export const MOCK_USER_DATA: UserType[] = [
  {
    id: 1,
    name: "Jan",
    username: "janko",
    role: Roles.ADMIN,
    email: "jbockal1501@gmail.com",
    password: "jantest",
  },
  {
    id: 2,
    name: "Nensi",
    username: "dugmiciforum",
    role: Roles.USER,
    email: "nensi@gmail.com",
    password: "nensitest",
  },
  {
    id: 3,
    name: "Zvonko",
    username: "zvonkoraj",
    role: Roles.USER,
    email: "zvonko@gmail.com",
    password: "zvonkotest",
  },
];

export const MOCK_CALENDAR_DATA: EventType[] = [
  {
    id: 1,
    name: "Košarka",
    description: "Hakl s ekipom",
    datetime_from: moment("2024-09-26 16:00:00"),
    datetime_to: moment("2024-09-26 19:00:00"),
  },
  {
    id: 2,
    name: "Kino",
    description: "Heng s Nensi",
    datetime_from: moment("2024-09-27 20:00:00"),
    datetime_to: moment("2024-09-27 23:00:00"),
  },
];

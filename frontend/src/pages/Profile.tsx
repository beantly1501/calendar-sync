import { useParams } from "react-router-dom";
import { Roles, UserType } from "../types";

const MOCK_DATA: UserType[] = [
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

export default function Profile() {
  const { userId } = useParams();

  return (
    <div>
      {MOCK_DATA.map((user: UserType) => {
        if (userId === user.id.toString()) {
          return (
            <div className={"flex flex-col gap-2"}>
              <div className={"flex items-center gap-2"}>
                <p className={"text-5xl"}>
                  <strong>{user.name}</strong>
                </p>
                <p className={"text-2xl"}>({user.username})</p>
              </div>
              <p>{user.email}</p>
            </div>
          );
        }
        return null;
      })}
      <p>calendar</p>
    </div>
  );
}

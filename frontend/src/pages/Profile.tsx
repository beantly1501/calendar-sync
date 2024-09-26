import { useParams } from "react-router-dom";
import { UserType } from "../types";
import { MOCK_CALENDAR_DATA, MOCK_USER_DATA } from "../mock_data";
import "moment-timezone";
import Calendar from "../components/Calendar";

export default function Profile() {
  const { userId } = useParams();

  return (
    <div>
      {MOCK_USER_DATA.map((user: UserType) => {
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
      <Calendar values={MOCK_CALENDAR_DATA} />
    </div>
  );
}

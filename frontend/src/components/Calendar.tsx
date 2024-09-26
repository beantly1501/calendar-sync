import { EventType } from "../types";
import { getCurrentWeek } from "../helpers";

type Props = {
  values: EventType[];
};

export default function Calendar({ values }: Props) {
  let { days, dates } = getCurrentWeek();

  return (
    <div className={"flex flex-col gap-5 items-center align-middle mt-8"}>
      calendar
    </div>
  );
}

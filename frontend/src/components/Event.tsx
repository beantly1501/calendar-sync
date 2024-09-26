import { EventType } from "../types";

type Props = {
  event: EventType;
};

export default function Event({ event }: Props) {
  return (
    <div className={"bg-blue-400 rounded-2xl p-5 w-full"}>
      <div className={"-mt-3 flex gap-5"}>
        <p>
          <strong>{event.datetime_to.format("MMMM dddd").toString()}</strong>
        </p>
        <p></p>
      </div>
    </div>
  );
}

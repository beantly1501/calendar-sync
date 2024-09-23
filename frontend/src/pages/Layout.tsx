import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="m-5 flex-col flex gap-6">
      <Navbar />
      <Outlet />
    </div>
  );
}

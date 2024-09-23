import Navbar from "../components/Navbar";
import Home from "./Home";

export default function Layout() {
  return (
    <div className="m-5">
      <Navbar />
      <Home />
    </div>
  );
}

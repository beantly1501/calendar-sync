import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { AccountBox, Clear, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState<Date | null>();

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className="left-4 fixed text-4xl items-center flex">
        <Home fontSize="inherit" />
      </div>
      <div className="flex gap-1">
        <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="hr">
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            value={search}
            onChange={(value) => setSearch(value)}
          />
        </LocalizationProvider>
        <div
          className="text-3xl items-center flex"
          onClick={() => setSearch(null)}
        >
          <Clear fontSize="inherit" />
        </div>
      </div>
      <div className="right-4 fixed text-4xl items-center flex">
        <AccountBox fontSize="inherit" onClick={() => navigate("profile/1")} />
      </div>
    </div>
  );
}

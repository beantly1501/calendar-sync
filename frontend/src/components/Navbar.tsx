import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { AccountBox, Clear } from "@mui/icons-material";

export default function Navbar() {
  const [search, setSearch] = useState<Date | null>();

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-1">
        <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="hr">
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            value={search}
            onChange={(value) => setSearch(value)}
          />
        </LocalizationProvider>
        <div className="text-4xl items-center flex">
          <Clear fontSize="inherit" onClick={() => setSearch(null)} />
        </div>
      </div>
      <div className="right-4 fixed text-4xl items-center flex">
        <AccountBox fontSize="inherit" />
      </div>
    </div>
  );
}

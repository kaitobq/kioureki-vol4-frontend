import { Dropdown } from "./dropdown";

const dropdownList = [
  {
    label: "Dashboard",
    value: "dashboard",
  },
  {
    label: "Settings",
    value: "settings",
  },
  {
    label: "Earnings",
    value: "earnings",
  },
  {
    label: "Sign out",
    value: "sign-out",
  },
];

export function DashboardHeader() {
  return (
    <div>
      <Dropdown
        list={dropdownList}
        defaultValue={{
          label: "Dashboard",
          value: "dashboard",
        }}
      ></Dropdown>
    </div>
  );
}

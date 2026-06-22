import ThemeToggle from "@/components/ui/ThemeToggle";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <ThemeToggle />
    </>
  )
}

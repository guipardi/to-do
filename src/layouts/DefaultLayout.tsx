import { Outlet } from "react-router-dom";
import { HeaderAndInfo } from "../components/HeaderAndInfo";

export function DefaultLayout() {
  return (
    <>
      <HeaderAndInfo />
      <Outlet />
    </>
  )
}
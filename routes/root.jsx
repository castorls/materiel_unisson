import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
      <div class="asset">
        <Outlet />
      </div>
      </>
    );
}
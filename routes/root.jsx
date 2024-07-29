import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
      <div id="root">

        <div class="asset">
          <Outlet />
        </div>
      </div>
      </>
    );
}
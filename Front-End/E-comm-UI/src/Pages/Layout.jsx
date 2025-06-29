import {  Outlet} from "react-router-dom";

import Header from "../components/Header";

function Layout() {
  return (
    <>
      <div className="px-6">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;

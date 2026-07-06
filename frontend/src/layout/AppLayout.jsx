import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen surface-ground">
      <Navbar />

      <main className="p-4 md:p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

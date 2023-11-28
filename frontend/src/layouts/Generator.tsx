import { Outlet } from "react-router-dom";
import GeneratorNavbar from "../components/Generator/GeneratorNavbar";
import GeneratorSidebar from "../components/Generator/GeneratorSidebar";

const GeneratorLayout = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <GeneratorNavbar />
      <div className="flex items-center justify-between">
        <GeneratorSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default GeneratorLayout;

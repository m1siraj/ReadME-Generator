import { Outlet } from "react-router-dom";
import GeneratorNavbar from "../components/Generator/GeneratorNavbar";

const GeneratorLayout = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <GeneratorNavbar />
      <Outlet />
    </div>
  );
};

export default GeneratorLayout;

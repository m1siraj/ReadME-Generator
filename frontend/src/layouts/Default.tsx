import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

export default function DefaultLayout() {
  return (
    <body
      // poppins.className
      className={`bg-background min-h-screen min-w-screen text-secondary flex flex-col h-screen justify-between`}
    >
      <div className="mx-20">
        <Navbar />
        <div className="w-full flex relative">
          <Outlet />;
        </div>
      </div>
      <Footer />
    </body>
  );
}

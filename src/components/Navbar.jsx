import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="container mx-auto mt-1 p-2 border bg-green-300 rounded-lg">
        <div className="flex">
          <img src="src\assets\logo.png" alt="" width={50} height={50} />
          <div className="text-2xl font-bold content-center ml-5">Perpus Online</div>
          <div className="grid grid-cols-3 gap-5 ml-auto text-xl content-center font-medium">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white p-2 rounded-lg content-center text-center font-medium")}>
              Home
            </NavLink>
            <NavLink to={"/books"} className={({ isActive }) => (isActive ? "bg-white border rounded-lg p-2" : "hover:bg-white p-2 rounded-lg content-center text-center font-medium")}>
              Books
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "bg-white border rounded-lg p-2" : "hover:bg-white p-2 rounded-lg content-center text-center font-medium")}>
              About
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-3 ml-auto mr-1 text-xl font-medium">
            <NavLink to={"/login"} className={"content-center hover:bg-white text-center rounded-lg"}>
            Sign In
            </NavLink>
            <NavLink to={"/sign_up"} className={"content-center hover:bg-white text-center rounded-lg p-1"}>
            Sign Up
            </NavLink>
          </div>
        </div>
      </div>
      {/* Akhir Navbar */}
    </>
  );
};
export default Navbar;

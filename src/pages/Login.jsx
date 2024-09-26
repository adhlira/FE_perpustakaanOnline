import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container mx-auto mt-2">
        <div className="flex">
          <img src="src\assets\logo.png" alt="" width={50} height={50} />
          <div className="text-2xl font-bold content-center ml-5">Perpus Online</div>
          <NavLink to={"/"} className={"content-center text-center text-xl font-semibold rounded-lg hover:bg-green-300 p-1 ml-10"}>
            Home
          </NavLink>
          <NavLink to={""} className={"text-center content-center font-semibold text-xl ml-auto rounded-lg p-1 hover:bg-green-300"}>
            Sign Up
          </NavLink>
        </div>
        <div className="container rounded-lg bg-white mt-20">
          <div className="border rounded-lg p-3 w-1/3 mx-auto">
            <p className="text-center font-bold text-xl mb-2">Sign In</p>
            <p className="text-center font-thin text-base mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, illum?</p>
            <input type="text" name="username" className="border w-full h-10 p-2 mb-3" placeholder="Username" />
            <input type="text" name="password" className="border w-full h-10 p-2 mb-3" placeholder="Password" />
            <button className="border w-full rounded-lg p-2 bg-green-300 font-semibold">Log In</button>
          </div>

          <p className="text-center text-sm mt-4 font-thin content-center">Copyright 2024 | Perpus Online</p>
        </div>
      </div>
    </>
  );
};

export default Login;

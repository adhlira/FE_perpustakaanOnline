import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="container mx-auto mt-2">
        <div className="flex">
          <img src="src\assets\logo.png" alt="" width={50} height={50} />
          <div className="text-2xl font-bold content-center ml-5">Perpus Online</div>
          <NavLink to={"/"} className={"content-center text-center text-xl font-semibold rounded-lg hover:bg-green-300 p-1 ml-10"}>
            Home
          </NavLink>
          <NavLink to={"/login"} className={"text-center content-center font-semibold text-xl ml-auto rounded-lg p-1 hover:bg-green-300"}>
            Sign In
          </NavLink>
        </div>
        <div className="container rounded-lg bg-white mt-10">
          <div className="border rounded-lg p-3 w-1/3 mx-auto">
            <p className="text-center font-bold text-xl mb-2">Sign Up</p>
            <p className="text-center font-thin text-base mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, illum?</p>
            <form action="">
              <input type="text" name="username" className="border w-full h-10 p-2 mb-3" placeholder="Username" />
              <div style={{ position: "relative" }}>
                <input type={passwordVisible ? "text" : "password"} name="password" className="border w-full h-10 p-2 mb-3" placeholder="Password" />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Tampilkan icon yang sesuai */}
                </span>
              </div>
              <input type="text" name="name" className="border w-full h-10 p-2 mb-3" placeholder="Name" />
              <input type="text" name="email" className="border w-full h-10 p-2 mb-3" placeholder="Email" />
              <input type="text" name="phone_number" className="border w-full h-10 p-2 mb-3" placeholder="Phone Number" />
              <button className="border w-full rounded-lg p-2 bg-green-300 font-semibold">Sign Up</button>
            </form>
          </div>

          <p className="text-center text-sm mt-4 font-thin content-center">Copyright 2024 | Perpus Online</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

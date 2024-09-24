import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import { NavLink } from "react-router-dom";

const BookPerCategory = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-10 mt-2">
        <div className="flex gap-4 mb-3">
          <div className="border w-1/3 h-1/3 p-2 rounded-lg text-center">
            <p className="font-semibold text-xl mb-2">Category</p>
            <hr className="w-full mb-5" />
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Biografi</button>
            </NavLink>
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Fiction</button>
            </NavLink>
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">History</button>
            </NavLink>
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Sains</button>
            </NavLink>
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Politics</button>
            </NavLink>
            <NavLink to={"/book_per_category"} className={({ isActive }) => (isActive ? "rounded-lg bg-white p-2" : "hover:bg-white rounded-lg content-center text-center")}>
              <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Technology</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookPerCategory;

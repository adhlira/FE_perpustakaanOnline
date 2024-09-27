import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import { NavLink } from "react-router-dom";

const BookPerCategory = () => {
  return (
    <>
      <Navbar />
      <div className="container border p-10 mt-2 mb-2 mx-auto">
        <div className="flex gap-4 mb-3">
          <div className="border w-1/3 h-1/3 p-8 rounded-lg text-center">
            <p className="font-semibold text-xl mb-2">Category</p>
            <hr className="w-full mb-5" />
            <NavLink to={"/book_per_category_biografi"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2 font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2  font-medium text-xl")}>
              <button className="w-full mb-8">Biografi</button>
            </NavLink>
            <NavLink to={"/book_per_category_fiction"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2  font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2 font-medium text-xl")}>
              <button className="w-full mb-8">Fiction</button>
            </NavLink>
            <NavLink to={"/book_per_category_fiction"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2  font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2 font-medium text-xl")}>
              <button className="w-full mb-8">History</button>
            </NavLink>
            <NavLink to={"/book_per_category_fiction"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2  font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2 font-medium text-xl")}>
              <button className="w-full mb-8">Sains</button>
            </NavLink>
            <NavLink to={"/book_per_category_fiction"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2  font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2 font-medium text-xl")}>
              <button className="w-full mb-8">Politics</button>
            </NavLink>
            <NavLink to={"/book_per_category_fiction"} className={({ isActive }) => (isActive ? "rounded-lg bg-green-300 p-2  font-medium text-xl" : "hover:rounded-lg hover:bg-green-300 p-2 font-medium text-xl")}>
              <button className="w-full">Technology</button>
            </NavLink>
          </div>
          <div className="border rounded-lg w-1/3 p-2">
            <img src="src/assets/foto1.jpg" className="rounded-lg" alt="" />
            <div className="flex mt-5 items-center">
              <p className="font-semibold">Andrea Hirata</p>
              <p className="border p-2 ml-auto rounded-lg font-semibold">Fiction</p>
            </div>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, incidunt atque sunt esse ab quod. Dolore itaque quae unde totam.</p>
            <div className="flex mt-5 items-center">
              <p>Status :</p>
              <p className="ml-auto border p-2 rounded-lg  font-semibold">Not Available</p>
            </div>
            <button className="border rounded-lg w-full bg-green-300 font-semibold p-2 mt-5">Reservation</button>
          </div>
          <div className="border rounded-lg w-1/3 p-2">
            <img src="src/assets/foto2.jpg" className="rounded-lg" alt="" />
            <div className="flex mt-5 items-center">
              <p className="font-semibold">Raditya Dika</p>
              <p className="border p-2 ml-auto rounded-lg font-semibold">Fiction</p>
            </div>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, incidunt atque sunt esse ab quod. Dolore itaque quae unde totam.</p>
            <div className="flex mt-5 items-center">
              <p>Status :</p>
              <p className="ml-auto border p-2 rounded-lg  font-semibold">Available</p>
            </div>
            <button className="border rounded-lg w-full bg-green-300 font-semibold p-2 mt-5">Borrow</button>
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="w-1/3"></div>
          <div className="w-1/3 border rounded-lg p-2">
            <img src="src/assets/foto3.jpg" className="rounded-lg" alt="" />
            <div className="flex mt-5 items-center">
              <p className="font-semibold">Pramoedya Ananta Noer</p>
              <p className="border p-2 ml-auto rounded-lg font-semibold">History</p>
            </div>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, incidunt atque sunt esse ab quod. Dolore itaque quae unde totam.</p>
            <div className="flex mt-5 items-center">
              <p>Status :</p>
              <p className="ml-auto border p-2 rounded-lg  font-semibold">Available</p>
            </div>
            <button className="border rounded-lg w-full bg-green-300 font-semibold p-2 mt-5">Borrow</button>
          </div>
          <div className="w-1/3 border rounded-lg p-2">
            <img src="src/assets/foto1.jpg" className="rounded-lg" alt="" />
            <div className="flex mt-5 items-center">
              <p className="font-semibold">Pramoedya Ananta Noer</p>
              <p className="border p-2 ml-auto rounded-lg font-semibold">History</p>
            </div>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, incidunt atque sunt esse ab quod. Dolore itaque quae unde totam.</p>
            <div className="flex mt-5 items-center">
              <p>Status :</p>
              <p className="ml-auto border p-2 rounded-lg  font-semibold">Available</p>
            </div>
            <button className="border rounded-lg w-full bg-green-300 font-semibold p-2 mt-5">Borrow</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookPerCategory;

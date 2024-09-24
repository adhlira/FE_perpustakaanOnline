/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className="container p-10 mt-2 mx-auto">
        <div className="flex gap-4 mb-3">
          <div className="border w-1/3 h-1/3 p-2 rounded-lg text-center">
            <p className="font-semibold text-xl">Category</p>
            <hr className="w-full mb-5" />
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Biografi</button>
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Fiction</button>
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">History</button>
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Politics</button>
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Sains</button>
            <button className="font-semibold hover:bg-green-300 mb-3 rounded-lg w-full text-xl p-2">Technology</button>
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
            <button className="border rounded-lg w-full font-semibold p-2 mt-5">Reservation</button>
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
            <button className="border rounded-lg w-full font-semibold p-2 mt-5">Borrow</button>
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
            <button className="border rounded-lg w-full font-semibold p-2 mt-5">Borrow</button>
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
            <button className="border rounded-lg w-full font-semibold p-2 mt-5">Borrow</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Books;

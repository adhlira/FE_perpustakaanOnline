import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="container mx-auto mt-1 p-2 border bg-green-300 rounded-lg">
        <div className="flex">
          <img src="src\assets\logo.png" alt="" width={50} height={50} />
          <div className="text-2xl font-bold content-center ml-5">Perpus Online</div>
          <div className="grid grid-cols-3 gap-5 ml-auto text-xl content-center font-medium">
            <a href="" className="p-1 rounded-lg hover:bg-white">
              Home
            </a>
            <a href="" className="p-1 rounded-lg hover:bg-white">
              Books
            </a>
            <a href="" className="p-1 rounded-lg hover:bg-white">
              About
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 ml-auto mr-1 text-xl font-medium">
            <button className="p-1 hover:bg-white rounded-lg">Sign In</button>
            <button className="p-1 hover:bg-white rounded-lg">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Akhir Navbar */}

      {/* Jumbotron */}
      <div className="container p-10 mx-auto border rounded-lg mt-2 mb-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid-flow-col place-content-center p-3">
            <p className="text-lg">Star your reading</p>
            <p className="text-2xl font-bold mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, similique.</p>
            <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum facilis rem tempore! Illo, rem.</p>
            <button className="border rounded-lg mt-5 p-3 bg-green-600 text-white">Start Reading</button>
          </div>
          <div className="grid-flow-col p-3">
            <img src="src\assets\cover.jpg" className="h-[550px] w-full rounded-lg" alt="" />
          </div>
        </div>
      </div>
      {/* Akhir jumbotron */}

      {/* Category */}
      <div className="container p-10 border mb-2 mx-auto rounded-lg">
        <div className="flex">
          <p className="font-bold text-2xl">All Books</p>
          <input type="text" name="" id="" className="border rounded-lg p-2 ml-auto mr-2 w-72" placeholder="Search your book" />
          <button className="border rounded-lg p-2">
            <FaSearch />
          </button>
        </div>
        <div className="flex p-8 bg-green-300 mt-10 rounded-lg font-semibold">
          <div className="grid grid-cols-6 gap-10 mx-auto">
            <div>
              <button className="border p-2 rounded-lg bg-white">Fiction</button>
            </div>
            <div>
              <button className="border p-2 rounded-lg bg-white">History</button>
            </div>
            <div>
              <button className="border p-2 rounded-lg bg-white">Biografi</button>
            </div>
            <div>
              <button className="border p-2 rounded-lg bg-white">Sains</button>
            </div>
            <div>
              <button className="border p-2 rounded-lg bg-white">Politics</button>
            </div>
            <div>
              <button className="border p-2 rounded-lg bg-white">Technology</button>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Category */}

      {/* Buku */}
      <div className="container p-10 mx-auto mb-2 rounded-lg">
        <div className="flex gap-4">
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          </div>
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          </div>
        </div>
        <div className="flex mt-3 gap-4">
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          </div>
          <div className="flex-1 border rounded-lg p-3">
            <div className="">
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
          </div>
        </div>
      </div>
      {/* Akhir Buku */}
    </>
  );
};
export default Navbar;

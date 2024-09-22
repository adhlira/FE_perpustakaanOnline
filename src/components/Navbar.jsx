const Navbar = () => {
  return (
    <>
    {/* Navbar */}
      <div className="container mx-auto mt-1 p-2 border bg-green-300 rounded-lg">
        <div className="flex">
          <img src="src\assets\logo.png" alt="" width={50} height={50} />
          <div className="text-2xl font-bold content-center ml-5">Perpus Online</div>
          <div className="grid grid-cols-3 gap-5 ml-auto text-xl content-center font-medium">
            <a href="">Home</a>
            <a href="">Books</a>
            <a href="">About</a>
          </div>
          <div className="grid grid-cols-2 gap-3 ml-auto mr-1 text-xl font-medium">
            <button className="p-1 rounded-lg">Sign In</button>
            <button className="border p-1 rounded-lg">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Akhir Navbar */}

      {/* Jumbotron */}
      <div className="container p-10 mx-auto">
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
    </>
  );
};
export default Navbar;

const Navbar = () => {
  return (
    <>
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
    </>
  );
};
export default Navbar;

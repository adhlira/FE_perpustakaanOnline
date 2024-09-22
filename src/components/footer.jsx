import { FaEnvelope, FaPhoneVolume, FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaHeart } from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <div className="bg-green-200 border p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className="grid-flow-col">
              <div className="flex">
                <img src="src\assets\logo.png" alt="" width={50} height={50} />
                <div className="text-2xl font-semibold content-center ml-3">Perpus Online</div>
              </div>
              <p className="font-normal text-xl mt-2">Desa Ujunggede</p>
              <p className="font-normal">Gang Nakula Rw 003</p>
              <div className="flex mt-5 border-black">
                <FaEnvelope className="place-self-center" />
                <p className="ml-5">address@gmail.com</p>
              </div>
              <div className="flex">
                <FaPhoneVolume className="place-self-center" />
                <p className="ml-5">0899-3303-6677</p>
              </div>
              <div className="flex mt-5">
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaTwitter className="ml-5" />
                </a>
                <a href="">
                  <FaInstagram className="ml-5" />
                </a>
                <a href="">
                  <FaTiktok className="ml-5" />
                </a>
              </div>
            </div>
            <div className="grid-flow-col">
              <p className="font-semibold text-2xl mt-2">Category</p>
              <p className="mt-5 text-lg font-normal">Fiction</p>
              <p className="font-normal text-lg mt-2">History</p>
              <p className="font-normal text-lg mt-2">Sains</p>
              <p className="font-normal text-lg mt-2">Biografi</p>
              <p className="font-normal text-lg mt-2">Politics</p>
            </div>
            <div className="grid-flow-col">
              <p className="text-2xl font-semibold">Quick Links</p>
              <p className="text-lg font-normal mt-5">Privacy Policy</p>
              <p className="text-lg font-normal mt-2">Discussion</p>
              <p className="text-lg font-normal mt-2">Terms & Conditions</p>
              <p className="text-lg font-normal mt-2">Customer Support</p>
              <p className="text-lg font-normal mt-2">FAQ</p>
            </div>
            <div className="grid-flow-col">
              <p className="text-2xl font-semibold">Subscribe</p>
              <p className="mt-5 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, magnam.</p>
              <input type="text" className="border rounded-lg mt-5 p-2" placeholder="Email here" />
              <button className="border p-2 mt-3 rounded-lg bg-green-700 text-white text-base">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-slate-900">
        <footer className="">
          <div className="container mx-auto text-center text-white">
            <p className="text-sm flex justify-center items-center">
              &copy; 2024 Perpus Online Made With <FaHeart className="text-red-500 mx-2" /> by Adhli Ramadhan
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default footer;

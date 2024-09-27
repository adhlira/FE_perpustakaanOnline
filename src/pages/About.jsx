import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import { FaHome, FaBookOpen, FaRubleSign } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container border rounded-lg mx-auto mt-3 mb-3 p-10">
        <p className="text-center text-2xl font-bold mb-5">About Us</p>
        <p className="text-center mb-10 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex p-5 border gap-4">
          <div className="flex-1 content-center p-5">
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <img src="src/assets/foto1.jpg" className="object-bottom" alt="" />
              </div>
              <div className="flex-1">
                <img src="src/assets/foto2.jpg" className="object-top" alt="" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <img src="src/assets/foto3.jpg" alt="" />
              </div>
              <div className="flex-1">
                <img src="src/assets/foto1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 rounded-lg">
            <p className="font-semibold mb-3 text-xl">We are Perpus Online</p>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ab beatae dolor sint modi aliquam possimus natus sit exercitationem! Consequatur quaerat nobis voluptates temporibus nam deleniti ducimus. Tempore quo nulla neque
              culpa cum eum facere a quod ratione, harum suscipit quia, dignissimos quos, modi rem omnis provident fuga labore incidunt porro? Laboriosam facilis harum asperiores saepe illo dolorem, amet rerum doloremque ex ab excepturi
              fuga pariatur vel exercitationem voluptatum quae molestiae quibusdam, vitae repudiandae eum iste quos! Quisquam perferendis perspiciatis tenetur a veritatis, dicta repellendus ad harum ducimus corporis facere omnis quo
              incidunt provident repudiandae eos quas saepe nisi aliquam nemo in laborum maxime mollitia! Vel laudantium, tenetur optio corporis doloremque nisi praesentium, voluptas eaque sit architecto hic quia veritatis sint rerum veniam
              repudiandae ad, maiores molestiae. Repellendus veritatis eligendi sed quas quis temporibus eveniet ipsa deleniti voluptas consequatur iusto aut, asperiores nam a eum. Nesciunt iste, illum sit similique corporis animi aliquam
              dolore sequi velit voluptatibus quas sint nostrum architecto necessitatibus. Repudiandae quos aliquid nesciunt vel explicabo itaque, eum magnam. Natus, architecto commodi beatae cum fugit illo id accusantium numquam nobis
              earum necessitatibus quisquam, quibusdam accusamus neque ratione cupiditate sint minima ut eveniet laudantium. At magnam eos pariatur quos.
            </p>
          </div>
        </div>
        <p className="text-center font-bold text-2xl mt-10 mb-3">What We Do</p>
        <div className="flex border gap-4 mx-auto text-white p-5">
          <div className="flex-1 bg-sky-950 p-5">
            <div className="flex">
              <FaHome className="self-center" />
              <p className="ml-2">LOREM.</p>
            </div>
            <p className="text-xs text-justify mt-2 ml-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, illo corporis molestiae ab eos quod quia saepe.</p>
            <p className="ml-[26px] mt-2">LEARN MORE</p>
          </div>
          <div className="flex-1  bg-gray-700 p-5">
            <div className="flex">
              <FaBookOpen className="self-center" />
              <p className="ml-2">LOREM</p>
            </div>
            <p className="text-xs text-justify mt-2 ml-[26px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias vero voluptates, possimus minima voluptas odit cumque.</p>
            <p className="ml-[26px] mt-2">LEARN MORE</p>
          </div>
          <div className="flex-1 bg-red-900 border p-5">
          <div className="flex">
              <FaRubleSign className="self-center" />
              <p className="ml-2">LOREM</p>
            </div>
            <p className="text-xs text-justify mt-2 ml-[26px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias vero voluptates, possimus minima voluptas odit cumque.</p>
            <p className="ml-[26px] mt-2">LEARN MORE</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

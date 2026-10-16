import NavBar from "../components/Navbar";
import { FaLinkedinIn, FaGithub, FaJava } from "react-icons/fa";

import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import spring from "../assets/spring.png";
import figma from "../assets/figma.png";
import firebase from "../assets/Firebase.png";
import profile from "../assets/Profile.png";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between">
      {/* ส่วนของ Navbar ด้านบน */}
      <NavBar pname="h" colorLinkNavbar="#FFF714" />

      {/* ส่วน Hero Section แนวนอนเต็มจอ */}
      <div className="w-full px-12 md:px-24 py-10 flex flex-row items-center justify-between gap-8 my-auto">
        {/* ข้อความรายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 
            className="text-white text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Full Stack Web <br />
            Developer !
          </h1>
          <p 
            className="text-white text-lg font-normal"
            style={{ color: '#ffffff' }}
          >
            Hi, I'm Panupong_o. A passionate Full Stack Web Developer based in Thailand.
          </p>

          {/* ปุ่มไอคอนโซเชียล */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-colors"
            >
              <FaLinkedinIn className="text-black text-2xl" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-colors"
            >
              <FaGithub className="text-black text-2xl" />
            </a>
          </div>
        </div>

        {/* รูปโปรไฟล์วงกลมด้านขวา */}
        <div className="w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
          <img
            src={profile}
            alt="Panizza's profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ส่วน Tech Stacks ด้านล่างสุด */}
      <div className="w-full pb-10 flex flex-col items-center gap-4">
        <span 
          className="text-white text-base font-semibold"
          style={{ color: '#ffffff' }}
        >
          My Tech Stacks
        </span>

        {/* ไอคอนเรียงแนวนอน */}
        <div className="flex items-center justify-center gap-8">
          <img src={html5} alt="HTML5" className="h-10 w-auto" />
          <img src={css3} alt="CSS3" className="h-10 w-auto" />
          <img src={js} alt="JavaScript" className="h-10 w-auto" />
          <img src={nodejs} alt="Node.js" className="h-10 w-auto" />
          <img src={reactLogo} alt="React" className="h-10 w-auto" />
          <img src={spring} alt="Spring Boot" className="h-10 w-auto" />
          <FaJava className="text-[#E76F00] text-4xl" />
          <img src={figma} alt="Figma" className="h-10 w-auto" />
          <img src={firebase} alt="Firebase" className="h-10 w-auto" />
        </div>
      </div>
    </div>
  );
}
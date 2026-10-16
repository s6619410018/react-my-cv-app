import NavBar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";

import bikes from "../assets/img2.png";
import learnify from "../assets/img3.png";
import animex from "../assets/img4.png";
import techz from "../assets/img5.png";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione!";

const projects = [
  {
    title: "Bikes and Beards",
    image: bikes,
    demo: "#",
    git: "#",
  },
  {
    title: "Learnify",
    image: learnify,
    demo: "#",
    git: "#",
  },
  {
    title: "Anime-X",
    image: animex,
    demo: "#",
    git: "#",
  },
  {
    title: "Tech-Z",
    image: techz,
    demo: "#",
    git: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between">
      {/* ส่วนของ NavBar */}
      <NavBar pname="p" colorLinkNavbar="#FFF714" />

      {/* หัวข้อ Portfolio */}
      <div className="flex justify-center pt-10">
        <h1 
          className="text-white text-5xl font-bold font-['Lora',serif]"
          style={{ color: '#ffffff' }}
        >
          Portfolio
        </h1>
      </div>

      {/* การ์ดแสดงผลงาน */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24 pt-16 pb-20 px-10 md:px-20 w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex items-center justify-between gap-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* รูปภาพผลงาน */}
            <div className="w-[420px] h-[260px] shrink-0 rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-800">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* รายละเอียดผลงาน */}
            <div className="flex flex-col items-center gap-4 max-w-[430px]">
              <span 
                className="text-white text-2xl font-bold font-['Lora',serif]"
                style={{ color: '#ffffff' }}
              >
                {project.title}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed text-left">
                {description}
              </p>

              {/* ปุ่ม View และ Git code */}
              <div className="flex items-center justify-center gap-8 pt-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white border border-white rounded-full px-8 py-1.5 hover:bg-white hover:text-black transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  View
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  <FaGithub className="text-3xl" />
                  <span>Git code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
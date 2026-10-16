import NavBar from "../components/Navbar";
import aboutShape from "../assets/img1.png";

export default function About() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between">
      {/* ส่วนของ NavBar */}
      <NavBar pname="a" colorLinkNavbar="#FFF714" />

      {/* ส่วนเนื้อหาหลักกลางหน้าจอ */}
      <main className="w-full max-w-6xl mx-auto px-10 pt-12 pb-8 flex-1 flex flex-col justify-center">
        {/* ส่วนของ About Section */}
        <div className="flex flex-row items-start justify-between gap-12 w-full">
          {/* รายละเอียดด้านซ้าย */}
          <div className="flex flex-col items-center gap-10 w-1/2">
            <h1 
              className="text-white text-5xl font-bold font-['Lora',serif]"
              style={{ color: '#ffffff' }}
            >
              About Me
            </h1>

            {/* รูปกราฟิก */}
            <div className="w-[200px] h-[200px]">
              <img
                src={aboutShape}
                alt="About shape"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* รายละเอียดด้านขวา */}
          <div className="flex flex-col gap-4 w-1/2 max-w-[480px] text-left pt-2">
            <h2 
              className="text-white text-lg font-bold font-['Lora',serif] leading-snug"
              style={{ color: '#ffffff' }}
            >
              Hi, I’m Panupong_o. A passionate Full Stack Web Developer based in Thailand.
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore
              unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum,
              ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi
              repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
              voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt
              asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio
              asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
            </p>
          </div>
        </div>

        {/* ปุ่ม Download CV */}
        <div className="flex justify-center pt-12 pb-8">
          <a
            href="/cv.pdf"
            download
            className="text-white text-lg border border-white rounded-full px-8 py-2.5 hover:bg-white hover:text-black transition-all"
            style={{ color: '#ffffff' }}
          >
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}
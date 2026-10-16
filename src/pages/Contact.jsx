import NavBar from "../components/Navbar";

import iconEmail from "../assets/c1.png";
import iconLocation from "../assets/c2.png";
import iconLinkedin from "../assets/c3.png";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col justify-between">
      {/* ส่วนของ NavBar ด้านบน */}
      <NavBar pname="c" colorLinkNavbar="#FF0000" />

      {/* ส่วนเนื้อหาหลักกลางหน้าจอ */}
      <main className="w-full max-w-5xl mx-auto px-6 flex-1 flex flex-col items-center justify-center pt-8 pb-16">
        {/* ส่วนของหัวข้อ */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 
            className="text-white text-5xl md:text-6xl font-serif font-bold tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Let’s talk
          </h1>
          <p 
            className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl"
            style={{ color: '#ffffff' }}
          >
            Don't be a stranger! Say hello and let's collaborate
          </p>
        </div>

        {/* ส่วนของข้อมูลติดต่อ 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full mt-20 items-end">
          {/* อีเมล */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-16 flex items-center justify-center">
              <img
                src={iconEmail}
                alt="Email"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span 
              className="text-gray-200 text-base md:text-lg font-medium"
              style={{ color: '#ffffff' }}
            >
              s6619410018@sau.ac.th
            </span>
          </div>

          {/* ที่อยู่ */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-16 flex items-center justify-center">
              <img
                src={iconLocation}
                alt="Location"
                className="h-16 w-auto object-contain"
              />
            </div>
            <span 
              className="text-gray-200 text-base md:text-lg font-medium"
              style={{ color: '#ffffff' }}
            >
              Thailand, Bangkok
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-16 flex items-center justify-center">
              <img
                src={iconLinkedin}
                alt="LinkedIn"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span 
              className="text-gray-200 text-base md:text-lg font-medium"
              style={{ color: '#ffffff' }}
            >
              Panupong_o
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
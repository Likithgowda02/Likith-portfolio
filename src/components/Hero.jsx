import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-10 pt-16" >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#A3B18A] text-xl">
            Hello, I'm
          </p>

          <h1
            className="mt-5 text-white font-black leading-none"
            style={{
              fontFamily: "Impact, Arial Narrow, sans-serif",
              fontSize: "clamp(70px, 10vw, 150px)",
              letterSpacing: "-2px"
            }}
          >
            LIKITH
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: "2px #8b8f83"
              }}
            >
              GOWDA
            </span>
          </h1>

          <h2 className="text-3xl text-gray-300 mt-8">
            Java Full Stack Developer
          </h2>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            Passionate about building scalable web applications using Java,
            Spring Boot, React, JavaScript and SQL.
          </p>

          <div className="mt-10 flex gap-4">
  <a
    href="/resume.pdf"
    download
    className="px-8 py-3 rounded-full border border-[#A3B18A] bg-[#A3B18A] text-[#080b08] font-medium tracking-wide hover:bg-transparent hover:text-[#A3B18A] transition-all duration-300"
  >
    Resume ↗
  </a>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="px-8 py-3 rounded-full border border-white/30 text-white font-medium tracking-wide hover:border-[#A3B18A] hover:text-[#A3B18A] transition-all duration-300 cursor-pointer"
  >
    Contact Me ↗
  </Link>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-[400px] rounded-3xl border border-[#7F8F6A] shadow-[0_0_40px_rgba(127,143,106,0.2)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A3B18A] text-lg font-semibold tracking-wider">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-3 text-white">
            Passionate Java Full Stack Developer
          </h2>

          <div className="grid md:grid-cols-2 gap-14 mt-10">

            <div>
              <p className="text-gray-300 leading-8 text-lg">
                I recently completed my Bachelor of Engineering in
                Computer Science and Design. I enjoy developing modern,
                scalable web applications and turning ideas into
                practical solutions.
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                I work with Java, Spring Boot, React, JavaScript, SQL
                and Docker, with a strong interest in backend development,
                REST APIs and full stack application development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-black/35 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#7F8F6A] transition-all duration-300">
                <h3 className="text-[#A3B18A] text-lg font-bold">
                  🎓 Education
                </h3>

                <p className="text-gray-300 mt-3">
                  B.E. Computer Science & Design
                </p>
              </div>

              <div className="bg-black/35 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#7F8F6A] transition-all duration-300">
                <h3 className="text-[#A3B18A] text-lg font-bold">
                  💼 Internship
                </h3>

                <p className="text-gray-300 mt-3">
                  JSpiders Java Full Stack
                </p>
              </div>

              <div className="bg-black/35 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#7F8F6A] transition-all duration-300">
                <h3 className="text-[#A3B18A] text-lg font-bold">
                  🚀 Skills
                </h3>

                <p className="text-gray-300 mt-3">
                  Spring Boot, React, SQL
                </p>
              </div>

              <div className="bg-black/35 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#7F8F6A] transition-all duration-300">
                <h3 className="text-[#A3B18A] text-lg font-bold">
                  📍 Location
                </h3>

                <p className="text-gray-300 mt-3">
                  Bengaluru, India
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
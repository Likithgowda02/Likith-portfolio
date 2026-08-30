import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-violet-400">
            Education
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Academic Journey
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-3xl border border-white/10 p-10"
        >

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-3xl">
              <FaGraduationCap />
            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Bachelor of Engineering
              </h3>

              <p className="text-violet-400">
                Computer Science & Design
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h4 className="font-semibold text-gray-300">
                College
              </h4>

              <p className="text-gray-400">
                Atria Institute of Technology
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-300">
                Duration
              </h4>

              <p className="text-gray-400">
                2022 - 2026
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-300">
                Degree
              </h4>

              <p className="text-gray-400">
                B.E
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-300">
                Location
              </h4>

              <p className="text-gray-400">
                Bengaluru, Karnataka
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Engineering",
    company: "Atria Institute of Technology",
    year: "2022 - 2026",
    description:
      "Completed B.E. in Computer Science and Design with a strong foundation in software development and problem-solving.",
  },

  {
    icon: <FaBriefcase />,
    title: "Java Full Stack Intern",
    company: "JSpiders, Bengaluru",
    year: "2026",
    description:
      "Worked on Java, Spring Boot, React, REST APIs, JDBC and MySQL while developing full-stack web applications.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Personal Projects",
    company: "Self Learning",
    year: "Present",
    description:
      "Building Java Full Stack applications and AI/ML projects while continuously improving development skills.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-violet-400">
            Journey
          </p>

          <h2 className="text-6xl font-black mt-4">
            Experience
          </h2>

        </div>

        <div className="relative border-l-2 border-violet-500 ml-5">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >

              <div className="
                absolute
                -left-[58px]
                w-12
                h-12
                rounded-full
                bg-violet-600
                flex
                items-center
                justify-center
                text-white
                text-xl
                shadow-lg
              ">
                {item.icon}
              </div>

              <div
                className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-violet-500
                hover:shadow-[0_0_25px_rgba(139,92,246,.35)]
                transition-all
                "
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-violet-400 mt-2">
                  {item.company}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {item.year}
                </p>

                <p className="text-gray-400 mt-6 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
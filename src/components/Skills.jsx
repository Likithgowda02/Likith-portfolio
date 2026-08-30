import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    icon: "⚙",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring MVC", icon: "⚙" },
      { name: "REST APIs", icon: "🌐" },
      { name: "JPA / Hibernate", icon: "🔗" },
      { name: "JDBC", icon: "🔌" },
      { name: "Maven", icon: "📦" },
    ],
  },

  {
    title: "Database",
    icon: "🗄",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: "🗃" },
    ],
  },

  {
    title: "Tools & DevOps",
    icon: "🛠",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: "💻" },
      { name: "IntelliJ IDEA", icon: "💻" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-violet-400 uppercase tracking-[5px]">
            What I Use
          </p>

          <h2 className="text-6xl font-black mt-4">
            Tech Stack
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I enjoy building scalable and modern applications using
            these technologies and tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-violet-500 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">
                  {category.icon}
                </span>

                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="flex items-center gap-3 bg-[#0d1027] border border-violet-500/20 rounded-full px-5 py-3 cursor-pointer hover:border-violet-500"
                  >
                    <span className="text-xl text-violet-400">
                      {skill.icon}
                    </span>

                    <span>
                      {skill.name}
                    </span>
                  </motion.div>

                ))}

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
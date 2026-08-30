import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
 {
  title: "Nyaya Setu",
  description:
    "Developed a legal assistance platform that connects users with lawyers and provides a simple interface for accessing legal services and information.",

  image: "nyayasetu.png",

  tech: ["React", "Java", "Spring Boot", "MySQL", "REST API"],

  github: "https://github.com/Likithgowda02/NyayaSetu-.git",

},

  {
    title: "Emotion Based Music Recommendation System",
    description:
      "Built a real-time emotion recognition system that detects facial expressions and recommends music based on the user's current mood.",

    image: "emotion.png",

    tech: ["Python", "OpenCV", "FER", "Spotify API"],

    github: "https://github.com/Likithgowda02/Emotion-Based-Music-Recommendation-System.git",
    
  },

  {
    title: "E-Banking System",
    description:
      "A secure banking web application developed using Spring Boot featuring authentication, account management, fund transfer and transaction history.",

    image: "banking.png",

    tech: ["Java", "Spring Boot", "React", "MySQL"],

    github: "https://github.com/Likithgowda02/E-Bankingg.git",
   
  },

  {
    title: "GST Fraud Detection",
    description:
      "Machine Learning application that detects fraudulent GST invoices using predictive analytics and classification algorithms.",

    image: "gst.png",

    tech: ["Python", "Machine Learning", "Pandas", "Scikit Learn"],

    github: "https://github.com/Likithgowda02/GST-Fraud-Detection.git",
   
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-violet-400">
            Portfolio
          </p>

          <h2 className="text-6xl font-black mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5">
            Some of my recent work.
          </p>

        </div>

        <div className="space-y-24">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <motion.img
                whileHover={{ scale: 1.03 }}
                src={project.image}
                alt={project.title}
                className="rounded-3xl border border-white/10 shadow-xl"
              />

              <div>

                <h3 className="text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mt-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-violet-500/10
                      border
                      border-violet-500/20
                      hover:bg-violet-600
                      transition
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
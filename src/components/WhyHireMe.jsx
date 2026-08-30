import { motion } from "framer-motion";
import {
  FaJava,
  FaRocket,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaJava />,
    title: "Java Full Stack",
    desc: "Experience building scalable applications using Java, Spring Boot, React and MySQL.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solver",
    desc: "Love solving real-world challenges through clean and efficient code.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Modern Development",
    desc: "Responsive UI, REST APIs, databases and clean architecture.",
  },
  {
    icon: <FaRocket />,
    title: "Quick Learner",
    desc: "Always learning new technologies and adapting to modern development trends.",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-violet-400">
            Why Choose Me
          </p>

          <h2 className="text-5xl font-black mt-4">
            What Makes Me Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all"
            >
              <div className="text-5xl text-violet-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
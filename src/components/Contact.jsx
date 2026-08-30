import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          I'm always open to discussing new opportunities, projects, or collaborations.
        </p>

        <div className="space-y-5 text-lg">
          <div className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-violet-500" />
            <span>iamlikithgowda@gmail.com</span>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaPhone className="text-violet-500" />
            <span>+91 6364663828</span>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt className="text-violet-500" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-10 text-3xl">
          <a
            href="https://github.com/Likithgowda02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/likith-gowda-84a425363/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
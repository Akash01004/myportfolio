import useScrollAnimation from '../useScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className={`py-20 px-6 bg-primary transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-accent mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          I’m always excited to connect, collaborate, and work on innovative projects.
          Whether you have an opportunity, a question, or just want to say hi — drop me a message!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors duration-300 mb-12"
        >
          Email Me
        </a>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/akash-v-177388336/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/Akash01004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/_black_ferra_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

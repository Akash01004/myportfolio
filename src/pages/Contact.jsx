import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I’m always excited to connect, collaborate, and work on innovative projects.
        Whether you have an opportunity, a question, or just want to say hi — drop me a message!
      </p>
      <p>Feel free to reach out via email or connect on my social profiles below:</p>
      <p>Email me: <a href="mailto:akashv200104@gmail.com">akashv200104@gmail.com</a></p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/akash-v-177388336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Akash01004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/_black_ferra_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </section>
  );
}

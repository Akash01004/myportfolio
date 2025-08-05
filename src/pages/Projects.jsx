import useScrollAnimation from '../useScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Concert Booking App',
    description: 'A full-stack application for booking concert tickets, built with Django and React.',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Akash01004',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website to showcase my work and skills.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Akash01004',
  },
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich e-commerce platform with a custom CMS and payment gateway integration.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Akash01004',
  },
];

export default function Projects() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className={`py-20 px-6 bg-primary transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-secondary rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-primary text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

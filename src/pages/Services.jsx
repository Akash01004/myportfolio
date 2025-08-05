import useScrollAnimation from '../useScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faRocket } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faCode,
    title: 'Full Stack Development',
    description: 'I build robust, maintainable web applications using React, Django, and modern technologies.',
  },
  {
    icon: faPalette,
    title: 'Web Design',
    description: 'I design clean, modern websites that are both beautiful and user-friendly.',
  },
  {
    icon: faRocket,
    title: 'Performance Optimization',
    description: 'I optimize websites for speed and performance, ensuring a great user experience.',
  },
];

export default function Services() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className={`py-20 px-6 bg-background transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          What I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.title} className="bg-primary p-8 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <FontAwesomeIcon icon={service.icon} className="text-accent text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-2">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

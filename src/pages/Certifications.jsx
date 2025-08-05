import useScrollAnimation from '../useScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const certifications = [
  {
    title: 'Full Stack Web Developer (Python)',
    issuer: 'Mashup Stack',
    description: 'An intensive program covering front-end and back-end development with Python, Django, React, and RESTful APIs.',
    url: '#',
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    description: 'Official Google certification covering core principles of digital marketing including SEO, SEM, and content strategy.',
    url: '#',
  },
];

export default function Certifications() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="certifications" ref={ref} className={`py-20 px-6 bg-background transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          My Certifications
        </h2>
        <div className="space-y-8">
          {certifications.map(cert => (
            <div key={cert.title} className="bg-primary p-6 rounded-lg shadow-lg flex items-start space-x-6">
              <FontAwesomeIcon icon={faAward} className="text-accent text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-bold text-text-primary">{cert.title}</h3>
                <p className="text-text-secondary font-semibold mb-2">{cert.issuer}</p>
                <p className="text-text-secondary mb-4">{cert.description}</p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

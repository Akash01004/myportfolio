import useScrollAnimation from '../useScrollAnimation';

export default function About() {
  const { ref, inView } = useScrollAnimation();

  const skills = [
    'React',
    'JavaScript',
    'Django',
    'Python',
    'Tailwind CSS',
    'Node.js',
    'Figma',
    'REST APIs',
  ];

  return (
    <section id="about" ref={ref} className={`py-20 px-6 bg-primary transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-text-secondary space-y-6">
            <p>
              I’m a Full-Stack Developer who loves building modern, maintainable,
              and user-friendly web apps. I enjoy turning complex problems into
              simple, beautiful solutions.
            </p>
            <p>
              My main tools are React, JavaScript, Django, and Python, with a
              passion for design and performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-secondary text-text-primary text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import useScrollAnimation from '../useScrollAnimation';

export default function Home() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="home" ref={ref} className={`min-h-screen flex flex-col justify-center items-center text-center p-6 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8">
          I craft clean, responsive web applications. Let’s build something amazing together!
        </p>
        <a
          href="#projects"
          className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

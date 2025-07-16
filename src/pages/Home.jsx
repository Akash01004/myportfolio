import React from 'react';
import coderImage from '../img/coder.jpg';

export default function Home() {
  return (
    <section id="home" className="home">
      <img src={coderImage} alt="Akash V" className="profile-pic" />
      <h1>Hi, I'm Akash V 👋</h1>
      <p>I craft clean, responsive web applications using React and Django. Let’s build something amazing together!</p>
    </section>
  );
}

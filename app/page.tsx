'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <Image
          src="/yurr.png"
          alt="Natasha Eagles"
          width={160}
          height={160}
          className="avatar"
          priority
        />
        <h1>Natasha Eagles</h1>
        <p>
          Full Stack Developer | Web Designer | Creative Problem Solver
        </p>
      </section>

      <section style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <h2>Welcome</h2>
        <p>
          Welcome to my portfolio! I’m Natasha Eagles, passionate about building
          beautiful, performant, and accessible web applications. With expertise
          in React, Next.js, and modern JavaScript, I bring ideas to life on the web.
        </p>
      </section>

      <section style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <h2>Core Skills</h2>
        <ul>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Next.js, Redux</li>
          <li>HTML5, CSS3, Sass, CSS Modules</li>
          <li>Node.js, Express, REST APIs</li>
          <li>Git, GitHub, CI/CD pipelines</li>
          <li>Responsive & Accessible Design</li>
        </ul>
      </section>
    </>
  );
}

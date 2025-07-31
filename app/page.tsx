'use client';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: 'auto' }}>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
       <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
  <Image
    src="/natasha.jpeg"
    alt="Natasha Eagles"
    fill
    style={{ objectFit: 'cover', borderRadius: '50%' }} // optional: rounded image
    priority
  />
</div>
        <h1>Natasha Eagles</h1>
        <p>Full Stack Developer | Web Designer | Creative Problem Solver</p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        style={{ marginBottom: '3rem' }}
      >
        <h2>Welcome</h2>
        <p>
          I’m Natasha, passionate about building beautiful, performant, and accessible web applications.
          With expertise in React, Next.js, and modern JavaScript, I bring creativity and precision to every project.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        <h2>Core Skills</h2>
        <ul>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Next.js, Redux</li>
          <li>HTML5, CSS3, Sass, CSS Modules</li>
          <li>Node.js, Express, REST APIs</li>
          <li>Git, GitHub, CI/CD pipelines</li>
          <li>Responsive & Accessible Design</li>
        </ul>
      </motion.section>
      
      {/* Add your new image here */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >

      </motion.section>
    </main>
  );
}


'use client';

import React, { useState } from 'react';

const images = [
  { src: '/screenshot 1.png', alt: 'Natasha Eagles Portfolio' },
  { src: '/screenshot 2.png', alt: 'Pwint Mosaic App' },
  { src: '/screenshot 3.png', alt: 'Mineveil Minecraft Forum' },
];

export default function ProjectPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section className="project-page container">
      <h1 className="project-title">My Projects</h1>
      <p className="project-description">View my work!</p>

      <div className="carousel">
        <button onClick={prevImage} aria-label="Previous image" className="carousel-btn">
          ‹
        </button>
        <div className="carousel-image-wrapper">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
        </div>
        <button onClick={nextImage} aria-label="Next image" className="carousel-btn">
          ›
        </button>
      </div>

      <h2>Tech Stack</h2>
      <ul className="tech-stack">
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>CSS Modules</li>
        <li>Vercel</li>
      </ul>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/natasha-eagles-a76916304/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/eagl0037"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          GitHub 
        </a>
      </div>

      <style jsx>{`
        .project-page {
          padding: 2rem 0;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .project-title {
          font-size: 2.5rem;
          color: #5148e6;
          margin-bottom: 0.5rem;
        }
        .project-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          color: #444;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .carousel-image-wrapper {
          max-width: 400px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          background-color: white;
        }
        .carousel-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .carousel-btn {
          background-color: #6c63ff;
          border: none;
          color: white;
          font-size: 2rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 12px rgba(108, 99, 255, 0.5);
        }
        .carousel-btn:hover {
          background-color: #5148e6;
        }
        h2 {
          color: #3a3a7a;
          margin-bottom: 1rem;
        }
        .tech-stack {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-left: 0;
          justify-content: center;
        }
        .tech-stack li {
          background: #6c63ff;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 2px 6px rgba(108, 99, 255, 0.4);
          user-select: none;
        }
        .links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn {
          background-color: #6c63ff;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 700;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 12px rgba(108, 99, 255, 0.5);
        }
        .btn:hover {
          background-color: #5148e6;
        }
        .btn-secondary {
          background-color: #f3f3f3;
          color: #5148e6;
          box-shadow: 0 4px 12px rgba(81, 72, 230, 0.3);
        }
        .btn-secondary:hover {
          background-color: #e0e0ff;
        }

        @media (max-width: 768px) {
          .carousel {
            gap: 0.5rem;
          }
          .carousel-btn {
            font-size: 1.5rem;
            padding: 0.25rem 0.75rem;
          }
          .carousel-image-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

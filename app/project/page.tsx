'use client';

import React from 'react';

export default function ProjectPage() {
  return (
    <section className="project-page container">
      <h1 className="project-title">My Projects</h1>
      <p className="project-description">
        View my work!
      </p>

      <div className="images-gallery">
  <img src="/screenshot 1.png" alt="Natasha Eagles Portfolio" />
  <img src="/screenshot 2.png" alt="Pwint Mosaic App" />
  <img src="/screenshot 3.png" alt="Mineveil Minecraft Forum" />
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
        <a href="https://live-demo-url.com" target="_blank" rel="noopener noreferrer" className="btn">
          Live Demo
        </a>
        <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub Repo
        </a>
      </div>

      <style jsx>{`
        .project-page {
          padding: 2rem 0;
          max-width: 900px;
          margin: 0 auto;
        }
        .project-title {
          font-size: 2.5rem;
          color: #5148e6;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .project-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          color: #444;
          line-height: 1.6;
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .images-gallery {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          margin-bottom: 2rem;
          justify-content: center;
        }
        .images-gallery img {
          border-radius: 8px;
          flex: 0 0 auto;
          max-width: 400px;
          height: auto;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .images-gallery img:hover {
          transform: scale(1.05);
        }
        h2 {
          color: #3a3a7a;
          margin-bottom: 1rem;
          text-align: center;
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
          .images-gallery {
            flex-direction: column;
            gap: 1.5rem;
          }
          .images-gallery img {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

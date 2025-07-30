'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you could send data to an API or service
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thank you for your message! I will get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#663399', color: 'white', border: 'none', borderRadius: '4px' }}>
        Send Message
      </button>
    </form>
  );
}
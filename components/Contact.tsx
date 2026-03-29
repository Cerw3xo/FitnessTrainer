"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import styles from "./Contact.module.scss";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className="section-title">Contact</h2>
            <p className={styles.copy}>Tell me your goal and I will get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              required
            />

            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

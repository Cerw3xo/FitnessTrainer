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
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Kontakt</p>
            <h2 className={styles.title}>Naplanujme tvoj prvy trening.</h2>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Meno</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              required
            />

            <label htmlFor="message">Sprava</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              autoComplete="off"
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              required
            />

            <Button type="submit">Odoslat spravu</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

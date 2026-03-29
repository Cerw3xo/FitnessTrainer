import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Martin K.",
    quote: "I dropped 10kg, built visible muscle, and finally stayed consistent for over six months.",
  },
  {
    name: "Sarah P.",
    quote: "The coaching is clear, practical, and built for real life. I feel stronger every week.",
  },
  {
    name: "David R.",
    quote: "I came for fat loss and got way more confidence, structure, and energy at work.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className={styles.list}>
          {testimonials.map((item) => (
            <figure key={item.name} className={styles.item}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

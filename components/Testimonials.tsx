import Image from "next/image";
import Button from "./Button";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    title: "Premena, ktora ostala dlhodobo",
    quote: "Martin chcel schudnut, spevnit postavu a nastavit si rutinu, ktoru udrzi aj popri praci.",
    name: "Martin K.",
    image: "/service.webp",
  },
  {
    title: "Jasny plan bez zbytocneho chaosu",
    quote: "Petra potrebovala vedenie na dialku, pravidelny feedback a system, ktory jej sadne do bezneho tyzdna.",
    name: "Petra S.",
    image: "/contact.webp",
  },
  {
    title: "Viac sily, discipliny aj energie",
    quote: "David prisiel kvoli forme, ale spolupraca mu pomohla aj s disciplínou, vykonom a dennym nastavenim.",
    name: "David R.",
    image: "/heroSection.webp",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>Client stories</p>
            <h2 className={styles.title}>Vysledky hovoria za vsetko.</h2>
          </div>
          <Button href="#contact">Rezervovat si konzultaciu</Button>
        </div>

        <div className={styles.list}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.item}>
              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <p className={styles.cardEyebrow}>{item.name}</p>
                <h3>{item.title}</h3>
                <p>{item.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import styles from "./EventDetailPage.module.css";

interface Props {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventDetailPage({
  image,
  title,
  date,
  location,
  description,
}: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className={styles.image}
        />
        <div>
          <h3 className={styles.text}>{date}</h3>
          <h3 className={styles.text}>{location}</h3>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  );
}

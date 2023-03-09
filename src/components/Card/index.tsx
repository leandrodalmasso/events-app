import Image from "next/image";
import Link from "next/link";

import { Event } from "../../../types";

import styles from "./Card.module.css";

export default function Card({ id, image, title, date, location }: Event) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className={styles.img}
      />
      <div className={styles.text}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.info}>{date}</h3>
          <h3 className={styles.info}>{location}</h3>
        </div>
        <Link href={`/events/${id}`} className={styles.action}>
          Explore
        </Link>
      </div>
    </div>
  );
}

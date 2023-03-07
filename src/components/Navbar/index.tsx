import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>Events App</h1>
      </Link>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

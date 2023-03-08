import Head from "next/head";
import { GetStaticProps } from "next";

import Card from "@/components/Card";

import styles from "../styles/Lander.module.css";

import { getFeaturedEvents } from "../../data";

import { Event } from "../../types";

interface Props {
  featuredEvents: Event[];
}

export default function Home({ featuredEvents }: Props) {
  return (
    <>
      <Head>
        <title>Events App | Home</title>
      </Head>
      <section className={styles.section}>
        {featuredEvents.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = getFeaturedEvents();

  return {
    props: { featuredEvents },
  };
};

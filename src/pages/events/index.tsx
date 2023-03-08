import Head from "next/head";
import { GetStaticProps } from "next";

import Card from "@/components/Card";

import styles from "../../styles/Lander.module.css";

import { getAllEvents } from "../../../data";

import { Event } from "../../../types";

interface Props {
  allEvents: Event[];
}

export default function EventsIndex({ allEvents }: Props) {
  return (
    <>
      <Head>
        <title>Events App | Events</title>
      </Head>
      <section className={styles.section}>
        {allEvents.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = getAllEvents();

  return {
    props: { allEvents },
  };
};

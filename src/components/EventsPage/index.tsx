import Head from "next/head";
import clsx from "clsx";

import Filters from "../Filters";
import Card from "../Card";

import styles from "./EventsPage.module.css";

import { Event } from "../../../types";

interface Props {
  title: string;
  events: Event[];
  showFilters?: boolean;
  isFiltered?: boolean;
}

export function EventsPage({ title, events, showFilters, isFiltered }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section
        className={clsx(styles.section, !showFilters && styles.verticalCenter)}
      >
        {showFilters && <Filters isFiltered={isFiltered} />}
        {!!events.length ? (
          events.map((event) => <Card key={event.id} {...event} />)
        ) : (
          <>
            <h2 className={styles.msg}>
              Sorry, no events were found. Please select a different date.
            </h2>
            <h2 className={styles.msg}>Thanks!!</h2>
          </>
        )}
      </section>
    </>
  );
}

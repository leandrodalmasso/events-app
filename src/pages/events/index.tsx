import { GetStaticProps } from "next";

import EventsPage from "@/components/EventsPage";

import { getAllEvents } from "../../../data";

import { Event } from "../../../types";

interface Props {
  allEvents: Event[];
}

export default function EventsIndex({ allEvents }: Props) {
  return (
    <EventsPage title="Events App | Events" events={allEvents} showFilters />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = getAllEvents();

  return {
    props: { allEvents },
  };
};

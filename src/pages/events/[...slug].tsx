import { GetStaticProps, GetStaticPaths } from "next";

import { EventsPage } from "@/components/EventsPage";

import { getFilteredEvents } from "../../../data";

import { Event } from "../../../types";

interface Props {
  filteredEvents: Event[];
}

export default function FilteredEvents({ filteredEvents }: Props) {
  return (
    <EventsPage
      title="Events App | Events"
      events={filteredEvents}
      showFilters
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const [year, month] = context?.params?.slug as string[];

  const filteredEvents = getFilteredEvents({
    year: parseInt(year),
    month: parseInt(month),
  });

  return {
    props: { filteredEvents },
  };
};

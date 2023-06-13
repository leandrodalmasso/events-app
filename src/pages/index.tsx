import { GetStaticProps } from "next";

import EventsPage from "@/components/EventsPage";

import { getFeaturedEvents } from "../../data";

import { Event } from "../../types";

interface Props {
  featuredEvents: Event[];
}

export default function Home({ featuredEvents }: Props) {
  return <EventsPage title="Events App | Home" events={featuredEvents} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = getFeaturedEvents();

  return {
    props: { featuredEvents },
    // revalidate: 3600,
  };
};

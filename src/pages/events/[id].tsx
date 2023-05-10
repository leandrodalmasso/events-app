import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import EventDetailPage from "@/components/EventDetailPage";

import { Event } from "../../../types";

import { getEventById, getAllEvents } from "../../../data";

export default function EventDetail({
  image,
  title,
  date,
  location,
  description,
}: Event) {
  return (
    <>
      <Head>
        <title>Events App | Events</title>
      </Head>
      <EventDetailPage
        image={image}
        title={title}
        date={date}
        location={location}
        description={description}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = getAllEvents();
  const paths = allEvents.map((event) => ({
    params: {
      id: event.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params?.id || "";
  const event = getEventById(eventId as string);

  return {
    props: { ...event },
  };
};

import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import EventDetailPage from "@/components/EventDetailPage";

import { Event } from "../../../types";

import { getEventById } from "../../../data";

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
  return {
    paths: ["/events/e1", "/events/e2", "/events/e3"],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params?.id || "";
  const event = getEventById(eventId as string);
  const props = !!event ? { ...event } : {};

  return {
    props,
  };
};

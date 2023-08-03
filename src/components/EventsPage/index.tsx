import React, { useState, useContext } from "react";
import Head from "next/head";
import clsx from "clsx";

import NotificationContext from "../../../store/notification-context";

import Filters from "../Filters";
import Card from "../Card";
import InputForm from "../InputForm";

import styles from "./EventsPage.module.css";

import { Event } from "../../../types";

interface Props {
  title: string;
  events: Event[];
  showFilters?: boolean;
  isFiltered?: boolean;
}

export default function EventsPage({
  title,
  events,
  showFilters,
  isFiltered,
}: Props) {
  const notificationCtx = useContext(NotificationContext);
  const [email, setEmail] = useState<string>("");

  const handleRegistration = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let error = false;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          notificationCtx.showNotification({
            message: "You're registered, thanks!",
            color: "green",
          });
        } else {
          error = true;
        }

        return res.json();
      })
      .then((data) => {
        if (error) {
          notificationCtx.showNotification({
            message: data.message,
            color: "red",
          });
        }
      });
  };

  const handleInputChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("e.target: ", e.target);

    const target = e.target as typeof e.target & {
      value: string;
    };

    setEmail(target.value);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section
        className={clsx(styles.section, !showFilters && styles.verticalCenter)}
      >
        <InputForm
          action={handleRegistration}
          actionText="Register"
          text="Sign up to stay updated!"
          inputValue={email}
          onInputChange={handleInputChange}
        />
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

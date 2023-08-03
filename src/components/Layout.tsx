import React, { useContext } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Notification from "./Notification";
import NotificationContext from "../../store/notification-context";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const notificationCtx = useContext(NotificationContext);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {notificationCtx.notification && (
        <Notification
          color={notificationCtx.notification.color}
          message={notificationCtx.notification.message}
        />
      )}
    </>
  );
}

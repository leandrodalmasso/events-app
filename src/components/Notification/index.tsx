import React, { useContext, useEffect } from "react";
import clsx from "clsx";

import NotificationContext from "../../../store/notification-context";

import styles from "./Notification.module.css";

import { NotificationData } from "../../../types";

export default function Notification({ color, message }: NotificationData) {
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (notificationCtx.notification)
      setTimeout(notificationCtx.hideNotification, 2000);
  }, [notificationCtx]);

  return (
    <div
      className={clsx(
        styles.notification,
        color === "green" && styles.notificationGreen,
        color === "red" && styles.notificationRed,
        color === "blue" && styles.notificationBlue
      )}
    >
      {message}
    </div>
  );
}

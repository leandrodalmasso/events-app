import React, { createContext, useState } from "react";

import { NotificationData, NotificationContextType } from "../types";

const NotificationContext = createContext<NotificationContextType>({
  notification: null, // { message, color }
  showNotification: function () {},
  hideNotification: function () {},
});

interface Props {
  children: React.ReactNode;
}

export function NotificationContextProvider({ children }: Props) {
  const [activeNotification, setActiveNorification] =
    useState<NotificationData | null>(null);

  const showNotification = (notificationData: NotificationData) => {
    setActiveNorification(notificationData);
  };

  const hideNotification = () => {
    setActiveNorification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

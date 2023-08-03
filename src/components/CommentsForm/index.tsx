import React, { useRef, useContext } from "react";

import NotificationContext from "../../../store/notification-context";

import styles from "./CommentsForm.module.css";
import commonStyles from "../../styles/common.module.css";

interface Props {
  eventId: string;
  onCommentAdded: () => void;
}

export default function CommentsForm({ eventId, onCommentAdded }: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const notificationCtx = useContext(NotificationContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let error = false;

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef?.current?.value,
        author: authorRef?.current?.value,
        comment: commentRef?.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          notificationCtx.showNotification({
            message: "Your comment was saved, thanks!",
            color: "green",
          });
        } else {
          error = true;
        }

        return res.json();
      })
      .then((data) => {
        if (!error) {
          onCommentAdded();
        } else {
          notificationCtx.showNotification({
            message: data.message,
            color: "red",
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Leave us a comment</h2>
      <span>
        <span className={styles.row}>
          <div className={styles.element}>
            <label htmlFor="email" className={styles.label}>
              Your email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={commonStyles.input}
              ref={emailRef}
            />
          </div>

          <div className={styles.element}>
            <label htmlFor="author" className={styles.label}>
              Your name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className={commonStyles.input}
              ref={authorRef}
            />
          </div>
        </span>

        <div className={styles.element}>
          <label htmlFor="comment" className={styles.label}>
            Your comment
          </label>
          <textarea
            id="comment"
            name="comment"
            className={`${commonStyles.input} ${styles.textarea}`}
            ref={commentRef}
          />
        </div>

        <button
          type="submit"
          className={`${commonStyles.action} ${styles.button}`}
        >
          Post
        </button>
      </span>
    </form>
  );
}

import React, { useRef } from "react";

import styles from "./CommentsForm.module.css";
import commonStyles from "../../styles/common.module.css";

interface Props {
  eventId: string;
}

export default function CommentsForm({ eventId }: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef?.current?.value,
        name: nameRef?.current?.value,
        comment: commentRef?.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Leave us a comment</h2>
      <span>
        <span className={styles.row}>
          <div className={styles.element}>
            <label htmlFor="name" className={styles.label}>
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
            <label htmlFor="name" className={styles.label}>
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={commonStyles.input}
              ref={nameRef}
            />
          </div>
        </span>

        <div className={styles.element}>
          <label htmlFor="name" className={styles.label}>
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

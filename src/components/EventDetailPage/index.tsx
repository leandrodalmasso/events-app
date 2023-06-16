import { useEffect, useState } from "react";
import Image from "next/image";

import CommentsForm from "../CommentsForm";
import CommentsList from "../CommentsList";

import styles from "./EventDetailPage.module.css";

import { Comment } from "../../../types";

interface Props {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  eventId: string;
}

export default function EventDetailPage({
  image,
  title,
  date,
  location,
  description,
  eventId,
}: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then(({ comments }) => setComments(comments));
  }, [eventId]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className={styles.image}
        />
        <div>
          <h3 className={styles.text}>{date}</h3>
          <h3 className={styles.text}>{location}</h3>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <CommentsForm eventId={eventId} />
      <CommentsList comments={comments} />
    </section>
  );
}

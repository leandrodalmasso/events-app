import styles from "./Comment.module.css";

interface Props {
  text: string;
  author: string;
}

export default function Comment({ text, author }: Props) {
  return (
    <div className={styles.comment}>
      <h2>{author}</h2>
      <p>{text}</p>
    </div>
  );
}

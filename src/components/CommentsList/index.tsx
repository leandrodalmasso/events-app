import Comment from "./Comment";

import styles from "./CommentList.module.css";

interface Comment {
  id: number;
  text: string;
  author: string;
  mail: string;
}

interface Props {
  comments: Comment[];
}

export default function CommentsList({ comments }: Props) {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} author={comment.author} />
      ))}
    </div>
  );
}

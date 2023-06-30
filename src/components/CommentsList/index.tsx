import Comment from "./Comment";

import styles from "./CommentList.module.css";

import { Comment as CommentType } from "../../../types";

interface Props {
  comments: CommentType[];
}

export default function CommentsList({ comments }: Props) {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <Comment
          key={comment._id.toString()}
          text={comment.comment}
          author={comment.author}
        />
      ))}
    </div>
  );
}

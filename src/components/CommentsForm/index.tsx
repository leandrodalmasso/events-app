import styles from "./CommentsForm.module.css";
import commonStyles from "../../styles/common.module.css";

interface Props {
  action: (e: React.SyntheticEvent) => void;
  actionText: string;
  text: string;
}

export default function CommentsForm({ action, actionText, text }: Props) {
  return (
    <form onSubmit={action} className={styles.form}>
      <h2 className={styles.title}>{text}</h2>
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
            />
          </div>
        </span>

        <div className={styles.element}>
          <label htmlFor="name" className={styles.label}>
            Your comment
          </label>
          <textarea
            id="name"
            name="name"
            className={`${commonStyles.input} ${styles.textarea}`}
          />
        </div>

        <button
          type="submit"
          className={`${commonStyles.action} ${styles.button}`}
        >
          {actionText}
        </button>
      </span>
    </form>
  );
}

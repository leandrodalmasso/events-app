import styles from "./InputForm.module.css";
import commonStyles from "../../styles/common.module.css";

interface Props {
  action: (e: React.SyntheticEvent) => void;
  actionText: string;
  text: string;
}

export default function InputForm({ action, actionText, text }: Props) {
  return (
    <form onSubmit={action} className={styles.form}>
      <h2 className={styles.title}>{text}</h2>
      <span>
        <input type="text" className={commonStyles.input} />
        <button type="submit" className={commonStyles.action}>
          {actionText}
        </button>
      </span>
    </form>
  );
}

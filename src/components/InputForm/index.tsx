import React from "react";

import styles from "./InputForm.module.css";
import commonStyles from "../../styles/common.module.css";

interface Props {
  action: (e: React.SyntheticEvent) => void;
  actionText: string;
  text: string;
  inputValue: string;
  onInputChange: (e: React.SyntheticEvent) => void;
}

export default function InputForm({
  action,
  actionText,
  text,
  inputValue,
  onInputChange,
}: Props) {
  return (
    <form onSubmit={action} className={styles.form}>
      <h2 className={styles.title}>{text}</h2>
      <span>
        <input
          type="text"
          className={commonStyles.input}
          value={inputValue}
          onChange={onInputChange}
        />
        <button type="submit" className={commonStyles.action}>
          {actionText}
        </button>
      </span>
    </form>
  );
}

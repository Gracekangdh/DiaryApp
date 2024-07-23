import React from "react";
import styles from "./DiaryForm.module.css";

export default function DiaryForm({ title, text }) {
  return (
    <form className={styles.form}>
      <input
        readOnly
        type="text"
        value={title}
        placeholder="Title"
        className={styles.title}
      />
      <textarea
        readOnly
        value={text}
        placeholder="How was your day"
        className={styles.text}
      />
      <div>
        <button></button>
        <button></button>
      </div>
    </form>
  );
}

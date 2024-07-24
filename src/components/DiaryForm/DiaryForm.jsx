import React from "react";
import styles from "./DiaryForm.module.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

export default function DiaryForm({ title, text, onEdit, onDelete }) {
  return (
    <div className={styles.form}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        className={styles.title}
      />
      <textarea
        value={text}
        placeholder="How was your day"
        className={styles.text}
      />
      <div className={styles.buttons}>
        <button
          type="button"
          className={`${styles.button} ${styles.editButton}`}
          onClick={onEdit}
        >
          <MdModeEdit />
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.deleteButton}`}
          onClick={onDelete}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

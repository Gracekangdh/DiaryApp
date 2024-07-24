import React, { useState, useEffect } from "react";
import styles from "./EditDiary.module.css";

export default function DiaryEditForm({ diary, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (diary) {
      setTitle(diary.title);
      setText(diary.text);
    }
  }, [diary]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...diary, title, text });
    setTitle("");
    setText("");
  };

  return (
    <form className={styles.editDiaryForm} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.text}
        placeholder="How was your day"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.buttons}>
        <button
          type="submit"
          className={`${styles.button} ${styles.saveButton}`}
        >
          Save
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.cancelButton}`}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

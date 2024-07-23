import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddDiary.module.css";

export default function AddDiary({ onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, text });
    setTitle("");
    setText("");
  };

  return (
    <form className={styles.addDiaryForm} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.text}
        type="text"
        placeholder="How was your day"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        <IoIosAddCircle />
      </button>
    </form>
  );
}

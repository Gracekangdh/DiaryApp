import React, { useState } from "react";
import styles from "./NewDiaryForm.module.css";
import { MdSaveAlt } from "react-icons/md";

const initalState = {
  title: "",
  text: "",
};
export default function NewDiaryForm({ onAdd }) {
  const [diary, setDiary] = useState(initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(diary);
    setDiary(initalState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiary((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.addDiaryForm} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        name="title"
        placeholder="Title"
        value={diary.title}
        onChange={handleChange}
      />
      <textarea
        className={styles.text}
        name="text"
        placeholder="How was your day"
        value={diary.text}
        onChange={handleChange}
      />
      <button className={styles.saveButton}>
        <MdSaveAlt />
      </button>
    </form>
  );
}

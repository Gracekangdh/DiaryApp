import React, { useState } from "react";
import styles from "../EditModeDiaryCard/EditModeDiaryCard.module.css";
import { MdSaveAlt, MdDelete } from "react-icons/md";

export default function EditModeDiaryCard({ diary, onSave, onCancel }) {
  const [newDiary, setNewDiary] = useState({
    text: diary.text,
    title: diary.title,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDiary((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave({ ...newDiary, id: diary.id });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newDiary.title}
        onChange={handleChange}
        className={styles.title}
      />
      <textarea
        name="text"
        value={newDiary.text}
        onChange={handleChange}
        className={styles.text}
      />
      <div>
        <button onClick={handleSave} className={styles.saveButton}>
          <MdSaveAlt />
        </button>
        <button onClick={onCancel} className={styles.deleteButton}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

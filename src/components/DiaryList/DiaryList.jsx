import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DiaryForm from "../DiaryForm/DiaryForm";
import AddDiary from "../AddDiary/AddDiary";
import styles from "./DiaryList.module.css";
import DiaryEditForm from "../EditDiary/EditDiary";

export default function DiaryList() {
  const [diaries, setDiaries] = useState([]);
  const [editDiary, setEditDiary] = useState(null);

  const handleAdd = (diary) => {
    const newDiary = { ...diary, id: uuidv4() };
    setDiaries([newDiary, ...diaries]);
  };

  const handleEdit = (id) => {
    const diaryToEdit = diaries.find((diary) => diary.id === id);
    setEditDiary(diaryToEdit);
  };

  const handleDelete = (id) => {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  };

  const handleSave = (editedDiary) => {
    setDiaries(
      diaries.map((diary) =>
        diary.id === editedDiary.id ? editedDiary : diary
      )
    );
    setEditDiary(null);
  };

  const handleCancel = () => {
    setEditDiary(null);
  };

  return (
    <div className={styles.diaryList}>
      <AddDiary onAdd={handleAdd} />
      {diaries.map((diary) => (
        <DiaryForm
          key={diary.id}
          title={diary.title}
          text={diary.text}
          onEdit={() => handleEdit(diary.id)}
          onDelete={() => handleDelete(diary.id)}
        />
      ))}
      {editDiary && (
        <DiaryEditForm
          diary={editDiary}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

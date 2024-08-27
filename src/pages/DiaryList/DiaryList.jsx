import React, { useState } from "react";
import DiaryCard from "../DiaryCard/DiaryCard";
import styles from "../DiaryList/DiaryList.module.css";
import EditModeDiaryCard from "../../components/EditModeDiaryCard/EditModeDiaryCard";

export default function DiaryList({ diaries, onDelete, onSave }) {
  const [editingDiaryId, setEditingDiaryId] = useState(null);

  const handleEdit = (id) => {
    setEditingDiaryId(id);
  };

  const handleSave = (updatedDiary) => {
    onSave(updatedDiary);
    setEditingDiaryId(null);
  };

  const cancelEditMode = () => {
    setEditingDiaryId(null);
  };

  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.id} className={styles.list}>
          {editingDiaryId === diary.id ? (
            <EditModeDiaryCard
              diary={diary}
              onCancel={cancelEditMode}
              onSave={handleSave}
            />
          ) : (
            <DiaryCard diary={diary} onDelete={onDelete} onEdit={handleEdit} />
          )}
        </li>
      ))}
    </ul>
  );
}

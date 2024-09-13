import React from "react";
import DiaryCard from "../DiaryCard/DiaryCard";
import styles from "../DiaryList/DiaryList.module.css";

export default function DiaryList({ diaries, onDelete }) {
  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.id} className={styles.list}>
          <DiaryCard diary={diary} onDelete={onDelete} isEditable={true} />
        </li>
      ))}
    </ul>
  );
}

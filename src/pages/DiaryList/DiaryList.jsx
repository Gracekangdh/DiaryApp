import React from "react";
import DiaryCard from "../DiaryCard/DiaryCard";
import styles from "../DiaryList/DiaryList.module.css";

export default function DiaryList({ diaries }) {
  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.id} className={styles.list}>
          <DiaryCard diary={diary} />
        </li>
      ))}
    </ul>
  );
}

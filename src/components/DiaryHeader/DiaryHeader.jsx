import React from "react";
import styles from "./DiaryHeader.module.css";
import { getCurrentDate } from "../../Utils/Date";

export default function DiaryHeader() {
  const { date, weekday } = getCurrentDate();
  return (
    <header className={styles.diaryHeadBlock}>
      <h1>{date}</h1>
      <div className={styles.day}>{weekday}</div>
    </header>
  );
}

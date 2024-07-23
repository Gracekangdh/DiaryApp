import React from "react";
import styles from "./DiaryHead.module.css";
import { getCurrentDate } from "../../Utils/Date";

export default function DiaryHead() {
  const { date, weekday } = getCurrentDate();
  return (
    <div className={styles.diaryHeadBlock}>
      <h1>{date}</h1>
      <div className={styles.day}>{weekday}</div>
    </div>
  );
}

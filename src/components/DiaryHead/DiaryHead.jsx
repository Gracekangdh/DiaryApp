import React from "react";
import styles from "./DiaryHead.module.css";

export default function DiaryHead() {
  return (
    <div className={styles.diaryHeadBlock}>
      <h1>2019년 7월 10일</h1>
      <div className={styles.day}>수요일</div>
    </div>
  );
}

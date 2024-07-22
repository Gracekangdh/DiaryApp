import React from "react";
import styles from "./DiaryHome.module.css";

export default function DiaryHome({ children }) {
  return <div className={styles.diaryHomeBlock}>{children}</div>;
}

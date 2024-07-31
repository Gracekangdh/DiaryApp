import React from "react";
import styles from "./DiaryLayout.module.css";

export default function DiaryLayout({ children }) {
  return <div className={styles.diaryHomeBlock}>{children}</div>;
}

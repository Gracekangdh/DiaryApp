import React from "react";
import styles from "./DiaryHeader.module.css";
import { getCurrentDate } from "../../utils/date";
import { useDarkMode } from "../../context/DarkModeContext";

export default function DiaryHeader() {
  const { date, weekday } = getCurrentDate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.diaryHeadBlock}>
      <button className={styles.toggleButton} onClick={toggleDarkMode}>
        {darkMode ? "🌙" : "🌞"}
      </button>
      <h1>{date}</h1>
      <div className={styles.day}>{weekday}</div>
    </header>
  );
}

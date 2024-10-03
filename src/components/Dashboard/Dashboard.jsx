import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Dashboard.module.css";
import NewDiaryForm from "../NewDiaryForm/NewDiaryForm";
import DiaryList from "../../pages/DiaryList/DiaryList";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useDiaries } from "../../hooks/use-diaries";

export default function Dashboard() {
  const { diaries, addDiary, deleteDiary } = useDiaries();
  const [showNewDiaryForm, setShowNewDiaryForm] = useState(false);

  const toggleNewDiaryForm = () => {
    setShowNewDiaryForm((prev) => !prev);
  };

  const handleAdd = (diary) => {
    const newDiary = { ...diary, id: uuidv4() };
    addDiary(newDiary);
    toggleNewDiaryForm();
  };

  return (
    <div className={styles.diaryList}>
      {showNewDiaryForm && (
        <NewDiaryForm onAdd={handleAdd} className={styles.newDiaryForm} />
      )}
      <DiaryList diaries={diaries} onDelete={deleteDiary} />
      <button onClick={toggleNewDiaryForm} className={styles.button}>
        {showNewDiaryForm ? <IoMdClose /> : <IoMdAdd />}
      </button>
    </div>
  );
}

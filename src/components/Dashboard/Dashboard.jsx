import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Dashboard.module.css";
import NewDiaryForm from "../NewDiaryForm/NewDiaryForm";
import DiaryList from "../../pages/DiaryList/DiaryList";
import { IoMdAdd, IoMdClose } from "react-icons/io";

export default function Dashboard() {
  const [diaries, setDiaries] = useState(() => readDiariesFromLocalStorage());
  const [showNewDiaryForm, setShowNewDiaryForm] = useState(false);

  const toggleNewDiaryForm = () => {
    setShowNewDiaryForm((prev) => !prev);
  };

  const handleAdd = (diary) => {
    const newDiary = { ...diary, id: uuidv4() };
    setDiaries([newDiary, ...diaries]);
    toggleNewDiaryForm();
  };

  const handleDelete = (id) => {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  };

  const onSave = (updatedDiary) => {
    setDiaries((currentDiaries) =>
      currentDiaries.map((diary) =>
        diary.id === updatedDiary.id ? updatedDiary : diary
      )
    );
  };

  // const storedDiaries = localStorage.getItem("diaries");
  // if (storedDiaries) { // truthy : [] <-> null undefined
  //   setDiaries(JSON.parse(storedDiaries));
  // } -> (한번만) 저장되어있는 것을 GET! 상태를 업데이트하고 useEffect...
  // 내가 쓸 로직이 함수 안에 혹은 밖에 있어야 하는가 확인!

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  return (
    <div className={styles.diaryList}>
      {showNewDiaryForm && (
        <NewDiaryForm onAdd={handleAdd} className={styles.newDiaryForm} />
      )}
      <DiaryList diaries={diaries} onDelete={handleDelete} onSave={onSave} />
      <button onClick={toggleNewDiaryForm} className={styles.button}>
        {showNewDiaryForm ? <IoMdClose /> : <IoMdAdd />}
      </button>
    </div>
  );
}

function readDiariesFromLocalStorage() {
  const diaries = localStorage.getItem("diaries");
  return diaries ? JSON.parse(diaries) : [];
}

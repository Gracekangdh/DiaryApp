import React, { useState } from "react";
import DiaryForm from "../DiaryForm/DiaryForm";
import AddDiary from "../AddDiary/AddDiary";

export default function DiaryList() {
  const [diaries, setDiaries] = useState([]);
  const handleAdd = (diary) => {
    setDiaries([diary, ...diaries]);
  };
  return (
    <div>
      <AddDiary onAdd={handleAdd} />
      {diaries.map((diary, index) => (
        <DiaryForm key={index} title={diary.title} text={diary.text} />
      ))}
    </div>
  );
}

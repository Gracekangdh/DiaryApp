import React from "react";
//import styles from "../DiaryDetail/DiaryDetail.module.css";
import { useParams } from "react-router-dom";
import DiaryCard from "../DiaryCard/DiaryCard";

export default function DiaryDetail({ diaries, onDelete, onEdit }) {
  // showDetail
  // delete, edit button
  const { diaryID } = useParams();
  const diary = diaries.find((id) => diary.id === diaryID);

  return (
    <div>
      <DiaryCard diary={diary} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

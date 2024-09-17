import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiaries } from "../../hooks/use-diaries";
import styles from "../DiaryDetail/DiaryDetail.module.css";

export default function DiaryDetail() {
  const [diary, setDiary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaries, deleteDiary } = useDiaries();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    deleteDiary(id);
    navigate(-1); // useEffect가 더 먼저 발생
  };

  useEffect(() => {
    const foundDiary = diaries.find((diary) => diary.id === id);
    setDiary(foundDiary);
  }, [diaries, id]);

  if (diary === null) return <p>Loading...</p>;

  return (
    <div className={styles.cardDetail}>
      <button onClick={handleBackClick}>Back</button>
      <h2>{diary.title}</h2>
      <p>{diary.text}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

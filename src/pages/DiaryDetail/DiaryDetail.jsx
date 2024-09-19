import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiaries } from "../../hooks/use-diaries";
import styles from "../DiaryDetail/DiaryDetail.module.css";
import { isEditable } from "@testing-library/user-event/dist/utils";

export default function DiaryDetail() {
  const [diary, setDiary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaries, deleteDiary, updateDiary } = useDiaries();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedText, setEditedText] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    deleteDiary(id) //
      .then(() => navigate(-1)); // useEffect가 더 먼저 발생
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(diary.title);
    setEditedText(diary.text);
  };

  const handleSave = async () => {
    const updatedDiary = { ...diary, title: editedTitle, text: editedText };

    await updateDiary(id, updatedDiary);

    setDiary(updatedDiary);
    setIsEditing(false);
  };

  useEffect(() => {
    const foundDiary = diaries.find((diary) => diary.id === id);
    setDiary(foundDiary ?? null);
  }, [diaries, id]);

  if (diary === null) return <p>Loading...</p>;

  return (
    <div className={styles.cardDetail}>
      <button onClick={handleBackClick}>Back</button>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{diary.title}</h2>
          <p>{diary.text}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}

      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

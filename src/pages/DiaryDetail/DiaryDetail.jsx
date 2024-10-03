import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiaries } from "../../hooks/use-diaries";
import styles from "../DiaryDetail/DiaryDetail.module.css";
import { IoChevronBack } from "react-icons/io5";
import { MdSaveAlt, MdEdit, MdOutlineDelete } from "react-icons/md";

export default function DiaryDetail() {
  const [diary, setDiary] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newDiary, setNewDiary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaries, deleteDiary, updateDiary } = useDiaries();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    deleteDiary(id).then(() => navigate(-1));
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setNewDiary((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedDiary = { ...diary, ...newDiary };
    updateDiary(updatedDiary);
    setIsEditing(false);
  };

  useEffect(() => {
    const foundDiary = diaries.find((diary) => diary.id === id);

    if (foundDiary) {
      setDiary(foundDiary);
      setNewDiary({ title: foundDiary.title, text: foundDiary.text });
    } else {
      throw Error("Diary Not Found");
    }
  }, [diaries, id]);

  if (diary === null) return <p>Loading...</p>;

  return (
    <div className={styles.cardDetail}>
      <button onClick={handleBackClick} className={styles.backBtn}>
        <IoChevronBack />
      </button>

      {isEditing ? (
        <>
          <input
            className={styles.editingTitle}
            name="title"
            value={newDiary.title}
            onChange={handleEdit}
          />
          <textarea
            className={styles.editingText}
            name="text"
            value={newDiary.text}
            onChange={handleEdit}
          />
          <div className={styles.buttonWrapper}>
            <button onClick={handleSave} className={styles.saveBtn}>
              <MdSaveAlt />
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.title}>{diary.title}</h2>
          <p className={styles.text}>{diary.text}</p>
          <div className={styles.buttonWrapper}>
            <button onClick={toggleEdit} className={styles.editBtn}>
              <MdEdit />
            </button>
            <button onClick={handleDelete} className={styles.deleteBtn}>
              <MdOutlineDelete />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

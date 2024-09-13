import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DiaryCard from "../DiaryCard/DiaryCard";
import EditModeDiaryCard from "../../components/EditModeDiaryCard/EditModeDiaryCard";

export default function CardDetail({ diaries, onDelete, onSave }) {
  const { diaryID } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const diary = diaries.find((diary) => diary.id === diaryID);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedDiary) => {
    onSave(updatedDiary);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditModeDiaryCard
          diary={diary}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <DiaryCard
          diary={diary}
          onDelete={onDelete}
          onEdit={handleEditClick}
          isEditable={true}
        />
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

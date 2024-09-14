import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiaries } from "../../hooks/use-diaries";

export default function DiaryDetail() {
  const [diary, setDiary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { diaries } = useDiaries();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const foundDiary = diaries.find((diary) => diary.id === id);
    setDiary(foundDiary);
  }, [diaries, id]);

  if (diary === null) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

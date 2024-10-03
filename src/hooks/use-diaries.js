import { useEffect, useState } from "react";

export function useDiaries() {
  const [diaries, setDiaries] = useState(readDiariesFromLocalStorage());

  const addDiary = (newDiary) => {
    const updatedDiaries = [...diaries, newDiary];
    setDiaries(updatedDiaries);
  };

  const deleteDiary = (id) => {
    const updatedDiaries = diaries.filter((diary) => diary.id !== id);
    setDiaries(updatedDiaries);
  };

  const updateDiary = (updatedDiary) => {
    const updatedDiaries = diaries.map((diary) =>
      diary.id === updatedDiary.id ? updatedDiary : diary
    );
    setDiaries(updatedDiaries);
  };

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  return {
    diaries,
    deleteDiary,
    updateDiary,
    addDiary,
  };
}

function readDiariesFromLocalStorage() {
  const diaries = localStorage.getItem("diaries");
  return diaries ? JSON.parse(diaries) : [];
}

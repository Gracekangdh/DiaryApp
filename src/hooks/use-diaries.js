import { useState } from "react";

export function useDiaries() {
  const [diaries, setDiaries] = useState(() => readDiariesFromLocalStorage());

  const addDiary = (newDiary) => {
    const updatedDiaries = [...diaries, newDiary];
    setDiaries(updatedDiaries);
    saveDiariesToLocalStorage(updatedDiaries);
  };

  const deleteDiary = (id) => {
    const updatedDiaries = diaries.filter((diary) => diary.id !== id);
    setDiaries(updatedDiaries);
    saveDiariesToLocalStorage(updatedDiaries);
  };

  const updateDiary = (updatedDiary) => {
    const updatedDiaries = diaries.map((diary) =>
      diary.id === updatedDiary.id ? updatedDiary : diary
    );
    setDiaries(updatedDiaries);
    saveDiariesToLocalStorage(updatedDiaries);
  };

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
function saveDiariesToLocalStorage(diaries) {
  localStorage.setItem("diaries", JSON.stringify(diaries));
}

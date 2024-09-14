import { useState } from "react";

export function useDiaries() {
  const [diaries, setDiaries] = useState(() => readDiariesFromLocalStorage());

  const addDiary = () => {};

  const deleteDiary = () => {};

  const updateDiary = () => {};

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

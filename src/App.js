import React from "react";
import DiaryHome from "./components/Home/DiaryHome";
import DiaryHead from "./components/DiaryHead/DiaryHead";
import DiaryList from "./components/DiaryList/DiaryList";
export default function App() {
  return (
    <>
      <DiaryHome>
        <DiaryHead />
        <DiaryList />
      </DiaryHome>
    </>
  );
}

import React from "react";
import DiaryHome from "./components/Home/DiaryHome";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import DiaryList from "./components/DiaryList/DiaryList";
export default function App() {
  return (
    <>
      <DiaryHome>
        <DiaryHeader />
        <DiaryList />
      </DiaryHome>
    </>
  );
}

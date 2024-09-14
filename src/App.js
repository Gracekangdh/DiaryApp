import React from "react";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <DiaryLayout>
        <Outlet />
      </DiaryLayout>
    </DarkModeProvider>
  );
}

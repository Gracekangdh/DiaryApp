import React from "react";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <DiaryLayout>
      <DiaryHeader />
      <Dashboard />
    </DiaryLayout>
  );
}

// /
// /new-diary
// /ID
// Not Found

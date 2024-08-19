import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import DiaryLayout from "../components/DiaryLayout/DiaryLayout";
import DiaryHeader from "../components/DiaryHeader/DiaryHeader";

export default function Home() {
  return (
    <DiaryLayout>
      <DiaryHeader />
      <Dashboard />
    </DiaryLayout>
  );
}

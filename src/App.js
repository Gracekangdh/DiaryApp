import React from "react";
import Root from "./pages/Root";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NewDiary from "./pages/NewDiary-1";
import DiaryDetail from "./components/DiaryDetail/DiaryDetail";
import DiaryList from "./pages/DiaryList-1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/new-diary", element: <NewDiary /> },
      { path: "/diary", element: <DiaryList /> },
      { path: "/diary/:diaryID", element: <DiaryDetail /> },
    ],
  },
]);
export default function App() {
  return (
    <RouterProvider router={router}>
      <DiaryLayout>
        <DiaryHeader />
        <Dashboard />
      </DiaryLayout>
    </RouterProvider>
  );
}

// /
// /new-diary
// /ID

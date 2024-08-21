import React from "react";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DiaryList from "./pages/DiaryList/DiaryList";
import DiaryDetail from "./pages/DiaryDetail/DiaryDetail";
import DiaryCard from "./pages/DiaryCard/DiaryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/DiaryList", element: <DiaryList /> },
      { path: "/Diary", element: <DiaryCard /> },
      { path: "/DiaryDetail/:diaryID", element: <DiaryDetail /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <DiaryLayout>
        <Outlet>
          <DiaryHeader />
          <Dashboard />
        </Outlet>
      </DiaryLayout>
    </RouterProvider>
  );
}

// /
// /new-diary
// /ID

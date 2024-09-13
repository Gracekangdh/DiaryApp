import React from "react";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DiaryDetail from "./pages/DiaryDetail/DiaryDetail";
import DiaryCard from "./pages/DiaryCard/DiaryCard";
import DiaryList from "./pages/DiaryList/DiaryList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <DiaryList /> },
      { path: "/diary", element: <DiaryCard /> },
      { path: "/diary/:id", element: <DiaryDetail /> },
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

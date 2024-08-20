import React from "react";
import DiaryLayout from "./components/DiaryLayout/DiaryLayout";
import DiaryHeader from "./components/DiaryHeader/DiaryHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DiaryList from "./pages/DiaryList/DiaryList";
//import NewDiaryForm from "./pages/NewDiaryForm/NewDiaryForm";
import DiaryDetail from "./pages/DiaryDetail/DiaryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/DiaryList", element: <DiaryList /> },
      { path: "/DiaryDetail", element: <DiaryDetail /> },
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

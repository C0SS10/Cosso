import MainLayout from "@layouts/MainLayout"
import PostsList from "@pages/blog/PostsList"
import HomePage from "@pages/HomePage"
import { createBrowserRouter } from "react-router"


export const router = createBrowserRouter([
  {
    path: "/Cosso/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <PostsList />,
      },
    ],
  },
])
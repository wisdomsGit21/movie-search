import BaseLayout from "@/components/base-layout";
import Home from "@/domain/home";
import { RouteObject } from "react-router-dom";

//For Tree Shaking!
export default function appRouter(): RouteObject[] {
  return [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ];
}

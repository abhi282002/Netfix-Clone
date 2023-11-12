import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "/browse",
          element: (
            <>
              <MainContainer /> <SecondaryContainer />
            </>
          ),
        },
        {
          path: "/browse/search",
          element: <GptSearch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppRoute } from "./AppRoute.enum";
import { MainView } from "app/view/MainView/MainView";
import { Login } from "app/components/Login/Login";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Home} element={<MainView />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path="*" element={<MainView />} />
      </Routes>
    </>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider";
import "./styles/index.scss";

import App from "./App";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
);

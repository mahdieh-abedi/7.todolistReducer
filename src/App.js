import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Menu, ToDoListPage, HomePage } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<HomePage />} />
          <Route path="ToDoListPage" element={<ToDoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

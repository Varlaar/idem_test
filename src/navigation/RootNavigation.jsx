import Home from "../pages/Home";
import Chat from "../pages/Chat";
import { LayoutComponent } from "../components";
import { Routes, Route } from "react-router-dom";

export const RootNavigation = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </LayoutComponent>
  );
};

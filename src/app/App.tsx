import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Guides from "../pages/Guides";
import Characters from "../pages/Characters";
import Maps from "../pages/Maps";
import Items from "../pages/Items";
import Shell from "../shared/Shell";

export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/personnages" element={<Characters />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/items" element={<Items />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Shell>
    </HashRouter>
  );
}
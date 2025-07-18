//import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyMaterials from "./components/ContentManagement/StudyMaterials"
import ViewCardPage from "./components/ContentManagement/ViewCardPage";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<StudyMaterials />} />
    <Route path="/view" element={<ViewCardPage />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
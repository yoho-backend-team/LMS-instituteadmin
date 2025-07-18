//import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import StudyMaterials from "./components/ContentManagement/StudyMaterials"
//import ViewCardPage from "./components/ContentManagement/ViewCardPage";
import StaffAttendancePage from "./components/StaffAttendancePage/StaffAttendance";
import ViewAttendancePage from "./components/StaffAttendancePage/ViewAttendance";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    {/*<Route path="/" element={<StudyMaterials />} />*/}
    {/*<Route path="/view" element={<ViewCardPage />} />*/}
    <Route path="/" element={<StaffAttendancePage />} />
    <Route path="/attendance/:id" element={<ViewAttendancePage />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
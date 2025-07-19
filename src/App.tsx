import { BrowserRouter, Routes,Route } from "react-router"
import StaffMangement from "./page/StaffManagement/StaffMangement"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/staffmanagement" element={<StaffMangement/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
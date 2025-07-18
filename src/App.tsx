import { Button } from "@/components/ui/button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from "./components/community/Community";
import RevenueExpenseChart from "./components/DashboardChart";
import Notes from "./components/Notes/Notes";
import Student from "./components/StudentManagement/Student";



function App() {
  return (
    <Router>
      <Routes>
       <Route path="community" element={<Community />} />
       <Route path="dashboard" element={<RevenueExpenseChart />} />
       <Route path="notes" element={<Notes />} />
        <Route path="student" element={<Student />} />
      </Routes>
    </Router>
  )
}

export default App
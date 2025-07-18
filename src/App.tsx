import { Routes, Route } from "react-router-dom";
import BranchPage from "./components/Branch/branchPage";
import BranchOverview from "./components/Branch/branchOverview";
import StudentDashboard from "./components/Batch/studentMainBatch";
import StudentDashboardPage from "./components/Batch/viewBatch";


function App() {
  return (
    
     <Routes>
      <Route path="/" element={<BranchPage />} />
      <Route path="/branch-overview" element={<BranchOverview />} />
      <Route path="/student-batch" element={<StudentDashboard />} />
      <Route path="/view-page" element={<StudentDashboardPage/>}/>
    </Routes>
  );
}

export default App;


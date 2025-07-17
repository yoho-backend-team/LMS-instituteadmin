import { Routes, Route } from "react-router-dom";
import BranchPage from "./components/Branch/branchPage";
import BranchOverview from "./components/Branch/branchOverview";


function App() {
  return (
    
     <Routes>
      <Route path="/" element={<BranchPage />} />
      <Route path="/branch-overview" element={<BranchOverview />} />
    </Routes>
  );
}

export default App;



// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LiveClasses from "./pages/ LiveClasses";

import AddLiveClassForm from "./components/live-classes/AddLiveClassForm";
import ClassDetails from "./components/live-classes/ClassDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/live-classes" replace />} />
        <Route path="/live-classes" element={<LiveClasses />} />
      
        <Route path="/live-classes/add" element={<AddLiveClassForm />} />
        <Route path="/live-classes/details/:id" element={<ClassDetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
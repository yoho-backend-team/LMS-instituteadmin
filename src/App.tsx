import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Groups from "../src/components/groups/groups";
import AddGroup from "../src/components/groups/addgroup";
import PermissionManagement from "../src/components/groups/view";
import Edit from '../src/components/groups/Edit'
import Modules from '../src/components/modules/module'
import StudentAttendance from "./components/AttendanceManagement/studentAttend";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Groups />} />
        <Route path="/add-group" element={<AddGroup />} />
        <Route path="/permission-management" element={< PermissionManagement/>}/>
        <Route path="/Edit" element={<Edit/>}/>
        <Route path="/modules" element={<Modules/>}/>
        <Route path="/student-attend" element={<StudentAttendance />}/>
      </Routes>
    </Router>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Groups from "./components/groups/groups";
// import AddGroup from "./components/groups/addgroup";
// import PermissionManagement from "./components/groups/view";
// import Edit from './components/groups/Edit'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Groups />} />
//         <Route path="/add-group" element={<AddGroup />} />
//         <Route path="/permission-management" element={< PermissionManagement/>}/>
//         <Route path="/Edit" element={<Edit/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react'
import Groupspages from './pages/Groupspages'

function App() {
  return (
    <div>
      <Groupspages/>
    </div>
  )
}

export default App
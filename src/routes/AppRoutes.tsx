
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainLayout } from "@/layout/mainlayout/mainlayout";
import Dashboard from "@/pages/dashboard/dashboard";
import Branchmanagement from "@/pages/branchmanagement/branchmanagement";
import Community from "@/pages/community/community";
import Usermanagement from "@/pages/usermanagement/usermanagement";
import Users from "@/pages/users/users";
import Branch from "@/pages/branchmanagement/branch/branch";
import Group from "@/pages/usermanagement/group/group";
import Categories from "@/pages/coursemanagement/categories/categories";
import Courses from "@/pages/courses/courses";
import StudyMaterials from "@/pages/contentmanagement/studymaterials/studymaterials";
import Notes from "@/pages/notes/notes";
import Modules from "@/pages/modules/modules";
import OfflineClass from "@/pages/classmanagement/classmanagement";
import OfflineEdit from "@/components/classmanagement/offline_edit/offline_edit";
import OfflineView from "@/components/classmanagement/offline_view/offline_view";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          {/* <Route path="Branch-management" element={<Branchmanagement />} /> */}
          <Route path="Branch" element={<Branch />} />
          <Route path="Community" element={<Community />} />
          {/* <Route path="User-management" element={<Usermanagement />} /> */}
          <Route path="Group" element={<Group />} />
          <Route path="Users" element={<Users />} />
          <Route path="categories" element={<Categories />} />
          <Route path="courses" element={<Courses />} />
          <Route path="studymaterial" element={<StudyMaterials />} />
          <Route path="notes" element={<Notes />} />
          <Route path="modules" element={<Modules />} />
          <Route path="offlinemanagement" element={<OfflineClass />} />
          <Route path="/offlineedit" element={<OfflineEdit />} />
          <Route path="/offlineclass" element={<OfflineClass />} />
          <Route path="/offlineviewmore" element={<OfflineView />} />
        </Route>

        
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;

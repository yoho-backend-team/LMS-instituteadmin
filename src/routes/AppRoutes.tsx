
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainLayout } from "@/layout/mainlayout/mainlayout";
import Dashboard from "@/pages/dashboard/dashboard";
// import Branchmanagement from "@/pages/branchmanagement/branchmanagement";
import Community from "@/pages/community/community";
// import Usermanagement from "@/pages/usermanagement/usermanagement";
import Users from "@/pages/users/users";
import Branch from "@/pages/branchmanagement/branch/branch";
import Group from "@/pages/usermanagement/group/group";
import Categories from "@/pages/coursemanagement/categories/categories";
import Courses from "@/pages/courses/courses";
import ViewCardPage from "@/components/ContentManagement/ViewCardPage"; // <-- Add this import

import StudyMaterials from "@/pages/contentmanagement/studymaterials/studymaterials";
import Notes from "@/pages/notes/notes";
import Modules from "@/pages/modules/modules";
import OfflineClass from "@/pages/classmanagement/classmanagement";
import OfflineEdit from "@/components/classmanagement/offline_edit/offline_edit";
import OfflineView from "@/components/classmanagement/offline_view/offline_view";
import ThreePlans from "@/pages/3plans/3plans";
import StaffAttendence from "@/pages/attendencemanagement/staff_attendence/staff_attendence";
import StudentAttendence from "@/pages/attendencemanagement/student_attendence/student_attendence";
import Batchmanagement from "@/pages/batchmanagement/batchmanagement";
import StudentCertificate from "@/pages/certificatemanagement/studentcertificate/studentcertificate";
import FQA from "@/pages/FQAcategory/FQA/FQA";
import Category from "@/pages/FQAcategory/category/category";
import AddQust from "@/pages/helpcenter/AddQust/addQust";
import HelpFQA from "@/pages/helpcenter/helpFQA/helpFQA";
import StaffIdCard from "@/pages/id_cardmanagement/staffidcard/staffidcard";
import StudentIdCrad from "@/pages/id_cardmanagement/studentidcard/studentidcard";
import Liveclasses from "@/pages/liveclasses/liveclasses";
import Allnotification from "@/pages/notificationmanagement/allnotification/allnotification";
import StudentNotification from "@/pages/notificationmanagement/studentnotification/studentnotification";
import Fees from "@/pages/paymentmanagement/fees/fees";
import Salaries from "@/pages/paymentmanagement/salaries/salaries";
import Subscription from "@/pages/paymentmanagement/subscription/subscription";
import Placement from "@/pages/placementmanagement/placement/placement";
import Refund_Management_Fees from "@/pages/refundmanagement/fees/fees";
import Teachingstaff from "@/pages/staffmanagement/teachingstaff/teachingstaff";
import Studentmanagement from "@/pages/studentmanagement/studentmanagement";
import ViewAttendancePage from "@/components/StaffAttendancePage/ViewAttendance";

import StaffTicket from "@/pages/ticketmanagement/staffticket/staffticket";
import StudentTicket from "@/pages/ticketmanagement/studentticket/studentticket";
import YourTicket from "@/pages/ticketmanagement/yourticket/yourticket";
import StaffNotification from "@/pages/notificationmanagement/staffnotification/staffnotification";


const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/Dashboard" />} />
          <Route path="Staffnotification" element={<StaffNotification />} />
          <Route path="Allnotification" element={<Allnotification />} />
          <Route path="Studentnotification" element={<StudentNotification />} />
          <Route path="Liveclasses" element={<Liveclasses />} />
          <Route path="StudentIdCard" element={<StudentIdCrad />} />
          <Route path="StaffIdCard" element={<StaffIdCard />} />
          <Route path="HelpFQA" element={<HelpFQA />} />
          <Route path="AddQust" element={<AddQust />} />
          <Route path="Category" element={<Category />} />
          <Route path="FQA" element={<FQA />} />
          <Route path="Studentcertificate" element={<StudentCertificate />} />
          <Route path="Batchmanagement" element={<Batchmanagement />} />
          <Route path="Studentattendence" element={<StudentAttendence />} />
          <Route path="Staffattendence" element={<StaffAttendence />} />
          <Route path="Threeplans" element={<ThreePlans />} />
          <Route path="Fees" element={<Fees />} />
          <Route path="Slaries" element={<Salaries />} />
          <Route path="Subscription" element={<Subscription />} />
          <Route path="Placement" element={<Placement />} />
          <Route path="Refund_Fees" element={<Refund_Management_Fees />} />
          <Route path="Teachingstaff" element={<Teachingstaff />} />
          <Route path="/attendance/:id" element={<ViewAttendancePage />} />
          
          <Route path="Studentmanagement" element={<Studentmanagement />} />
          <Route path="Staffticket" element={< StaffTicket />} />
          <Route path="StudentTicket" element={<StudentTicket />} />
          <Route path="Yourticket" element={<YourTicket />} />
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
          <Route path="studymaterial/view" element={<ViewCardPage />} />


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

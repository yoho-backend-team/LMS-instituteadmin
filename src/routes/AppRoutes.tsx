
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/layout/mainlayout/mainlayout";
import Dashboard from "@/pages/dashboard/dashboard";
import Community from "@/pages/community/community";
import Users from "@/pages/users/users";
import Branch from "@/pages/branchmanagement/branch/branch";
// import  from "@/pages/usermanagement/group/group";
import Categories from "@/pages/coursemanagement/categories/categories";
import Courses from "@/pages/courses/courses";
import ViewCardPage from "@/components/ContentManagement/ViewCardPage"; // <-- Add this import

import StudyMaterials from "@/pages/contentmanagement/studymaterials/studymaterials";
import Notes from "@/pages/notes/notes";
import Module from "@/pages/modules/modules";
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

import OfflineAdd from "@/components/classmanagement/offline_add/offline_add";
import All from "../components/notificationmanagement/overallnotification/all/all"
import Profile from "@/pages/profile/profile/profile";
import Settings from "@/pages/profile/settings/settings";
import Logout from "@/pages/profile/logout/logout";
import Groupspages from "@/pages/Groupspages/Groupspages";
import AddGroup from "@/components/groups/addgroup";
import PermissionManagement from "@/components/groups/view";
import  Edit from "@/components/groups/Edit"
import ChatPage from "@/components/ticket _management/chat-page";
import ClosedTicket from "@/components/ticket _management/closechat";



import TrackOrder from "@/components/HelpFAQ/TrackOrder";
import FindMissingOrder from "@/components/HelpFAQ/FindMissingOrder";
import SecureDelivery from "@/components/HelpFAQ/SecureDelivery";
import CertificateView from "@/components/CertificateManagement/CertificateView";

import ProfileEdit from "@/components/profile/edit/edit";
import Student_Allnotification from "@/components/notificationmanagement/studentnotification/student_all/student_all";
import StudentNotification_c from "@/components/notificationmanagement/studentnotification/studentnotification_c";
import StaffNotification_c from "@/components/notificationmanagement/staffnotification/staffnotification";
import Allnotification from "@/pages/notificationmanagement/allnotification/allnotification";
import AllNotification_c from "@/components/notificationmanagement/overallnotification/overallnotification";
import Placementedit from "@/components/placement/edit/edit";
import Placementadd from "@/components/placement/add/add";

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
          <Route path="HelpFQA" element={<FQA />} />
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
          <Route path="Staffticket" element={<StaffTicket />} />
          <Route path="StudentTicket" element={<StudentTicket />} />
          <Route path="Yourticket" element={<YourTicket />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Branch" element={<Branch />} />
          <Route path="Community" element={<Community />} />
          <Route path="Group" element={<Groupspages/>} />
          <Route path="Users" element={<Users />} />
          <Route path="categories" element={<Categories />} />
          <Route path="courses" element={<Courses />} />
          <Route path="studymaterial" element={<StudyMaterials />} />
          <Route path="studymaterial/view" element={<ViewCardPage />} />


          <Route path="notes" element={<Notes />} />
          <Route path="modules" element={<Module />} />
          <Route path="offlinemanagement" element={<OfflineClass />} />
          <Route path="/offlineedit" element={<OfflineEdit />} />
          <Route path="/offlineclass" element={<OfflineClass />} />
          <Route path="/offlineviewmore" element={<OfflineView />} />
         
          <Route path="/offlineadd" element={<OfflineAdd />} />
          <Route path="/chat-page" element={<ChatPage/>}/>
          <Route path="/closed-ticket" element={<ClosedTicket/>}/>

          <Route path="/all" element={<All />} />
          
   <Route path="/add-group" element={<AddGroup />} />
        <Route path="/permission-management" element={< PermissionManagement/>}/>
        <Route path="/Edit" element={<Edit/>}/>

          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/find-missingpackage" element={<FindMissingOrder />} />
          <Route path="/secure-delivery" element={<SecureDelivery />} />
          <Route path="/certificate-view" element={<CertificateView />} />


          <Route path="/logout" element={<Logout />} />
          <Route path="/profiledit" element={<ProfileEdit />} />
          <Route path="/studentnotifications" element={<Student_Allnotification />} />
          <Route path="/overallnotification_c" element={<AllNotification_c />} />
          <Route path="/staffnotification_c" element={<StaffNotification_c />} />
          <Route path="/studentnotification_c" element={<StudentNotification_c />} />
          <Route path="/placememntedit" element={<Placementedit />} />
          <Route path="/placememntadd" element={<Placementadd />} />

        </Route>


        <Route path="*" element={<Navigate to="/dashboard" replace />} />

        {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, Pencil, Trash } from "lucide-react";

// interface Props {
//   classId: string;
//   onClose: () => void;
// }

// const ClassCardMenu: React.FC<Props> = ({ classId, onClose }) => {
//   const navigate = useNavigate();

//   const handleEdit = () => {
//     navigate(`/live-classes/edit/${classId}`);
//     onClose();
//   };

//   return (
//     <div className="absolute top-10 right-2 z-70 w-44 bg-white shadow-lg rounded-lg">
//       <button
//         className="w-full flex items-center gap-2 px-4 py-3 hover:bg-[#fbd7e2] text-[#CA406F] font-medium "
//         onClick={() => {
//           alert("View class " + classId);
//           onClose();
//         }}
//       >
//         <Eye className="w-5 h-5" />
//         View
//       </button>
//       <button
//         className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//         onClick={handleEdit}
//       >
//         <Pencil className="w-5 h-5 text-gray-700" />
//         Edit
//       </button>
//       <button
//         className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-50 text-gray-700"
//         onClick={() => {
//           alert("Delete class " + classId);
//           onClose();
//         }}
//       >
//         <Trash className="w-5 h-5 text-red-600" />
//         Delete
//       </button>
//     </div>
//   );
// };

// export default ClassCardMenu;

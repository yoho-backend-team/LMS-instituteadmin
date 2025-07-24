import { useState } from 'react'
import { FaEdit, FaEllipsisV, FaPlus, FaTrash } from 'react-icons/fa'
import AddPlacement from './AddPlacement';

interface Placement {
  id: number;
  studentName: string;
  email: string;
  companyName: string;
  interviewDate: string;
  jobName: string;
}

const initialPlacements: Placement[] = [
  {
    id: 1,
    studentName: "Kamaleesh",
    email: "kamaleesh@example.com",  // Updated email
    companyName: "TechCorp",
    interviewDate: "2023-05-15",
    jobName: "Software Engineer"
  },
  {
    id: 2,
    studentName: "Samantha",
    email: "samantha@example.com",  // Updated email
    companyName: "DataSystems",
    interviewDate: "2023-06-20",
    jobName: "Data Analyst"
  },
  {
    id: 3,
    studentName: "Vijay",
    email: "vijay@example.com",  // Updated email
    companyName: "WebSolutions",
    interviewDate: "2023-04-10",
    jobName: "Frontend Developer"
  },
  {
    id: 4,
    studentName: "Emma Watson",
    email: "emma.watson@example.com",  // Updated email
    companyName: "CloudTech",
    interviewDate: "2023-07-05",
    jobName: "DevOps Engineer"
  },
  {
    id: 5,
    studentName: "Ana de Armas",
    email: "ana.dearmas@example.com",  // Updated email
    companyName: "AI Innovations",
    interviewDate: "2023-08-12",
    jobName: "Machine Learning Engineer"
  }
];

const Placements = () => {
  const [showForm, setShowForm] = useState(false);
  const [placementsList, setPlacementsList] = useState<Placement[]>(initialPlacements);
  const [editData, setEditData] = useState<Placement | null>(null);

  const handleAddPlacement = (data: any) => {
    if (editData) {
      // Update existing placement
      setPlacementsList(prev => prev.map(placement => 
        placement.id === editData.id ? {
          ...placement,
          studentName: data.student,
          email: data.contactEmail,
          companyName: data.companyName,
          jobName: data.jobName
        } : placement
      ));
    } else {
      // Add new placement
      const newPlacement = {
        id: placementsList.length > 0 ? Math.max(...placementsList.map(p => p.id)) + 1 : 1,
        studentName: data.student,
        email: data.contactEmail,
        companyName: data.companyName,
        interviewDate: new Date().toISOString().split("T")[0],
        jobName: data.jobName
      };
      setPlacementsList(prev => [...prev, newPlacement]);
    }
    setShowForm(false);
    setEditData(null);
  };

  const handleEdit = (placement: Placement) => {
    setEditData(placement);
    setShowForm(true);
  };

 const handleDelete = (id: number) => {
  setPlacementsList(prev => prev.filter(placement => placement.id !== id));
};

  const prepareEditData = (placement: Placement) => {
    return {
      companyName: placement.companyName,
      companyAddress: "",
      contactEmail: placement.email,
      contactNumber: "",
      jobName: placement.jobName,
      jobDescription: "",
      skills: "",
      student: placement.studentName
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>Placement</h2>
          <button
            onClick={() => {
              setEditData(null);
              setShowForm(true);
            }}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-lg shadow"
          >
            <FaPlus size={14} />
            Add Placement
          </button>
        </div>
      </div>

      {showForm && (
        <AddPlacement
          isEdit={!!editData}
          onClose={() => {
            setShowForm(false);
            setEditData(null);
          }}
          onSubmit={handleAddPlacement}
          initialData={editData ? prepareEditData(editData) : undefined}
        />
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Students
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Interview Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Name
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {placementsList.map((placement) => (
              <tr key={placement.id} className="hover:bg-pink-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${placement.studentName}&background=random`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {placement.studentName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {placement.companyName}<br></br>
                  {placement.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {placement.interviewDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {placement.jobName}
                </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative group">
  <button
    className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 focus:outline-none"
    title="Actions"
    aria-label="Actions menu"
    type="button"
  >
    <FaEllipsisV />
  </button>
  
<div className="hidden group-hover:block absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-gray-200 focus:outline-none overflow-hidden">
  {/* Edit Button */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      handleEdit(placement);
    }}
    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 w-full transition-colors duration-150 ease-in-out"
    aria-label="Edit"
  >
    <FaEdit className="mr-2" />
    <span>Edit</span>
  </button>

  {/* Delete Button */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      handleDelete(placement.id);
    }}
    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 w-full transition-colors duration-150 ease-in-out border-t border-gray-100"
    aria-label="Delete"
  >
    <FaTrash className="mr-2" />
    <span>Delete</span>
  </button>
</div>

</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Placements;
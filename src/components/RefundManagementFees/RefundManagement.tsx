import { useEffect, useState } from 'react';
import add from '../../assets/Add.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RefundModal } from './AddModal';

interface Note {
  id: number;
  title: string;
  description: string;
  course: string;
  branch: string;
  status: 'Active' | 'Completed';
  file?: File;
  location: string;
  email: string;
  paid: string;
}

interface FormDataType {
  course: string;
  batch: string;
  student: string;
  studentFee: string;
  amount: string;
}

const RefundManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editNoteId, setEditNoteId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    course: '',
    batch: '',
    student: '',
    studentFee: '',
    amount: '',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const dummyData: Note[] = [
    {
      id: 101,
      title: 'Gokul',
      description: 'Java | ₹35000',
      course: 'Java',
      branch: 'Padur',
      status: 'Active',
      file: undefined,
      location: 'Poland',
      email: 'cbum@gmail.com',
      paid: 'yes',
    },
    {
      id: 102,
      title: 'Armas',
      description: 'Python | ₹25000',
      course: 'Python',
      branch: 'OMR',
      status: 'Completed',
      file: undefined,
      location: 'Germany',
      email: 'ajay@gmail.com',
      paid: 'yes',
    },
    {
      id: 103,
      title: 'Sara',
      description: 'MERN | ₹30000',
      course: 'MERN',
      branch: 'Padur',
      status: 'Active',
      file: undefined,
      location: 'India',
      email: 'sara@gmail.com',
      paid: 'yes',
    },
  ];

  useEffect(() => {
    setNotes(dummyData);
  }, []);

  const handleSubmit = () => {
    if (isEditing && editNoteId !== null) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editNoteId
            ? {
                ...note,
                title: formData.student,
                description: `${formData.batch} | ₹${formData.studentFee}`,
                course: formData.course,
              }
            : note
        )
      );
    } else {
      const newNote: Note = {
        id: Date.now(),
        title: formData.student,
        description: `${formData.batch} | ₹${formData.studentFee}`,
        course: formData.course,
        branch: '',
        status: 'Active',
        location: '',
        email: '',
        paid: 'yes',
      };
      setNotes([newNote, ...notes]);
    }

    setFormData({
      course: '',
      batch: '',
      student: '',
      studentFee: '',
      amount: '',
    });
    setUploadedFile(null);
    setShowModal(false);
    setIsEditing(false);
    setEditNoteId(null);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (note: Note) => {
    const [batch, fee] = note.description.split(' | ₹');
    setFormData({
      course: note.course,
      batch: batch ?? '',
      student: note.title,
      studentFee: fee ?? '',
      amount: '',
    });
    setUploadedFile(note.file ?? null);
    setIsEditing(true);
    setEditNoteId(note.id);
    setShowModal(true);
  };

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch === 'All' ? null : branch);
    setShowBranchDropdown(false);
  };

  const DropdownMenu = ({
    onDelete,
    onEdit,
    isOpen,
    onToggle,
  }: {
    onDelete: () => void;
    onEdit: () => void;
    isOpen: boolean;
    onToggle: () => void;
  }) => {
    return (
      <div className="relative">
        <button onClick={onToggle}>
          <BsThreeDotsVertical className="text-red-600" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-md z-10">
            <button onClick={onEdit} className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">
              Edit
            </button>
            <button
              onClick={onDelete}
              className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full min-h-screen w-full bg-cover bg-center relative">
      <div className="px-10 py-6 space-y-6">
        <div className="flex items-start justify-between">
          <button
            onClick={() => setShowBranchDropdown((prev) => !prev)}
            className="gap-2 flex items-center font-semibold px-4 py-2 ring-2 bg-[#FFFFFF33] ring-[#CA406F] rounded-lg text-[#716F6F] w-2/7"
          >
            Branch
          </button>

          <button
            onClick={() => {
              setShowModal(true);
              setIsEditing(false);
              setEditNoteId(null);
            }}
            className="gap-2 flex items-center bg-[#CA406F] px-4 py-2 rounded-lg text-white shadow-md"
          >
            <img src={add} alt="add" className="h-5 w-5" />
            Add Refund
          </button>
        </div>

        {showBranchDropdown && (
          <div className="w-full bg-white p-4 rounded-lg shadow-md flex gap-4 transition-all duration-300">
            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-2">Select Branch</label>
              <select
                value={selectedBranch || ''}
                onChange={(e) => handleBranchSelect(e.target.value)}
                className="w-full border rounded px-3 py-2 appearance-none"
              >
                <option value="">All</option>
                <option value="Padur">Padur</option>
                <option value="OMR">OMR</option>
              </select>
            </div>
          </div>
        )}

        <div className="bg-white relative p-4 rounded-2xl">
          <div className=" bg-white rounded-2xl overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-[#F8F8F8] h-20 text-lg text-[#716F6F]">
                <tr>
                  <th className="px-4 py-3">Refund ID</th>
                  <th className="px-4 py-3">Student ID</th>
                  <th className="px-4 py-3">Student Info</th>
                  <th className="px-4 py-3">Paid</th>
                  <th className="px-4 py-3">Payment</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[...notes]
                  .filter((note) => !selectedBranch || note.branch === selectedBranch)
                  .map((note) => {
                    const isOpen = openDropdownId === note.id;
                    return (
                      <tr
                        key={note.id}
                        className={` transition-all duration-300 ${
                          isOpen ? 'h-[130px]' : 'h-[80px]'
                        }`}
                      >
                        <td className="px-4 py-3">{`RFND-${note.id.toString().slice(-4)}`}</td>
                        <td className="px-4 py-3">{`STU-${note.id}`}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium">{note.title}</div>
                          <div className="text-sm text-gray-500">{note.description}</div>
                        </td>
                        <td className="px-4 py-3">{note.paid}</td>
                        <td className="px-4 py-3">Online</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              note.status === 'Active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {note.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <DropdownMenu
                            isOpen={isOpen}
                            onToggle={() =>
                              setOpenDropdownId((prev) => (prev === note.id ? null : note.id))
                            }
                            onDelete={() => handleDelete(note.id)}
                            onEdit={() => handleEdit(note)}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <RefundModal
          showModal={showModal}
          setShowModal={setShowModal}
          isEditing={isEditing}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
        />
      )}
    </div>
  );
};

export default RefundManagement;

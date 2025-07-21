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

  const dummyData: Note[] = [ {
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
  ]

 useEffect(() => {
  setNotes(dummyData)
 })

  const handleSubmit = () => {
    const newNote: Note = {
      id: Date.now(),
      title: formData.student,
      description: `${formData.batch} | ₹${formData.studentFee}`,
      course: formData.course,
      branch: '',
      status: 'Active',
      location: '',
      email: '',
      paid:'yes',
    };
    setNotes([newNote, ...notes]);

    // Reset form
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

  const DropdownMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <button onClick={() => setOpen(!open)}>
          <BsThreeDotsVertical className="text-red-600" />
        </button>
        {open && (
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
        <div className="flex items-center justify-between">
          <button
            onClick={() => {}}
            className="gap-2 flex items-center px-4 py-2 ring-2 bg-[#FFFFFF4D] rounded-lg text-[#CA406F] w-2/9 "
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

        <div className="bg-white relative p-4 rounded-2xl">
          <div className=" bg-white rounded-2xl shadow-md overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-200 h-20 text-[#716F6F]">
                <tr className='text-md'>
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
                  .sort((a, b) => a.branch.localeCompare(b.branch))
                  .map((note) => (
                    <tr key={note.id} className="border-t">
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
                        <DropdownMenu onDelete={() => handleDelete(note.id)} onEdit={() => {}} />
                      </td>
                    </tr>
                  ))}
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
          onSubmit={handleSubmit} uploadedFile={null} setUploadedFile={function (file: File | null): void {
            throw new Error('Function not implemented.');
          } }        />
      )}
    </div>
  );
};

export default RefundManagement;

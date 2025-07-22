import { useEffect, useState } from 'react';
import { TbXboxXFilled } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

interface Certificate {
  id: number;
  title: string;
  course: string;
  branch: string;
  batch: string;
  student: string;
  email: string;
}

const initialCertificates: Certificate[] = [
  {
    id: 1,
    title: 'MERN 2025',
    course: 'MERN',
    branch: 'OMR',
    batch: 'MERN 2025',
    student: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    title: 'Python 2024',
    course: 'Python',
    branch: 'Padur',
    batch: 'Python 2024',
    student: 'Jane Smith',
    email: 'jane@example.com',
  },
];

export default function Certificate() {
  const [certificates, setCertificates] = useState(initialCertificates);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);

  const handleAdd = () => {
    setIsEditing(false);
    setEditingCertificate(null);
    setIsModalOpen(true);
  };

  const handleEdit = (cert: Certificate) => {
    setEditingCertificate(cert);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSave = (formData: Partial<Certificate>) => {
    if (isEditing && editingCertificate) {
      setCertificates((prev) =>
        prev.map((item) =>
          item.id === editingCertificate.id
            ? { ...item, title: formData.title || item.title }
            : item
        )
      );
    } else {
      const newCert: Certificate = {
        id: Date.now(),
        title: formData.title || '',
        course: formData.course || '',
        branch: formData.branch || '',
        batch: formData.batch || '',
        student: formData.student || '',
        email: formData.student?.toLowerCase().replace(' ', '') + '@example.com' || '',
      };
      setCertificates((prev) => [...prev, newCert]);
    }
    setIsModalOpen(false);
  };

  const filteredCertificates = certificates.filter((note) => {
    return (
      (!selectedCourse || note.course === selectedCourse) &&
      (!selectedBranch || note.branch === selectedBranch) &&
      (!selectedBatch || note.batch === selectedBatch) &&
      (!selectedStudent || note.student === selectedStudent)
    );
  });

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown-action")) {
      setOpenDropdownId(null);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div className="p-6">
      {/* Filter Toggle Button */}
      <div className="bg-[#CA406F] px-6 py-3 rounded-xl flex justify-between items-center">
        <h2 className="text-white text-lg font-semibold flex"> <FaFilter className='mt-1 mr-2'/> FILTER</h2>
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="bg-white p-1 rounded"
        >
          {showFilter ? (
            <TbXboxXFilled className=" w-6 h-6" />
          ) : (
            <span className="text-green-700 font-semibold px-2">Go</span>
          )}
        </button>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="bg-white mt-5 rounded-xl p-6 shadow-md grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-[#716F6F] mb-1">Course</label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">All</option>
              <option value="MERN">MERN</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div>
            <label className="block text-lg  font-medium text-[#716F6F] mb-1">Branch</label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">All</option>
              <option value="OMR">OMR</option>
              <option value="Padur">Padur</option>
            </select>
          </div>
          <div>
            <label className="block text-lg  font-medium text-[#716F6F] mb-1">Batch</label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
            >
              <option value="">All</option>
              <option value="MERN 2025">MERN 2025</option>
              <option value="Python 2024">Python 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-lg  font-medium text-[#716F6F] mb-1">Student</label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">All</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>
           <div className="flex my-4">
        <button
          onClick={handleAdd}
          className="bg-[#CA406F] text-white px-4 py-2 w-2/5 flex  rounded-lg font-semibold"
        >
          <IoMdAdd className='mt-1 pr-2 w-6'/> Add Student Certificate
        </button>
      </div>
        </div>
      )}
     
     <div className='bg-white shadow-2xl p-4 mt-5 rounded-2xl'>
      <div className="bg-white rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F8F8F8] text-[#716F6F] text-lg h-15">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCertificates.map((note) => (
              <tr key={note.id} className="text-[#716F6F] ">
                <td className="px-6 py-4">{note.id}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#CA406F] text-white flex items-center justify-center font-semibold">
          
                  </div>
                  <div>
                    <div className="font-bold">{note.student}</div>
                    <div className=" text-sm">{note.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold">{note.title}</div>
                  <div className="text-sm">{note.course} • {note.batch}</div>
                </td>
               <td className="px-6 py-4 text-right relative dropdown-action">
  <button
    onClick={() =>
      setOpenDropdownId((prev) => (prev === note.id ? null : note.id))
    }
    className="p-2"
  >
    <BsThreeDotsVertical />
  </button>

  {openDropdownId === note.id && (
    <div className="fixed justiy-end mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          handleEdit(note);
          setOpenDropdownId(null);
        }}
      >
        Edit
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          
          setOpenDropdownId(null);
        }}
      >
        View
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          setCertificates((prev) => prev.filter((c) => c.id !== note.id));
          setOpenDropdownId(null);
        }}
      >
        Delete
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          alert(`Downloading ${note.student}'s certificate`);
          setOpenDropdownId(null);
        }}
      >
        Download
      </button>
    </div>
  )}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      

      {isModalOpen && (
        <div className="fixed inset-0 z-50 text-[#716F6F] flex items-center justify-end  p-6 bg-black/30 backdrop-blur-md">
          <div className="w-full max-w-md h-[90vh] p-5 gap-5 rounded-lg flex flex-col shadow-xl bg-white overflow-hidden">
            <h2 className="text-2xl text-[#716F6F] font-semibold mb-4">
              {isEditing ? 'Edit Certificate' : 'Add Certificate'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = {
                  title: (form.elements.namedItem('title') as HTMLInputElement).value,
                  course: (form.elements.namedItem('course') as HTMLInputElement)?.value,
                  branch: (form.elements.namedItem('branch') as HTMLInputElement)?.value,
                  batch: (form.elements.namedItem('batch') as HTMLInputElement)?.value,
                  student: (form.elements.namedItem('student') as HTMLInputElement)?.value,
                };
                handleSave(formData);
              }}
            >
              <div className="mb-4">
                <label className="block text-lg font-medium mb-1">Student</label>
                <input
                  name="title"
                  defaultValue={editingCertificate?.title || ''}
                  className="w-full border h-13 px-3 py-2 rounded"
                  required
                />
              </div>

              {!isEditing && (
                <>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">Course</label>
                    <select name="course" className="w-full border h-13 px-3 py-2 rounded" required>
                      <option value="">Select</option>
                      <option value="MERN">MERN</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">Branch</label>
                    <select name="branch" className="w-full border h-13 px-3 py-2 rounded" required>
                      <option value="">Select</option>
                      <option value="OMR">OMR</option>
                      <option value="Padur">Padur</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">Batch</label>
                    <select name="batch" className="w-full border h-13 px-3 py-2 rounded" required>
                      <option value="">Select</option>
                      <option value="MERN 2025">MERN 2025</option>
                      <option value="Python 2024">Python 2024</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex justify-end gap-2 mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#0400FF1A] text-[#0400FF] px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#CA406F] text-white px-4 py-2 rounded"
                >
                  {isEditing ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

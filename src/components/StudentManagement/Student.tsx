import React, { useState } from 'react';
import background from '../../assets/Backdrop Image.jpg';
import filter from '../../assets/Mask group.svg';
import add from '../../assets/Add.svg';
import upload from '../../assets/Upload.svg';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import file from '../../assets/File.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import mail from '../../assets/Mail.svg'
import user from '../../assets/User.svg'
import call from '../../assets/Call.svg'
import send from '../../assets/Send.svg'
import { FaLocationDot } from "react-icons/fa6";

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
}

const Student = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editNoteId, setEditNoteId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>([{
    id: 1,
    title: 'Cbum',
    course: 'React',
    description: " ",
    branch: 'CSE',
    status: 'Active',
    location: 'Canada',
    email: 'cbum@gmail.com',
  },
  {
    id: 2,
    title: 'Vijay',
    course: 'React',
    description: " ",
    branch: 'CSE',
    status: 'Active',
    location: 'Chennai',
    email: 'Vijay69@gmail.com',
  },
  {
    id: 3,
    title: 'Vetrimaran',
    course: 'React',
    description: " ",
    branch: 'CSE',
    status: 'Active',
    location: 'Thanjavur',
    email: 'cbum@gmail.com',
  }]);
  const [statusFilter, setStatusFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    course: '',
    branch: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    qualification: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pinCode: '',
    phoneNumber: '',
    altPhoneNumber: '',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);


  const filteredNotes = notes.filter((note) => {
    const statusMatch = statusFilter ? note.status === statusFilter : true;
    const courseMatch = courseFilter ? note.course === courseFilter : true;
    const searchMatch = searchFilter
      ? note.title.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return statusMatch && courseMatch && searchMatch;
  });

  const handleSubmit = () => {
    if (isEditing && editNoteId !== null) {
      setNotes((prev) => prev.map((note) => note.id === editNoteId ? {
        ...note,
        title: formData.firstName + ' ' + formData.lastName,
        description: formData.email,
        course: formData.course,
        branch: formData.branch,
        file: uploadedFile || undefined
      } : note));
    } else {
      const newNote: Note = {
        id: Date.now(),
        title: formData.firstName + ' ' + formData.lastName,
        description: formData.email,
        course: formData.course,
        branch: formData.branch,
        status: 'Active',
        file: uploadedFile || undefined,
        location: formData.city,
        email: formData.email
      };
      setNotes([newNote, ...notes]);
    }

    setFormData({
      title: '', description: '', course: '', branch: '', password: '',
      firstName: '', lastName: '', email: '', dateOfBirth: '', gender: '',
      qualification: '', addressLine1: '', addressLine2: '', city: '',
      state: '', pinCode: '', phoneNumber: '', altPhoneNumber: '',
    });
    setUploadedFile(null);
    setShowModal(false);
    setIsEditing(false);
    setEditNoteId(null);
  };

  const handleEdit = (note: Note) => {
    const nameParts = note.title.split(' ');
    setFormData({
      title: note.title,
      description: note.description,
      course: note.course,
      branch: note.branch,
      password: '',
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(' '),
      email: note.description,
      dateOfBirth: '',
      gender: '',
      qualification: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pinCode: '',
      phoneNumber: '',
      altPhoneNumber: '',
    });
    setUploadedFile(note.file || null);
    setEditNoteId(note.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const DropdownMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <button className='' onClick={() => setOpen(!open)}>
          <BsThreeDotsVertical className='text-red-600' />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-md z-10">
            <button onClick={onEdit} className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">Edit</button>
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
    <div
      className="h-full min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})`}}
    >
      <div className="px-10 py-6 space-y-6">
        <h1 className="text-3xl font-semibold text-[#716F6F]">Student</h1>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="gap-2 flex items-center bg-[#CA406F] px-4 py-2 rounded-lg text-white shadow-md "
          >
            <img src={filter} alt="filter" className="h-5 w-5" />
            {showFilter ? 'Hide' : 'Show Filter'}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="gap-2 flex items-center bg-[#CA406F] px-4 py-2 rounded-lg text-white shadow-md "
          >
            <img src={add} alt="add" className="h-5 w-5" />
            Add New Student
          </button>
        </div>

        {showFilter && (
          <div className="mt-4 grid grid-cols-2 bg-white p-6 rounded-xl shadow-2xl gap-6">
            <div className="flex flex-col w-full relative">
              <label className="text-md font-semibold text-gray-600">Filter By Status</label>
              <select
                className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex flex-col w-full relative">
              <label className="text-md font-semibold text-gray-600">Filter By Course</label>
              <select
                className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
              >
                <option value="">All</option>
                <option>React</option>  
                <option>Java</option> 
              </select>
            </div>
             <div className="flex flex-col w-full relative">
              <label className="text-md font-semibold text-gray-600">Filter By Batches</label>
              <select
                className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
              >
                <option value="">All</option>
                <option>2025</option>
                <option>2020</option>
              </select>
            </div>
            <div className="">
              <label className="text-md font-semibold text-gray-600">Search Student</label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="appearance-none border w-full rounded-md px-3 py-2"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 pt-4">
  {filteredNotes.map((note) => (
    <div key={note.id} className="bg-white rounded-2xl p-4 shadow-xl relative flex flex-col">
       {/* <div className='ml-auto'>
        <DropdownMenu
          onDelete={() => handleDelete(note.id)}
          onEdit={() => handleEdit(note)}
        />
      
        </div> */}
      <div className=" w-full rounded-lg h-34 bg-gray-200  mt-2" />

 
      <h2 className="text-2xl font-bold text-[#716F6F] mt-4">{note.title}</h2>
      <p className="text-md text-[#7D7D7D] mt-2">{note.email}</p>


      <p className="text-md text-[#716F6F] mt-2 flex">
        <FaLocationDot className='mt-1'/>
        <div className='ml-1 '>{note.location}</div>
      </p>

      <div className="flex justify-center gap-5 mt-4 text-pink-600">
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={user} alt="" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={mail} alt="" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={send} alt="" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={call} alt="" />
        </button>
       
      </div>
    </div>
  ))}
</div>

      
      </div>
      
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-md">
    <div className="w-full h-[90vh]  rounded-lg flex flex-col shadow-xl">
      
      {/* Modal Header */}
      

  <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="flex items-center justify-between px-6 py-4 rounded-t-2xl border-b bg-white border-gray-200 sticky top-0 z-10">
        <h2 className="text-2xl font-semibold text-[#CA406F]">Add New Student</h2>
        <button
          onClick={() => setShowModal(false)}
          className="bg-black text-white rounded-full p-1 hover:bg-gray-800"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
        
        <div className='bg-white p-5 rounded-b-2xl'>
          <h1 className="text-2xl text-[#716F6F]">Upload Profile Picture</h1>
          <h4 className="text-sm text-[#716F6F]">Allowed PNG or JPEG, Max Size of 800K</h4>
          <div
            className="border mt-3 border-dashed border-gray-300 bg-white rounded-md text-center py-6 mb-4 cursor-pointer"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
            
              onChange={(e) => {
                const file = e.target.files?.[0]
                 const MAX_FILE_SIZE = 800 * 1024;
                if (file) {
                  if(file.size > MAX_FILE_SIZE) {
                    alert('File size must be less than 800 KB')
                      e.target.value = "";
                      return ;
                  }
                    setUploadedFile(file)
                }
              }}
            />
            <p className="text-sm text-gray-500">
              <img src={upload} alt="upload" className="mx-auto mb-2" />
              {uploadedFile ? uploadedFile.name : 'Drop Files Here Or Click To Upload'}
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg mt-5 shadow">
          <div className="border-b-2 pb-3 mb-4">
            <h1 className="text-2xl font-semibold text-[#716F6F]">Student Details</h1>
            <p className="text-md text-[#716F6F]">Add User Details Here</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "First Name", key: "firstName" },
              { label: "Last Name", key: "lastName" },
              { label: "Email", key: "email" },
              { label: "Date Of Birth", key: "dateOfBirth", type: "date" },
              { label: "Gender", key: "gender" },
              { label: "Qualification", key: "qualification" },
              { label: "Branch", key: "branch" },
              { label: "Course", key: "course" }
            ].map(({ label, key, type }) => (
              <div key={key}>
                <label className="block mb-1 text-lg text-gray-600">{label}</label>
                <input
                  type={type || "text"}
                  className="w-full  border-1 border-gray-300 rounded-md px-3 py-2"
                  value={(formData as any)[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg mt-5 shadow">
          <div className="border-b-2 pb-3 mb-4">
            <h1 className="text-2xl font-semibold text-[#716F6F]">Contact Info</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Address Line 1", key: "addressLine1" },
              { label: "Address Line 2", key: "addressLine2" },
              { label: "City", key: "city" },
              { label: "State", key: "state" },
              { label: "Pin Code", key: "pinCode" },
              { label: "Phone Number", key: "phoneNumber" },
              { label: "Alt Phone Number", key: "altPhoneNumber" }
            ].map(({ label, key }) => (
              <div key={key}>
                <label className="block mb-1 text-lg text-gray-600">{label}</label>
                <input
                  type="text"
                  className="w-full border-1 border-gray-300 rounded-md px-3 py-2"
                  value={(formData as any)[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="p-5 flex rounded-lg justify-end gap-4 bottom-0 z-10">
        <button
          onClick={() => setShowModal(false)}
          className="border border-gray-300 bg-[#0400FF1A] text-[#0400FF] px-4 py-2 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#CA406F] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
      </div> 
      </div>
      
    </div>
  </div>
)}
    </div>
  );
};

export default Student;
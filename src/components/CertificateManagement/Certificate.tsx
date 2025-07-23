import { useEffect, useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye, FaFilter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Certificate {
  id: number;
  title: string;
  description: string;
  branch: string;
  batch: string;
  student: string;
  email: string;
}

const initialCertificates: Certificate[] = [
  {
    id: 1,
    title: "MERN 2025",
    description:
      "The MERN Stack is a collection of Technologies for building web application",
    branch: "OMR",
    batch: "MERN 2025",
    student: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    title: "Python 2024",
    description:
      "The Python Full Stack is a collection of Technologies for building web application",
    branch: "Padur",
    batch: "Python 2024",
    student: "Jane Smith",
    email: "jane@gmail.com",
  },
];

export default function Certificate() {
  const [certificates, setCertificates] = useState(initialCertificates);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editingCertificate, setEditingCertificate] =
    useState<Certificate | null>(null);

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
        title: formData.title || "",
        description: formData.description || "",
        branch: formData.branch || "",
        batch: formData.batch || "",
        student: formData.student || "",
        email:
          formData.student?.toLowerCase().replace(" ", "") + "@example.com" ||
          "",
      };
      setCertificates((prev) => [...prev, newCert]);
    }
    setIsModalOpen(false);
  };

  const filteredCertificates = certificates.filter((note) => {
    return (
      (!selectedCourse || note.description === selectedCourse) &&
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

  const handleNavigate = () => {
    navigate("/certificate/capture");
  };

  return (
    <div className="p-3">
      {/* Filter Toggle Button */}
      <div className="bg-[#CA406F] px-6 py-3 rounded-xl flex justify-between items-center">
        <h2 className="text-white text-lg font-semibold flex">
          {" "}
          <FaFilter className="mt-1 mr-2" /> FILTER
        </h2>
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

      {showFilter && (
        <div className="bg-white mt-5 rounded-xl p-4 shadow-md grid md:grid-cols-2 gap-3">
          <div>
            <label className="block text-lg font-medium text-[#716F6F] mb-1">
              Course
            </label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value=""></option>
              <option value="">All</option>
              <option value="MERN">MERN</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div>
            <label className="block text-lg  font-medium text-[#716F6F] mb-1">
              Branch
            </label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value=""></option>
              <option value="">All</option>
              <option value="OMR">OMR</option>
              <option value="Padur">Padur</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-[#716F6F] mb-1">
              Batch
            </label>
            <select
              className="w-full border h-13 px-3 py-2 rounded"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
            >
              <option value=""></option>
              <option value="">All</option>
              <option value="MERN 2025">MERN 2025</option>
              <option value="Python 2024">Python 2024</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="w-full border mt-8  h-13 px-3 py-2 rounded"
              placeholder="Search Certificates"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            />
          </div>
          <div className="flex my-4">
            <button
              onClick={handleAdd}
              className="bg-[#CA406F] text-white px-4 py-2 w-2/5 flex rounded-lg font-semibold"
            >
              <IoMdAdd className="pr-2 h-6 w-7" /> Add Student Certificate
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow-2xl p-4 mt-5 rounded-2xl">
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
                    <div className="w-10 h-10 rounded-full bg-[#CA406F] text-white flex items-center justify-center font-semibold"></div>
                    <div>
                      <div className="font-bold text-lg">{note.student}</div>
                      <div className=" text-sm">{note.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-lg">{note.title}</div>
                    <div className="text-sm">{note.description}</div>
                  </td>
                  <td className="px-6 py-4 text-right relative dropdown-action">
                    <button
                      onClick={() =>
                        setOpenDropdownId((prev) =>
                          prev === note.id ? null : note.id
                        )
                      }
                      className="p-2"
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {openDropdownId === note.id && (
                      <div className="fixed justiy-end mt-2 w-40 gap-2 grid p-3 bg-white border rounded-lg shadow-lg z-10">
                        <button
                          className="w-full flex text-left hover:bg-[#CA406F] hover:text-white px-4 py-2 border rounded-md "
                          onClick={() => {
                            handleEdit(note);
                            setOpenDropdownId(null);
                          }}
                        >
                          <MdEditDocument className="mt-1 mr-2" />
                          Edit
                        </button>
                        <button
                          className="w-full flex text-left px-4 py-2 rounded-md border hover:bg-[#CA406F] hover:text-white"
                          onClick={() => {
                            handleNavigate();
                            setOpenDropdownId(null);
                          }}
                        >
                          <FaEye className="mt-1 mr-2" />
                          View
                        </button>
                        <button
                          className="w-full flex text-left px-4 py-2 rounded-md border hover:bg-[#CA406F] hover:text-white"
                          onClick={() => {
                            setCertificates((prev) =>
                              prev.filter((c) => c.id !== note.id)
                            );
                            setOpenDropdownId(null);
                          }}
                        >
                          <MdDelete className="mt-1 mr-2" />
                          Delete
                        </button>
                        <button
                          className="w-full flex text-left px-4 py-2 rounded-md border hover:bg-[#CA406F] hover:text-white"
                          onClick={() => {
                            handleNavigate();
                            setOpenDropdownId(null);
                          }}
                        >
                          <IoMdDownload className="mt-1 mr-2" />
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
        <div className="fixed inset-0 z-50 text-[#716F6F] flex items-center justify-end bg-black/30 backdrop-blur-md">
          <div className="w-full max-w-md h-[90vh] p-5 gap-5 rounded-lg flex flex-col shadow-xl bg-white overflow-hidden">
            <div className="flex">
              <h2 className="text-2xl text-[#716F6F] font-semibold mb-4">
                {isEditing ? "Edit Study Material" : "Add Certificate"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white rounded-full ml-auto p-1 h-6 w-6 hover:bg-gray-800"
              >
                <XMarkIcon className="h-6 w-6 pb-2 pr-2 " />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = {
                  title: (form.elements.namedItem("title") as HTMLInputElement)
                    .value,
                  course: (
                    form.elements.namedItem("course") as HTMLInputElement
                  )?.value,
                  branch: (
                    form.elements.namedItem("branch") as HTMLInputElement
                  )?.value,
                  batch: (form.elements.namedItem("batch") as HTMLInputElement)
                    ?.value,
                  student: (
                    form.elements.namedItem("student") as HTMLInputElement
                  )?.value,
                };
                handleSave(formData);
              }}
            >
              <div className="mb-4">
                <label className="block text-xl font-medium mb-1">Title</label>
                <input
                  name="title"
                  className="w-full border h-13 px-3 py-2 rounded"
                  placeholder=" "
                  required
                />
              </div>

              {!isEditing && (
                <>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">
                      Course
                    </label>
                    <select
                      name="course"
                      className="w-full border h-13 px-3 py-2 rounded"
                      required
                    >
                      <option value="">Select</option>
                      <option value="MERN">MERN</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">
                      Branch
                    </label>
                    <select
                      name="branch"
                      className="w-full border h-13 px-3 py-2 rounded"
                      required
                    >
                      <option value="">Select</option>
                      <option value="OMR">OMR</option>
                      <option value="Padur">Padur</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">
                      Batch
                    </label>
                    <select
                      name="batch"
                      className="w-full border h-13 px-3 py-2 rounded"
                      required
                    >
                      <option value="">Select</option>
                      <option value="MERN 2025">MERN 2025</option>
                      <option value="Python 2024">Python 2024</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex justify-end gap-8 mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#0400FF1A] text-[#0400FF] px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#CA406F] text-white px-4 py-2 rounded-lg"
                >
                  {isEditing ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
// import background from "../../assets/Backdrop Image.jpg"

import type { Note, FormData } from "./Student";
import StudentList from "./StudentList";
import AddEditModal from "./AddModal";
import FilterSection from "./FilterSection";

const StudentIndex = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Note | null>(null);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Cbum",
      course: "React",
      description: " ",
      branch: "CSE",
      status: "Active",
      location: "Canada",
      email: "cbum@gmail.com",
    },
    {
      id: 2,
      title: "Vijay",
      course: "React",
      description: " ",
      branch: "CSE",
      status: "Active",
      location: "Chennai",
      email: "Vijay69@gmail.com",
    },
    {
      id: 3,
      title: "Vetrimaran",
      course: "React",
      description: " ",
      branch: "CSE",
      status: "Active",
      location: "Thanjavur",
      email: "cbum@gmail.com",
    },
  ]);

  const [statusFilter, setStatusFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredNotes = notes.filter((note) => {
    const statusMatch = statusFilter ? note.status === statusFilter : true;
    const courseMatch = courseFilter ? note.course === courseFilter : true;
    const searchMatch = searchFilter
      ? note.title.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return statusMatch && courseMatch && searchMatch;
  });

  const handleSubmit = (formData: FormData, uploadedFile: File | null) => {
    if (isEditing && editingStudent) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingStudent.id
            ? {
                ...note,
                title: formData.firstName + " " + formData.lastName,
                description: formData.email,
                course: formData.course,
                branch: formData.branch,
                location: formData.city,
                email: formData.email,
                file: uploadedFile || undefined,
              }
            : note
        )
      );
    } else {
      const newNote: Note = {
        id: Date.now(),
        title: formData.firstName + " " + formData.lastName,
        description: formData.email,
        course: formData.course,
        branch: formData.branch,
        status: "Active",
        file: uploadedFile || undefined,
        location: formData.city,
        email: formData.email,
      };
      setNotes([newNote, ...notes]);
    }

    setShowModal(false);
    setIsEditing(false);
    setEditingStudent(null);
  };

  const handleEdit = (note: Note) => {
    setEditingStudent(note);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setEditingStudent(null);
    setShowModal(true);
  };

  return (
    <div className="h-full min-h-screen w-full bg-cover bg-center relative">
      <div className="px-10 py-6 space-y-6">
        <h1 className="text-3xl font-semibold text-[#716F6F]">Student</h1>

        <div className="flex items-center justify-between">
          <FilterSection
            showFilter={showFilter}
            onToggleFilter={() => setShowFilter(!showFilter)}
            statusFilter={statusFilter}
            courseFilter={courseFilter}
            searchFilter={searchFilter}
            onStatusFilterChange={setStatusFilter}
            onCourseFilterChange={setCourseFilter}
            onSearchFilterChange={setSearchFilter}
          />

          <button
            onClick={handleAddNew}
            className="gap-2 flex items-center bg-[#CA406F] px-4 py-2 rounded-lg text-white shadow-md"
          >
            Add New Student
          </button>
        </div>

        <StudentList
          students={filteredNotes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <AddEditModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        isEditing={isEditing}
      />
    </div>
  );
};

export default StudentIndex;

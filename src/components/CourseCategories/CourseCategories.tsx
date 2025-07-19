"use client"

import type React from "react"
import { useState } from "react"
import { MoreVertical, X, Plus, ChevronRight } from "lucide-react"

import image from "../../assets/image.png";
import mern from "../../assets/mern.png";
import backdropImg from "../../assets/backdropimage.png";
import FilterIcon from "../../assets/Filter.png";
import DeleteIcon from "../../assets/delete.png";
import EditIcon from "../../assets/edit.png";
import UploadIcon from "../../assets/upload.png";

// Custom Select Component
type CustomSelectOption = { label: string; value: string };

interface CustomSelectProps {
  options: CustomSelectOption[];
  selected: string;
  setSelected: (value: string) => void;
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selected, setSelected, placeholder }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-12 border border-[#716F6F] rounded-lg px-4 flex items-center justify-between text-[#716F6F] bg-white"
      >
        <span className="truncate text-left">
          {selected ? options.find((opt) => opt.value === selected)?.label : placeholder}
        </span>
        <ChevronRight className="transform rotate-90 text-[#716F6F]" />
      </button>
      {open && (
        <ul className="absolute w-full bg-white border border-[#716F6F] rounded-lg mt-1 z-20 max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                setSelected(opt.value)
                setOpen(false)
              }}
              className="px-4 py-2 text-[#716F6F] hover:bg-[#CA406F] hover:text-white cursor-pointer"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Updated Status Dropdown Component with the provided design
const StatusDropdown = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (status: string) => {
    onChange(status)
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col items-start gap-[30px] w-[372px] h-[80px]">
      <div className="flex flex-col items-start gap-[8px] w-[372px] h-[80px]">
        <div className="w-[372px] h-[24px] text-[#716F6F] font-[Poppins] text-[16px] font-medium leading-[24px]">
          Status
        </div>

        <div className="relative w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row justify-between items-center w-[372px] h-[48px] px-[16px] py-[12px] border border-[#716F6F] rounded-[8px]"
          >
            <span className="text-[#716F6F] font-[Poppins] text-[18px] font-light leading-[27px]">
              {value === "active" ? "Active" : "Inactive"}
            </span>
            <ChevronRight className={`transform ${isOpen ? "rotate-90" : "rotate-0"} text-[#716F6F]`} />
          </button>

          {isOpen && (
            <div className="absolute z-20 mt-1 left-0">
              {/* Container matching the provided CSS design */}
              <div className="flex flex-col items-start p-4 gap-4 relative w-[143px] h-[128px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-[12px]">
                {/* Active Option */}
                <button
                  onClick={() => handleSelect("active")}
                  className="flex flex-col justify-center items-start px-4 gap-[10px] w-[111px] h-[40px] bg-[#CA406F] rounded-[8px] flex-none order-0"
                >
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[49px] h-[24px] flex-none order-0">
                    <span className="w-[49px] h-[18px] font-['Poppins'] font-medium text-[12px] leading-[18px] capitalize text-white flex-none order-0">
                      Active
                    </span>
                  </div>
                </button>

                {/* Inactive Option */}
                <button
                  onClick={() => handleSelect("inactive")}
                  className="flex flex-col justify-center items-start px-4 gap-[10px] w-[111px] h-[40px] bg-[#CA406F] rounded-[8px] flex-none order-1"
                >
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[49px] h-[24px] flex-none order-0">
                    <span className="w-[49px] h-[18px] font-['Poppins'] font-medium text-[12px] leading-[18px] capitalize text-white flex-none order-0">
                      Inactive
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const EditCategoryOptions = ({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) => {
  return (
    <div className="flex flex-col items-start p-3 gap-[20px] w-[160px] h-[120px] bg-white rounded-[10px] absolute top-12 right-4 shadow-lg z-20">
      <div className="flex flex-col items-start gap-4 w-full">
        <button
          className="flex flex-row items-center gap-2 w-full px-3 py-2 bg-[#CA406F] rounded-[8px]"
          onClick={onEdit}
        >
          <img src={EditIcon} alt="Edit" className="w-5 h-5" />
          <span className="text-white text-[14px] leading-[20px] font-medium font-[Poppins]">Edit</span>
        </button>
        <button
          className="flex flex-row items-center gap-2 w-full px-3 py-2 border border-[#716F6F] rounded-[8px]"
          onClick={onDelete}
        >
          <img src={DeleteIcon} alt="Delete" className="w-5 h-5" />
          <span className="text-[#716F6F] text-[14px] leading-[20px] font-medium font-[Poppins]">Delete</span>
        </button>
      </div>
    </div>
  )
}


const AddEditCategoryModal = ({
  onClose,
  mode = "add",
  initialData = { name: "", image: null },
  onSave,
}: {
  onClose: () => void
  mode?: "add" | "edit"
  initialData?: { name: string; image: string | null }
  onSave: (data: { name: string; image: File | null }) => void
}) => {
  const [categoryName, setCategoryName] = useState(initialData.name)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(initialData.image)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleSave = () => {
    onSave({
      name: categoryName,
      image: imageFile,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[608px] bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.15)] p-4 flex flex-col gap-[30px] relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="text-[#716F6F]" />
        </button>

        <div className="flex flex-col gap-[30px] w-full items-start">
          <div className="flex flex-col gap-3 w-[468px]">
            <h2 className="text-[20px] font-semibold text-[#7D7D7D] capitalize">
              {mode === "add" ? "Add" : "Edit"} Category
            </h2>
            <p className="text-[18px] font-light text-[#7D7D7D] capitalize">
              Create a new course category with an image
            </p>
          </div>

          <div className="w-full border border-[#BDC2C7BF]" />

          {previewImage && (
            <div className="w-full h-[200px] rounded-xl overflow-hidden">
              <img src={previewImage || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex flex-col gap-[12px] w-full">
            <label className="text-[#716F6F] text-[16px] font-medium capitalize">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full h-[48px] border border-[#716F6F] rounded-lg px-4 py-3 text-[#6C6C6C] placeholder-[#6C6C6C] focus:outline-none"
              placeholder="Enter category name"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-[#7D7D7D] capitalize">
              Recommended: 388x300 Pixels Accepted Formats: PNG, JPEG
            </label>
            <label className="flex items-center justify-center px-4 py-3 gap-[10px] w-[181px] h-[48px] bg-[#CA406F] rounded-[12px] cursor-pointer relative">
              <img src={UploadIcon} alt="Upload" className="w-6 h-6 absolute left-4" />
              <span className="text-white font-[Poppins] text-[16px] font-medium leading-[24px] capitalize">Upload Image</span>
              <input type="file" onChange={handleImageUpload} className="hidden" accept="image/png, image/jpeg" />
            </label>
          </div>
        </div>

        <div className="flex gap-[30px] w-[262px] self-end">
          <button
            onClick={onClose}
            className="bg-[rgba(4,0,255,0.1)] border border-[#0400FF] rounded-lg text-[#0400FF] text-[12px] font-medium px-4 py-2 w-[98px] h-[40px]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-[#CA406F] rounded-lg text-white text-[12px] font-medium px-4 py-2 w-[134px] h-[40px]"
          >
            {mode === "add" ? "Create" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  )
}

const CourseCategories = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [statusFilter, setStatusFilter] = useState("")
  const [courseFilter, setCourseFilter] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [modalMode, setModalMode] = useState<"add" | "edit">("add")
  const [currentEditData, setCurrentEditData] = useState<{ name: string; image: string | null } | null>(null)
  const [categories, setCategories] = useState([
    { id: 1, title: "Mern", image: image, status: "active" },
    { id: 2, title: "Mern", image: mern, status: "active" },
  ])

  const handleAddCategory = () => {
    setModalMode("add")
    setCurrentEditData(null)
    setShowModal(true)
  }

  const handleEditCategory = (id: number) => {
    const category = categories.find((c) => c.id === id)
    if (category) {
      setModalMode("edit")
      setEditId(id)
      setCurrentEditData({
        name: category.title,
        image: category.image,
      })
      setShowModal(true)
    }
  }

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id))
    setEditId(null)
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setCategories(categories.map((c) => (c.id === id ? { ...c, status: newStatus } : c)))
  }

  const handleSaveCategory = (data: { name: string; image: File | null }) => {
    if (modalMode === "add") {
      const newCategory = {
        id: Math.max(...categories.map((c) => c.id), 0) + 1,
        title: data.name,
        image: data.image ? URL.createObjectURL(data.image) : image,
        status: "active",
      }
      setCategories([...categories, newCategory])
    } else if (modalMode === "edit" && editId) {
      setCategories(
        categories.map((c) =>
          c.id === editId
            ? {
                ...c,
                title: data.name,
                image: data.image ? URL.createObjectURL(data.image) : c.image,
              }
            : c,
        ),
      )
    }
    setEditId(null)
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${backdropImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <main className="absolute left-[32px] top-[40px] w-[calc(100%-64px)] p-6 z-10">
        <h1 className="text-2xl font-semibold text-[#716F6F] mb-6">Course Categories</h1>

        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-[#CA406F] text-white px-4 py-3 rounded-lg flex items-center gap-2 h-12"
          >
            <img src={FilterIcon || "/placeholder.svg"} alt="Filter" className="w-6 h-6" />
            <span className="text-sm font-medium">{showFilters ? "Hide" : "Show Filter"}</span>
          </button>

          <button
            onClick={handleAddCategory}
            className="bg-[#CA406F] text-white px-4 py-3 rounded-lg flex items-center gap-2 h-12"
          >
            <Plus size={20} />
            <span className="text-sm font-medium">Add New Category</span>
          </button>
        </div>

        {showFilters && (
          <div className="mb-8">
            <div className="relative w-[360px] h-12 border-2 border-[#CA406F] rounded-lg bg-gradient-to-b from-white/20 to-white/0 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search Categories"
                className="w-full h-full bg-transparent px-4 py-3 text-[#6C6C6C] placeholder-[#6C6C6C] focus:outline-none"
              />
            </div>

            <div className="w-full bg-white p-6 rounded-xl shadow-lg mt-4">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <label className="block text-[#716F6F] text-sm font-medium mb-2">Status</label>
                  <CustomSelect
                    selected={statusFilter}
                    setSelected={setStatusFilter}
                    placeholder="Filter by Status"
                    options={[
                      { label: "Filter by Status", value: "" },
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                      { label: "Draft", value: "draft" },
                    ]}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#716F6F] text-sm font-medium mb-2">Course</label>
                  <CustomSelect
                    selected={courseFilter}
                    setSelected={setCourseFilter}
                    placeholder="Filter by Course"
                    options={[
                      { label: "Filter by Course", value: "" },
                      { label: "React", value: "react" },
                      { label: "Advanced CSS", value: "css" },
                      { label: "JavaScript", value: "js" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-start gap-8 pl-2">
          {categories.map((card) => (
            <div
              key={card.id}
              className="w-[400px] bg-white rounded-xl shadow-md p-4 relative transition-transform hover:scale-105 duration-200"
            >
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              <div className="mt-4 flex items-start justify-between relative">
                <h3 className="text-[#CA406F] font-semibold text-lg">{card.title}</h3>
                <div className="relative">
                  <MoreVertical
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setEditId(editId === card.id ? null : card.id)}
                  />
                  {editId === card.id && (
                    <EditCategoryOptions
                      onEdit={() => {
                        handleEditCategory(card.id)
                        setEditId(null)
                      }}
                      onDelete={() => handleDeleteCategory(card.id)}
                    />
                  )}
                </div>
              </div>

              <div className="mt-4">
                <StatusDropdown value={card.status} onChange={(value) => handleStatusChange(card.id, value)} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {showModal && (
        <AddEditCategoryModal
          onClose={() => setShowModal(false)}
          mode={modalMode}
          initialData={currentEditData || { name: "", image: null }}
          onSave={handleSaveCategory}
        />
      )}
    </div>
  )
}

export default CourseCategories
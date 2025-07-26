"use client"

import { useState, useEffect, useRef } from "react"
import { MoreVertical, X, Plus, ChevronRight } from "lucide-react"

import Image from "../../../assets/image.png"
import mern from "../../../assets/mern.png"
import FilterIcon from "../../../assets/Filter.png"
import DeleteIcon from "../../../assets/delete.png"
import EditIcon from "../../../assets/edit.png"
import UploadIcon from "../../../assets/uload.png"

// Custom Select Component
type CustomSelectOption = { label: string; value: string }

interface CustomSelectProps {
  options: CustomSelectOption[]
  selected: string
  setSelected: (value: string) => void
  placeholder: string
  disabled?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  options, 
  selected, 
  setSelected, 
  placeholder,
  disabled = false
}) => {
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full h-12 border border-[#716F6F] rounded-lg px-4 flex items-center justify-between text-[#716F6F] bg-white ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
      >
        <span className="truncate text-left">
          {selected ? options.find((opt) => opt.value === selected)?.label : placeholder}
        </span>
        <ChevronRight className={`transform ${open ? "rotate-90" : "rotate-0"} text-[#716F6F]`} />
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

const StatusDropdown = ({ 
  value, 
  onChange,
  disabled = false
}: { 
  value: string; 
  onChange: (value: string) => void;
  disabled?: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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

        <div className="relative w-full" ref={dropdownRef}>
          <button
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={`flex flex-row justify-between items-center w-[372px] h-[48px] px-[16px] py-[12px] border border-[#716F6F] rounded-[8px] ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={disabled}
          >
            <span className="text-[#716F6F] font-[Poppins] text-[18px] font-light leading-[27px]">
              {value === "active" ? "Active" : "Inactive"}
            </span>
            <ChevronRight className={`transform ${isOpen ? "rotate-90" : "rotate-0"} text-[#716F6F]`} />
          </button>

          {isOpen && (
            <div className="absolute z-20 mt-1 left-0">
              <div className="flex flex-col items-start p-4 gap-4 relative w-[143px] h-[128px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-[12px]">
                <button
                  onClick={() => handleSelect("active")}
                  className="flex flex-col justify-center items-start px-4 gap-[10px] w-[111px] h-[40px] bg-[#CA406F] rounded-[8px] flex-none order-0 hover:bg-[#e0527c] transition-colors"
                >
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[49px] h-[24px] flex-none order-0">
                    <span className="w-[49px] h-[18px] font-['Poppins'] font-medium text-[12px] leading-[18px] capitalize text-white flex-none order-0">
                      Active
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect("inactive")}
                  className="flex flex-col justify-center items-start px-4 gap-[10px] w-[111px] h-[40px] bg-[#CA406F] rounded-[8px] flex-none order-1 hover:bg-[#e0527c] transition-colors"
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

const EditCategoryOptions = ({ 
  onEdit, 
  onDelete,
  onClose 
}: { 
  onEdit: () => void; 
  onDelete: () => void;
  onClose: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [hoveredButton, setHoveredButton] = useState<"edit" | "delete" | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div 
      className="flex flex-col items-start p-3 gap-[20px] w-[170px] h-[132px] bg-white rounded-[12px] absolute top-12 right-4 shadow-lg z-20"
      ref={dropdownRef}
    >
      <div className="flex flex-col items-start gap-3 w-[144px] h-[104px]">
        {/* Edit Button */}
        <div className="flex flex-col items-start w-[144px] h-[44px]">
          <button
            className={`flex flex-row items-center px-3 py-2 gap-2 w-full h-full rounded-[8px] border ${
              hoveredButton === "edit" 
                ? "bg-[#CA406F] border-transparent text-white" 
                : "border-[#716F6F] bg-white text-[#716F6F]"
            } transition-colors`}
            onClick={onEdit}
            onMouseEnter={() => setHoveredButton("edit")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <img 
              src={EditIcon} 
              alt="Edit" 
              className="w-5 h-5" 
              style={{ 
                filter: hoveredButton === "edit" 
                  ? "brightness(0) invert(1)" 
                  : "brightness(0) invert(0)" 
              }}
            />
            <span className="font-[Poppins] text-[15px] font-medium leading-[22px]">
              Edit
            </span>
          </button>
        </div>

        {/* Delete Button */}
        <div className="flex flex-col items-start w-[144px] h-[44px]">
          <button
            className={`flex flex-row items-center px-3 py-2 gap-2 w-full h-full rounded-[8px] border ${
              hoveredButton === "delete" ? "bg-[#CA406F] border-transparent" : "border-[#716F6F] bg-white"
            } transition-colors`}
            onClick={onDelete}
            onMouseEnter={() => setHoveredButton("delete")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <img 
              src={DeleteIcon} 
              alt="Delete" 
              className="w-5 h-5" 
              style={{ 
                filter: hoveredButton === "delete" ? 
                  "brightness(0) invert(1)" : 
                  "brightness(0) invert(44%) sepia(3%) saturate(675%) hue-rotate(314deg)" 
              }}
            />
            <span className={`font-[Poppins] text-[15px] font-medium leading-[22px] ${
              hoveredButton === "delete" ? "text-white" : "text-[#716F6F]"
            }`}>
              Delete
            </span>
          </button>
        </div>
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
  const [imageError, setImageError] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setImageError(false)
      
      // Create preview URL
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string)
      }
      reader.onerror = () => {
        setImageError(true)
        setPreviewImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageError = () => {
    setImageError(true)
    setPreviewImage(null)
  }

  const handleSave = () => {
    if (!categoryName.trim()) {
      return
    }

    if (imageError) {
      return
    }

    onSave({
      name: categoryName,
      image: imageError ? null : imageFile,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div 
        className="w-[608px] bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.15)] p-4 flex flex-col gap-[30px] relative"
        ref={modalRef}
      >
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

          {previewImage && !imageError ? (
            <div className="w-full h-[200px] rounded-xl overflow-hidden">
              <img 
                src={previewImage} 
                alt="Preview" 
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          ) : (
            <div className="w-full h-[200px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">No image or image failed to load</span>
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
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-[#7D7D7D] capitalize">
              Recommended: 388x300 Pixels Accepted Formats: PNG, JPEG
            </label>
            <label className="flex items-center justify-center px-4 py-3 gap-[10px] w-[181px] h-[48px] bg-[#CA406F] rounded-[12px] cursor-pointer relative hover:bg-[#e0527c] transition-colors">
              <img src={UploadIcon} alt="Upload" className="w-6 h-6 absolute left-3" />
 <span className="text-white font-[Poppins] text-[16px] font-medium leading-[24px] capitalize ml-8">Upload Image</span>            
           <input 
                type="file" 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/png, image/jpeg, image/jpg" 
                required={mode === "add"}
              />
            </label>
            {imageError && (
              <span className="text-red-500 text-sm">Failed to load image. Please try another one.</span>
            )}
          </div>
        </div>

        <div className="flex gap-[30px] w-[262px] self-end">
          <button
            onClick={onClose}
            className="bg-[rgba(4,0,255,0.1)] border border-[#0400FF] rounded-lg text-[#0400FF] text-[12px] font-medium px-4 py-2 w-[98px] h-[40px] hover:bg-[rgba(4,0,255,0.2)] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-[#CA406F] rounded-lg text-white text-[12px] font-medium px-4 py-2 w-[134px] h-[40px] hover:bg-[#e0527c] transition-colors"
          >
            {mode === "add" ? "Create" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  )
}

const Categories = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [statusFilter, setStatusFilter] = useState("")
  const [courseFilter, setCourseFilter] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [modalMode, setModalMode] = useState<"add" | "edit">("add")
  const [currentEditData, setCurrentEditData] = useState<{ name: string; image: string | null } | null>(null)
  const [categories, setCategories] = useState([
    { id: 1, title: "Mern", image: Image, status: "active" },
    { id: 2, title: "Mern", image: mern, status: "active" },
    { id: 3, title: "React", image: Image, status: "inactive" },
  ])
  const pageRef = useRef<HTMLDivElement>(null)

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setEditId(null)
        setShowFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleAddCategory = () => {
    setModalMode("add")
    setCurrentEditData({ name: "", image: null })
    setShowModal(true)
    setEditId(null)
    setShowFilters(false)
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
        image: data.image ? URL.createObjectURL(data.image) : Image,
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
    setShowModal(false)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
    setEditId(null)
  }

  const handleOpenEditDropdown = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setEditId(editId === id ? null : id)
  }

  const handleImageError = (id: number) => {
    setCategories(categories.map(c => 
      c.id === id ? { ...c, image: "" } : c
    ))
  }

  return (
    <div className="relative min-h-screen mx-auto w-full" ref={pageRef}>
      <main className="w-full p-4 z-10 max-w-[1800px] mx-auto">
        <h1 className="text-2xl font-semibold text-[#716F6F] mb-4">Course Categories</h1>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={toggleFilters}
            className="bg-[#CA406F] text-white px-4 py-2 rounded-lg flex items-center gap-2 h-12 hover:bg-[#e0527c] transition-colors"
          >
            <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
            <span className="text-sm font-medium">{showFilters ? "Hide" : "Show"} Filter</span>
          </button>

          <button
            onClick={handleAddCategory}
            className="bg-[#CA406F] text-white px-4 py-2 rounded-lg flex items-center gap-2 h-12 hover:bg-[#e0527c] transition-colors"
          >
            <Plus size={18} />
            <span className="text-sm font-medium">Add New Category</span>
          </button>
        </div>

        {showFilters && (
          <div className="mb-6">
            <div className="relative w-[320px] h-12 border-2 border-[#CA406F] rounded-lg bg-gradient-to-b from-white/20 to-white/0 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search Categories"
                className="w-full h-full bg-transparent px-4 py-2 text-[#6C6C6C] placeholder-[#6C6C6C] focus:outline-none"
              />
            </div>

            <div className="w-full bg-white p-4 rounded-xl shadow-lg mt-3">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[#716F6F] text-sm font-medium mb-1">Status</label>
                  <CustomSelect
                    selected={statusFilter}
                    setSelected={setStatusFilter}
                    placeholder="Filter by Status"
                    options={[
                      { label: "Filter by Status", value: "" },
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                    ]}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#716F6F] text-sm font-medium mb-1">Course</label>
                  <CustomSelect
                    selected={courseFilter}
                    setSelected={setCourseFilter}
                    placeholder="Filter by Course"
                    options={[
                      { label: "Filter by Course", value: "" },
                      { label: "React", value: "react" },
                      { label: "Mern", value: "mern" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm p-3 relative transition-transform hover:scale-[1.02] duration-200"
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[150px] object-cover rounded-md"
                  onError={() => handleImageError(card.id)}
                />
              ) : (
                <div className="w-full h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No image available</span>
                </div>
              )}

              <div className="mt-3 flex items-start justify-between relative">
                <h3 className="text-[#CA406F] font-semibold text-base">{card.title}</h3>
                <div className="relative">
                  <MoreVertical
                    className="text-gray-500 cursor-pointer hover:text-[#CA406F] transition-colors"
                    onClick={(e) => handleOpenEditDropdown(card.id, e)}
                  />
                  {editId === card.id && (
                    <EditCategoryOptions
                      onEdit={() => handleEditCategory(card.id)}
                      onDelete={() => handleDeleteCategory(card.id)}
                      onClose={() => setEditId(null)}
                    />
                  )}
                </div>
              </div>

              <div className="mt-3">
                <StatusDropdown 
                  value={card.status} 
                  onChange={(value) => handleStatusChange(card.id, value)}
                  disabled={editId === card.id}
                />
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

export default Categories
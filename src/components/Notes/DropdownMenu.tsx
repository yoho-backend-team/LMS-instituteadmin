import type React from "react"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

interface DropdownMenuProps {
  onEdit: () => void
  onDelete: () => void
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <BsThreeDotsVertical className="text-red-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-md z-10">
          <button
            onClick={() => {
              onEdit()
              setOpen(false)
            }}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDelete()
              setOpen(false)
            }}
            className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

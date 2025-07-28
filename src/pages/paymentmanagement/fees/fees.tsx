"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal, Eye, Edit, Trash2, Download, X } from "lucide-react"
import React, { useState, useRef, useEffect } from "react"
import FilterIcon from "../../../assets/Filter.png"


interface Student {
  name: string
  email: string
  avatar: string
}

interface FeeRecord {
  id: string
  transactionId: string | null
  student: Student
  amountPaid: number
  issuedDate: string | null
  status: "active" | "pending" | "inactive"
}

const feeData: FeeRecord[] = [
  {
    id: "#28",
    transactionId: null,
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 0,
    issuedDate: null,
    status: "active",
  },
  {
    id: "#30",
    transactionId: null,
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 0,
    issuedDate: null,
    status: "active",
  },
  {
    id: "#31",
    transactionId: "198",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "active",
  },
  {
    id: "#34",
    transactionId: "123456",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 5000,
    issuedDate: "2025-05-07",
    status: "active",
  },
  {
    id: "#35",
    transactionId: "197",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "active",
  },
  {
    id: "#36",
    transactionId: "199",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "active",
  },
]

interface ActionMenuProps {
  record: FeeRecord
  onView: (record: FeeRecord) => void
  onEdit: (record: FeeRecord) => void
}

const ActionMenu: React.FC<ActionMenuProps> = ({ record, onView, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleView = () => {
    onView(record)
    setIsOpen(false)
  }

  const handleEdit = () => {
    onEdit(record)
    setIsOpen(false)
  }

  const handleDelete = () => {
    console.log(`Delete record ${record.id}`)
    setIsOpen(false)
  }

  const handleDownload = () => {
    console.log(`Download record ${record.id}`)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreHorizontal className="w-6 h-6 text-[#CA406F] rotate-90" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col p-2 gap-2">
            {/* View Button */}
            <button 
              onClick={handleView} 
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                hoveredButton === "view" 
                  ? "bg-[#CA406F] text-white" 
                  : "bg-[#CA406F] text-white opacity-90"
              } transition-colors`}
              onMouseEnter={() => setHoveredButton("view")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Eye className="w-4 h-4" />
              <span>View</span>
            </button>
            
            {/* Edit Button */}
            <button 
              onClick={handleEdit} 
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md border ${
                hoveredButton === "edit" 
                  ? "border-[#CA406F] bg-[#CA406F] text-white" 
                  : "border-[#716F6F] text-[#716F6F]"
              } transition-colors`}
              onMouseEnter={() => setHoveredButton("edit")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
            
            {/* Delete Button */}
            <button 
              onClick={handleDelete} 
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md border ${
                hoveredButton === "delete" 
                  ? "border-[#CA406F] bg-[#CA406F] text-white" 
                  : "border-[#716F6F] text-[#716F6F]"
              } transition-colors`}
              onMouseEnter={() => setHoveredButton("delete")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
            
            {/* Download Button */}
            <button 
              onClick={handleDownload} 
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md border ${
                hoveredButton === "download" 
                  ? "border-[#CA406F] bg-[#CA406F] text-white" 
                  : "border-[#716F6F] text-[#716F6F]"
              } transition-colors`}
              onMouseEnter={() => setHoveredButton("download")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const ViewFeeModal: React.FC<{ onClose: () => void; record: FeeRecord }> = ({ onClose, record }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end  bg-opacity-30 pt-16">
      <div className="flex flex-col items-start p-6 gap-6 w-[380px] max-h-[80vh] overflow-y-auto bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-lg">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-xl font-semibold text-[#716F6F]">Fees Details</h2>
          <button onClick={onClose} className="text-[#716F6F] hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Profile */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
            {record.student.avatar ? (
              <img src={record.student.avatar} alt="Student" className="w-full h-full rounded-full" />
            ) : (
              <span className="text-2xl font-semibold text-[#CA406F]">
                {record.student.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-md font-bold text-[#716F6F]">{record.student.name}</h3>
            <p className="text-sm text-[#7D7D7D]">{record.student.email}</p>
          </div>
        </div>

        {/* Student Details Section */}
        <div className="w-full space-y-4">
          <h3 className="text-xl font-semibold text-[#716F6F]">Student Details:</h3>
          
          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Transaction ID</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                {record.transactionId || "N/A"}
              </span>
            </div>
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Student Name</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                {record.student.name}
              </span>
            </div>
          </div>

          {/* Student Email */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Student Email</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                {record.student.email}
              </span>
            </div>
          </div>

          {/* Student ID */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Student ID</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                {record.id}
              </span>
            </div>
          </div>

          {/* Paid Amount */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Paid Amount</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                ${record.amountPaid.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Payment Date */}
          <div>
            <label className="block text-sm font-medium text-[#716F6F] mb-1">Payment Date</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <span className="text-md text-[#716F6F]">
                {record.issuedDate || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddFeeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    branch: '',
    course: '',
    batch: '',
    student: '',
    paymentDate: '',
    transactionId: '',
    paidAmount: '',
    balance: '',
    duePaymentDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-lg mt-20 w-[380px] h-[calc(100vh-100px)] overflow-y-auto right-0">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#716F6F]">Add Fees</h2>
          <button onClick={onClose} className="text-[#716F6F] hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* Select Branch */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Select Branch</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                placeholder="Select"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#716F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Select Course */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Select Course</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                placeholder="Select"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#716F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Batch */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Batch</label>
            <div className="flex items-center p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleInputChange}
                placeholder="Select"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Student */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Student</label>
            <div className="flex items-center p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="text"
                name="student"
                value={formData.student}
                onChange={handleInputChange}
                placeholder="Select"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Payment Date */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Payment Date</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleInputChange}
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Transaction ID */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Transaction ID</label>
            <div className="flex items-center justify-between p-2 w-full border-b border-[#716F6F] rounded-md">
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                placeholder="Enter ID"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Paid Amount */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Paid Amount</label>
            <div className="flex items-center justify-between p-2 w-full border-b border-[#716F6F] rounded-md">
              <input
                type="number"
                name="paidAmount"
                value={formData.paidAmount}
                onChange={handleInputChange}
                placeholder="Enter Amount"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Balance */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Balance</label>
            <div className="flex items-center justify-between p-2 w-full border-b border-[#716F6F] rounded-md">
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleInputChange}
                placeholder="Enter Balance"
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>

          {/* Due Payment Date */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#716F6F]">Due Payment Date</label>
            <div className="flex items-center justify-between p-2 w-full border border-[#716F6F] rounded-md">
              <input
                type="date"
                name="duePaymentDate"
                value={formData.duePaymentDate}
                onChange={handleInputChange}
                className="text-sm text-[#716F6F] w-full outline-none"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 p-4 border-t border-gray-200">
          <button onClick={onClose} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md border border-blue-600 text-sm font-medium">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#CA406F] text-white rounded-md text-sm font-medium">
            Create Fee
          </button>
        </div>
      </div>
    </div>
  );
};


const EditFeeModal: React.FC<{ onClose: () => void; record: FeeRecord }> = ({ onClose, record }) => {
  const [formData, setFormData] = useState({
    transactionId: record.transactionId || '',
    amountPaid: record.amountPaid.toString(),
    paymentDate: record.issuedDate || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Updated fee data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-opacity-30 pt-16">
      <div className="flex flex-col items-start p-5 gap-5 w-[360px] max-h-[820px] overflow-y-auto bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl font-semibold text-[#716F6F]">Edit Fees</h2>
          <button onClick={onClose} className="text-[#716F6F] hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Profile */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="w-[90px] h-[90px] rounded-full bg-gray-200 flex items-center justify-center">
            {record.student.avatar ? (
              <img src={record.student.avatar} alt="Student" className="w-full h-full rounded-full" />
            ) : (
              <span className="text-xl font-semibold text-[#CA406F]">
                {record.student.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <h3 className="text-base font-bold text-[#716F6F]">{record.student.name}</h3>
            <p className="text-sm text-[#7D7D7D]">{record.student.email}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-4">
          {/* Transaction ID */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#716F6F]">Transaction ID</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-[#716F6F] rounded-md text-sm text-[#716F6F] outline-none"
              placeholder="Enter transaction ID"
            />
          </div>

          {/* Paid Amount */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#716F6F]">Paid Amount</label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-[#716F6F] rounded-md text-sm text-[#716F6F] outline-none"
              placeholder="Enter amount"
            />
          </div>

          {/* Payment Date */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#716F6F]">Payment Date</label>
            <input
              type="date"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-[#716F6F] rounded-md text-sm text-[#716F6F] outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center w-full mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 w-[90px] h-[38px] bg-[rgba(4,0,255,0.1)] border border-[#0400FF] rounded-md"
          >
            <span className="text-sm font-semibold text-[#0400FF]">Cancel</span>
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 w-[120px] h-[38px] bg-[#CA406F] rounded-md"
          >
            <span className="text-sm font-semibold text-white">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Fees() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [batchFilter, setBatchFilter] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [showAddFeeModal, setShowAddFeeModal] = useState(false)
  const [viewingRecord, setViewingRecord] = useState<FeeRecord | null>(null)
  const [editingRecord, setEditingRecord] = useState<FeeRecord | null>(null)

  const filteredData = feeData.filter(record => {
    const matchesSearch = record.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (record.transactionId && record.transactionId.toLowerCase().includes(searchTerm.toLowerCase())) ||
      record.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.amountPaid.toString().includes(searchTerm) ||
      (record.issuedDate && record.issuedDate.includes(searchTerm)) ||
      record.status.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBatch = batchFilter ? record.id.includes(batchFilter) : true
    const matchesDate = true

    return matchesSearch && matchesBatch && matchesDate
  })

  const handleEditRecord = (record: FeeRecord) => {
    setEditingRecord(record);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <main className="p-8 overflow-auto">
        <div className="max-w-[1278px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#716F6F] capitalize mb-8">Fees</h1>

            <div className="flex items-center justify-between">
              <Button
                className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12 w-[153px]"
                onClick={() => setShowFilters(!showFilters)}
              >
                <img src={FilterIcon} alt="Filter" className="w-6 h-6" />
            <span className="text-sm font-medium">{showFilters ? "Hide" : "Show Filter"}</span>
          </Button>

              <Button 
                className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12 w-[132px]"
                onClick={() => setShowAddFeeModal(true)}
              >
                <Plus className="w-6 h-6" />
                <span className="text-base font-medium">Add Fee</span>
              </Button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="w-full mb-[30px]">
              <Card className="shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-xl p-6">
                <div className="flex flex-col gap-6">
                  {/* Search */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#716F6F] font-medium text-base font-['Poppins']">Search</label>
                    <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                      <input
                        type="text"
                        placeholder="Search by Status"
                        className="max-w-[250px] basis-[250px] text-[#716F6F] font-light text-lg font-['Poppins'] outline-none bg-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Row: Batch, Start Date, End Date */}
                  <div className="flex gap-6">
                    {/* Batches */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base font-['Poppins']">Batches</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="text"
                          placeholder="Search by Batch"
                          className="flex-1 text-[#716F6F] font-light text-lg font-['Poppins'] outline-none bg-transparent"
                          value={batchFilter}
                          onChange={(e) => setBatchFilter(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base font-['Poppins']">Start Date</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="date"
                          className="flex-1 text-[#716F6F] font-light text-lg font-['Poppins'] outline-none bg-transparent"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base font-['Poppins']">End Date</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="date"
                          className="flex-1 text-[#716F6F] font-light text-lg font-['Poppins'] outline-none bg-transparent"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Data Table */}
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="bg-[#F8F8F8] rounded-t-xl p-4">
                <div className="grid grid-cols-7 gap-4 items-center">
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">ID</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Transaction ID</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Student</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Amount Paid</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Issued Date</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Status</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#716F6F]">Actions</span>
                  </div>
                </div>
              </div>

              <div className="divide-y">
                {filteredData.map((record) => (
                  <div key={record.id} className="p-4 hover:bg-gray-50">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">{record.id}</span>
                      </div>

                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          {record.transactionId || "N/A"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-[#CA406F] text-white font-semibold">
                            {record.student.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-[#716F6F] text-lg leading-tight">
                            {record.student.name}
                          </div>
                          <div className="text-[#716F6F] text-sm">{record.student.email}</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          ${record.amountPaid.toLocaleString()}
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          {record.issuedDate || "N/A"}
                        </span>
                      </div>

                      <div className="flex justify-center">
                        <Badge 
                          className={`rounded-[4px] text-white capitalize font-semibold text-[18px] leading-[27px] flex items-center justify-center ${
                            record.status === "active" 
                              ? "bg-[#3ABE65] w-[58px] h-[27px] hover:bg-[#3ABE65]/90" 
                              : record.status === "pending" 
                                ? "bg-yellow-500 hover:bg-yellow-500/90 px-3 py-1" 
                                : "bg-red-500 hover:bg-red-500/90 px-3 py-1"
                          }`}
                        >
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex justify-center">
                        <ActionMenu 
                          record={record} 
                          onView={setViewingRecord} 
                          onEdit={handleEditRecord}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add Fee Modal */}
      {showAddFeeModal && <AddFeeModal onClose={() => setShowAddFeeModal(false)} />}
      
      {/* View Fee Modal */}
      {viewingRecord && (
        <ViewFeeModal 
          onClose={() => setViewingRecord(null)} 
          record={viewingRecord} 
        />
      )}

      {/* Edit Fee Modal */}
      {editingRecord && (
        <EditFeeModal
          onClose={() => setEditingRecord(null)}
          record={editingRecord}
        />
      )}
    </div>
  )
}
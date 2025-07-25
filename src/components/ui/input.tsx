"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Filter, Plus, MoreHorizontal, Eye, Edit, Trash2, Download } from "lucide-react"
import React, { useState, useRef, useEffect } from "react"
import clsimg from "../../assets/closeimg.png"; // Make sure this path is correct

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
  recordId: string
}

const ActionMenu: React.FC<ActionMenuProps> = ({ recordId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleView = () => {
    console.log(`View record ${recordId}`)
    setIsOpen(false)
  }

  const handleEdit = () => {
    console.log(`Edit record ${recordId}`)
    setIsOpen(false)
  }

  const handleDelete = () => {
    console.log(`Delete record ${recordId}`)
    setIsOpen(false)
  }

  const handleDownload = () => {
    console.log(`Download record ${recordId}`)
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
            <button onClick={handleView} className="flex items-center gap-3 px-4 py-2 text-sm rounded-md bg-[#CA406F] text-white hover:bg-[#CA406F]/90">
              <Eye className="w-4 h-4" /><span>View</span>
            </button>
            <button onClick={handleEdit} className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100">
              <Edit className="w-4 h-4" /><span>Edit</span>
            </button>
            <button onClick={handleDelete} className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100">
              <Trash2 className="w-4 h-4" /><span>Delete</span>
            </button>
            <button onClick={handleDownload} className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100">
              <Download className="w-4 h-4" /><span>Download</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const FeeFormPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 p-4">
      <div 
        className="bg-white rounded-[12px] p-4 flex flex-col gap-[30px] w-full max-w-[403px] h-[90vh] overflow-y-auto"
        style={{
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        <div className="flex flex-col gap-[30px] w-full">
          {/* Header */}
          <div className="flex justify-between items-center w-full h-[36px]">
            <h2 
              className="text-[24px] font-semibold text-[#716F6F] capitalize"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '36px'
              }}
            >
              Add Fees
            </h2>
            <button 
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center"
            >
              <img src={clsimg} alt="Close" className="w-6 h-6" />
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[30px]">
            {[
              "Select Branch",
              "Select Course",
              "Batch",
              "Student",
              "Payment Date",
              "Transaction ID",
              "Paid Amount",
              "Balance",
              "Due Payment Date"
            ].map((label, index) => (
              <div key={index} className="flex flex-col gap-2 w-full">
                <label 
                  className="text-[16px] font-medium text-[#716F6F] capitalize"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  {label}
                </label>
                <div
                  className={`flex justify-between items-center w-full h-[48px] px-4 py-3 rounded-[8px] ${
                    ["Transaction ID", "Paid Amount", "Balance"].includes(label)
                      ? "border-b border-[#716F6F]"
                      : "border border-[#716F6F]"
                  }`}
                  style={{
                    boxSizing: 'border-box'
                  }}
                >
                  <span 
                    className="text-[18px] font-light text-[#716F6F] capitalize"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 300,
                      fontSize: '18px',
                      lineHeight: '27px'
                    }}
                  >
                    July
                  </span>
                  <div 
                    className="w-[20px] h-[20px]"
                    style={{
                      transform: 'matrix(0, 1, 1, 0, 0, 0)',
                      borderRight: '2px solid #716F6F',
                      borderBottom: '2px solid #716F6F'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-[30px] w-full">
            <button 
              onClick={onClose}
              className="flex justify-center items-center px-4 w-[98px] h-[40px] rounded-[8px]"
              style={{
                background: 'rgba(4, 0, 255, 0.1)',
                border: '1px solid #0400FF'
              }}
            >
              <span 
                className="text-[16px] font-semibold text-[#0400FF] capitalize"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Cancel
              </span>
            </button>
            <button 
              className="flex justify-center items-center px-4 w-[150px] h-[40px] rounded-[8px]"
              style={{
                background: '#CA406F'
              }}
            >
              <span 
                className="text-[16px] font-semibold text-white capitalize"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Fees() {
  const [showFilters, setShowFilters] = useState(false)
  const [showAddFeePanel, setShowAddFeePanel] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [batchFilter, setBatchFilter] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

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

  return (
    <div className="min-h-screen relative">
      <main className="p-8">
        <div className="max-w-[1278px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#716F6F] capitalize mb-8">Fees</h1>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Button
                  className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12 w-[153px]"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-6 h-6" />
                  <span className="text-base font-medium">{showFilters ? 'Hide Filter' : 'Show Filter'}</span>
                </Button>

                <Button
                  className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12 w-[132px]"
                  onClick={() => setShowAddFeePanel(true)}
                >
                  <Plus className="w-6 h-6" />
                  <span className="text-base font-medium">Add Fee</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="w-full mb-[30px]">
              <Card className="shadow-[0px_4px_24px_rgba(0,0,0,0.15)] rounded-xl p-6">
                <div className="flex flex-col gap-6">
                  {/* Search */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#716F6F] font-medium text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Search</label>
                    <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                      <input
                        type="text"
                        placeholder="Search by Status"
                        className="max-w-[250px] basis-[250px] text-[#716F6F] font-light text-lg outline-none bg-transparent"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Row: Batch, Start Date, End Date */}
                  <div className="flex gap-6">
                    {/* Batches */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Batches</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="text"
                          placeholder="Search by Batch"
                          className="flex-1 text-[#716F6F] font-light text-lg outline-none bg-transparent"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          value={batchFilter}
                          onChange={(e) => setBatchFilter(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Start Date</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="date"
                          className="flex-1 text-[#716F6F] font-light text-lg outline-none bg-transparent"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="flex flex-col gap-2 w-1/3">
                      <label className="text-[#716F6F] font-medium text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>End Date</label>
                      <div className="flex items-center border border-[#716F6F] rounded-lg p-3 gap-3">
                        <input
                          type="date"
                          className="flex-1 text-[#716F6F] font-light text-lg outline-none bg-transparent"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
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
                        <ActionMenu recordId={record.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add Fees Panel */}
      {showAddFeePanel && (
        <FeeFormPanel onClose={() => setShowAddFeePanel(false)} />
      )}
    </div>
  );
}
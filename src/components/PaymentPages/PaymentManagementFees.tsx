"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../ui/badge"
import { Filter, Plus, MoreHorizontal, Eye, Edit, Trash2, Download } from "lucide-react"
import React, { useState, useRef, useEffect } from "react"

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
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 0,
    issuedDate: null,
    status: "active",
  },
  {
    id: "#30",
    transactionId: null,
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 0,
    issuedDate: null,
    status: "active",
  },
  {
    id: "#31",
    transactionId: "198",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "active",
  },
  {
    id: "#34",
    transactionId: "123456",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 5000,
    issuedDate: "2025-05-07",
    status: "active",
  },
  {
    id: "#35",
    transactionId: "197",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "pending",
  },
  {
    id: "#36",
    transactionId: "199",
    student: { name: "Elon Musk", email: "musk@gmail.com", avatar: "EM" },
    amountPaid: 10000,
    issuedDate: "2025-05-07",
    status: "inactive",
  },
]

interface ActionMenuProps {
  recordId: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ recordId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleView = () => {
    console.log(`View record ${recordId}`);
    setIsOpen(false);
  };

  const handleEdit = () => {
    console.log(`Edit record ${recordId}`);
    setIsOpen(false);
  };

  const handleDelete = () => {
    console.log(`Delete record ${recordId}`);
    setIsOpen(false);
  };

  const handleDownload = () => {
    console.log(`Download record ${recordId}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <button
              onClick={handleView}
              className="flex items-center gap-3 px-4 py-2 text-sm rounded-md bg-[#CA406F] text-white hover:bg-[#CA406F]/90"
            >
              <Eye className="w-4 h-4" />
              <span>View</span>
            </button>
            <button
              onClick={handleEdit}
              className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100"
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-3 px-4 py-2 text-sm rounded-md border border-[#716F6F] text-[#716F6F] hover:bg-gray-100"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PaymentManagementFees() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <main className="p-8 overflow-auto">
        <div className="max-w-[1278px] mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#716F6F] capitalize mb-8">Fees</h1>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {/* Show Filter Button */}
                <Button className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12">
                  <Filter className="w-5 h-5" />
                  <span className="text-base font-medium">Show Filter</span>
                </Button>

                {/* Add Fee Button */}
                <Button className="flex items-center justify-center gap-2 bg-[#CA406F] hover:bg-[#CA406F]/90 text-white px-4 py-2 rounded-lg h-12">
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-medium">Add Fee</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <Card className="shadow-lg">
            <CardContent className="p-0">
              {/* Table Header */}
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

              {/* Table Rows */}
              <div className="divide-y">
                {feeData.map((record) => (
                  <div key={record.id} className="p-4 hover:bg-gray-50">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      {/* ID */}
                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">{record.id}</span>
                      </div>

                      {/* Transaction ID */}
                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          {record.transactionId || "N/A"}
                        </span>
                      </div>

                      {/* Student */}
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

                      {/* Amount Paid */}
                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          ${record.amountPaid.toLocaleString()}
                        </span>
                      </div>

                      {/* Issued Date */}
                      <div className="text-center">
                        <span className="text-lg font-semibold text-[#716F6F]">
                          {record.issuedDate || "N/A"}
                        </span>
                      </div>

                      {/* Status */}
                      <div className="flex justify-center">
                        <Badge 
                          className={`px-3 py-1 rounded text-white ${
                            record.status === "active" 
                              ? "bg-[#3ABE65] hover:bg-[#3ABE65]/90" 
                              : record.status === "pending" 
                                ? "bg-yellow-500 hover:bg-yellow-500/90" 
                                : "bg-red-500 hover:bg-red-500/90"
                          }`}
                        >
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </Badge>
                      </div>

                      {/* Actions */}
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
    </div>
  )
}
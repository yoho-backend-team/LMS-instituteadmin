import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FONTS } from "@/constants/uiConstants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import AddFaqCategoryDrawer from "@/components/FAQCategory/addFaqCategory";
import EditFaqCategoryDrawer from "@/components/FAQCategory/editFaq";
import DeleteConfirmationModal from "@/components/FAQCategory/deleteModal";

interface FAQItem {
  id: number;
  title: string;
  author: string;
  status: string;
}

const initialData: FAQItem[] = [
  { id: 1, title: "Certificate Issue", author: "Sara", status: "Active" },
  { id: 2, title: "Login Issue", author: "Peater", status: "Active" },
];

const Category = () => {
  const [search, setSearch] = useState("");
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FAQItem | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
const [itemToDelete, setItemToDelete] = useState<FAQItem | null>(null);


  const filteredData = initialData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const [statusMap, setStatusMap] = useState<{ [key: number]: string }>(
    Object.fromEntries(initialData.map((item) => [item.id, item.status]))
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setStatusMap((prev) => ({ ...prev, [id]: newStatus }));
  };

  const handleEditClick = (item: FAQItem) => {
    setSelectedItem(item);
    setEditDrawerOpen(true);
  };

  const handleDeleteClick = (item: FAQItem) => {
  setItemToDelete(item);
  setDeleteModalOpen(true);
};

const handleConfirmDelete = () => {
  console.log("Delete logic here for", itemToDelete);
  // You can filter out the item from your data here.
};


  return (
    <div className="p-6 min-h-screen">
      <div style={{ ...FONTS.heading_01 }}>FAQ CATEGORY</div>

      <div className="flex items-center justify-between mt-5 mb-8">
        <Input
          type="text"
          placeholder="Search Category"
          className="w-[280px] rounded-md border border-pink-300"
        />
        <AddFaqCategoryDrawer />
      </div>

      <div className="bg-white rounded-xl shadow px-4 py-3">
        <Card className="bg-gray-100 rounded-md shadow-sm px-6 py-4">
          <div className="grid grid-cols-4 font-semibold text-gray-600">
            <div>ID</div>
            <div>Category Name</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
        </Card>

        <div className="space-y-4 py-4">
          {filteredData.map((item) => (
            <Card key={item.id} className="shadow-lg rounded-lg relative">
              <CardContent className="grid grid-cols-4 items-center py-2 px-4 relative">
                <div>{item.id}</div>
                <div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.author}</div>
                </div>
                <div className="flex justify-start">
                  <Select
                    value={statusMap[item.id]}
                    onValueChange={(val) => handleStatusChange(item.id, val)}
                  >
                    <SelectTrigger
                      className={`w-[111px] h-[40px] border px-2 bg-transparent shadow-none ${
                        statusMap[item.id] && "px-0 [&>svg]:hidden"
                      }`}
                    >
                      {statusMap[item.id] ? (
                        <div
                          className="w-[111px] h-[40px] bg-[#ca406f] text-white border rounded-md flex items-center justify-center"
                          style={{ ...FONTS.dropdown }}
                        >
                          {statusMap[item.id]}
                        </div>
                      ) : (
                        <SelectValue placeholder="Status" />
                      )}
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-md shadow-md p-2 space-y-2 z-50">
                      <SelectItem value="Active" className="bg-[#ca406f] text-white rounded-md px-4 py-2 text-sm font-medium">
                        Active
                      </SelectItem>
                      <SelectItem value="Inactive" className="bg-[#ca406f] mt-2 text-white rounded-md px-4 py-2 text-sm font-medium">
                        Inactive
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="absolute top-2 right-2" aria-label="More options">
                        <MoreVertical className="w-5 h-5 text-[#ca406f]" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[120px] p-2 z-20 space-y-2">
                      <DropdownMenuItem
                        className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                        onClick={() => handleEditClick(item)}
                      >
                        <Pencil className="w-4 h-4 text-black group-hover:text-white" />
                        <span className="group-hover:text-white">Edit</span>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                        onClick={() => handleDeleteClick(item)}
                      >
                        <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
                        <span className="group-hover:text-white">Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 🟣 Edit Drawer */}
      <EditFaqCategoryDrawer
        open={editDrawerOpen}
        onClose={() => setEditDrawerOpen(false)}
        editItem={selectedItem}
      />
      <DeleteConfirmationModal
  open={deleteModalOpen}
  onClose={() => setDeleteModalOpen(false)}
  onConfirm={handleConfirmDelete}
/>

    </div>
  );
};

export default Category;

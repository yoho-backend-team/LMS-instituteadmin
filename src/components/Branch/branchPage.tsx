import  { useState } from "react";
import BranchCard from "../../components/Branch/branchCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import bg from "../../assets/bg.png";

const branches = [
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+1",
  },
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+2",
  },
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+3",
  },
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+4",
  },
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+5",
  },
  {
    name: "Tiruchirappalli",
    address: "No 3, Salmam Complex, Tiruchirappalli, Tamil Nadu, 620014",
    imageUrl: "https://via.placeholder.com/344x160.png?text=Branch+6",
  },
];

const BranchPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Search & Add Button */}
        <div className="flex items-center justify-between mb-8">
          <Input
            type="text"
            placeholder="Search Branch"
            className="w-[280px] rounded-md border border-pink-300"
          />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-pink-600 text-white hover:bg-pink-700 flex items-center gap-2">
                <Plus size={16} />
                Add New Branch
              </Button>
            </DialogTrigger>
<DialogContent
  className="w-full max-w-none bg-white rounded-xl px-6 py-8"
  style={{ width: "960px", maxWidth: "90vw" }}
>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#ca406f]">
                  Create a New Branch
                </DialogTitle>
                <DialogDescription className="text-gray-500 mt-1">
                  Fill In The Details Below To Add A New Branch
                </DialogDescription>
              </DialogHeader>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm font-medium">Branch Name</label>
                  <Input placeholder="Enter branch name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="Enter phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium">Alternate Number</label>
                  <Input placeholder="Enter alternate number" />
                </div>
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <Input placeholder="Enter address" />
                </div>
                <div>
                  <label className="text-sm font-medium">Pin Code</label>
                  <Input placeholder="Enter pin code" />
                </div>
                <div>
                  <label className="text-sm font-medium">Land Mark</label>
                  <Input placeholder="Enter landmark" />
                </div>
                <div>
                  <label className="text-sm font-medium">City</label>
                  <Input placeholder="Enter city" />
                </div>
                <div>
                  <label className="text-sm font-medium">State</label>
                  <Input placeholder="Enter state" />
                </div>
              </div>

              <DialogFooter className="mt-8 flex justify-end gap-4">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="border-[#6f4ef2] text-[#6f4ef2]"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="bg-[#ca406f] text-white hover:bg-[#b53860]">
                  Create Branch
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <BranchCard key={index} {...branch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchPage;

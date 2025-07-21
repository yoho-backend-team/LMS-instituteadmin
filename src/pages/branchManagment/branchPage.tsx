
import { useState } from "react";
import BranchCard from "../../components/Branch/branchCard";
import BranchForm from "@/components/Branch/createBranch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { FONTS } from "@/constants/uiConstants";

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
    <div className="w-[auto] px-2 py-6">
      <div className="flex items-center justify-between mb-8" style={{ ...FONTS.input_section }}>
        <Input
          type="text"
          placeholder="Search Branch"
          className="w-[280px] rounded-md border border-pink-300"
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#CA406F] hover:bg-[#ca406f] flex items-center gap-2" style={{ ...FONTS.add_button }}>
              <Plus size={16} />
              Add New Branch
            </Button>
          </DialogTrigger>

          <DialogContent className="w-full max-w-none bg-white rounded-xl px-6 py-8" style={{ width: "960px", maxWidth: "90vw" }}>
            <DialogHeader>
              <DialogTitle style={{ ...FONTS.form_head }}>Create a New Branch</DialogTitle>
              <DialogDescription className="mt-1" style={{ ...FONTS.form_des }}>
                Fill In The Details Below To Add A New Branch
              </DialogDescription>
            </DialogHeader>
            <BranchForm onSubmitSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <BranchCard key={index} {...branch} />
        ))}
      </div>
    </div>
  );
};

export default BranchPage;

import React, { useState } from "react";
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
    <div>
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1200px] mx-auto px-2 py-6">
        <div className="flex items-center justify-between mb-8" style={{...FONTS.input_section}}>
          <Input
            type="text"
            placeholder="Search Branch"
            className="w-[280px] rounded-md border border-pink-300"
          />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#CA406F] hover:bg-[#ca406f] flex items-center gap-2 " style={{...FONTS.add_button}}>
                <Plus size={16} />
                Add New Branch
              </Button>
            </DialogTrigger>
<DialogContent
  className="w-full max-w-none bg-white rounded-xl px-6 py-8"
  style={{ width: "960px", maxWidth: "90vw" }}
>

              <DialogHeader>
                <DialogTitle style={{...FONTS.form_head}}>
                  Create a New Branch
                </DialogTitle>
                <DialogDescription className="mt-1"style={{...FONTS.form_des}}>
                  Fill In The Details Below To Add A New Branch
                </DialogDescription>
              </DialogHeader>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label  style={{...FONTS.form_topic}}>Branch Name</label>
                  <Input placeholder="Enter branch name" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>Phone Number</label>
                  <Input placeholder="Enter phone number" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>Alternate Number</label>
                  <Input placeholder="Enter alternate number" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>Address</label>
                  <Input placeholder="Enter address" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>Pin Code</label>
                  <Input placeholder="Enter pin code" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>Land Mark</label>
                  <Input placeholder="Enter landmark" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>City</label>
                  <Input placeholder="Enter city" />
                </div>
                <div>
                  <label style={{...FONTS.form_topic}}>State</label>
                  <Input placeholder="Enter state" />
                </div>
              </div>

              <DialogFooter className="mt-8 flex justify-end gap-4">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="!border-[#0400FF] !text-[#0400FF] "style={{...FONTS.Buttons}}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="bg-[#ca406f] hover:bg-[#CA406F]"style={{...FONTS.Buttons}}>
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
    </div>
  );
};

export default BranchPage;

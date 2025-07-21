import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import tick from "../../assets/tick.png"
import warning from "../../assets/warning.png"

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const DeleteConfirmationModal = ({
  open,
  onClose,
  onConfirmDelete,
}: DeleteConfirmationModalProps) => {
  const [step, setStep] = useState<"statusConfirm" | "deleteConfirm" | "success">("statusConfirm");

  const handleStatusConfirm = () => setStep("deleteConfirm");

  const handleFinalDelete = () => {
    setStep("success");
    setTimeout(() => {
      onConfirmDelete();
      onClose();
      setStep("statusConfirm");
    }, 1500);
  };

  const handleCancel = () => {
    onClose();
    setStep("statusConfirm");
  };

  return (
    <Dialog open={open} onOpenChange={handleCancel}>
      <DialogContent className="max-w-sm text-center p-6 space-y-4">
        {step === "statusConfirm" && (
          <>
            <img src={warning} className="text-yellow-500 mx-auto" />
            <h2 className="font-bold text-lg">Confirm Action</h2>
            <p className="text-sm text-gray-600">Are you sure you want to change the status?</p>
            <div className="flex justify-center gap-4 pt-2">
              <Button className="bg-[#CA406F] hover:bg-[#CA406F]" onClick={handleStatusConfirm}>
                Yes, Status
              </Button>
              <Button variant="outline" onClick={handleCancel}  className="border border-[#0400FF] !text-[#0400FF] px-4 py-2 rounded-md hover:bg-blue-50">
                Cancel
              </Button>
            </div>
          </>
        )}

        {step === "deleteConfirm" && (
          <>
            <img src={warning} className="text-red-500 mx-auto" />
            <h2 className="font-bold text-lg">Final Confirmation</h2>
            <p className="text-sm text-gray-600">Are you sure you want to delete this FAQ category?</p>
            <div className="flex justify-center gap-4 pt-2">
              <Button className="bg-green-600 hover:bg-green-600" onClick={handleFinalDelete}>
                Yes, Delete
              </Button>
              <Button variant="outline" onClick={handleCancel}  className="border border-[#0400FF] !text-[#0400FF] px-4 py-2 rounded-md hover:bg-blue-50">
                Cancel
              </Button>
            </div>
          </>
        )}

        {step === "success" && (
          <>
            <img src={tick} className="text-green-500 mx-auto" />
            <h2 className="font-bold text-lg">Success!</h2>
            <div>
              <Button className="bg-green-600 px-8 hover:bg-green-600" >
            ok
              </Button>
              </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;

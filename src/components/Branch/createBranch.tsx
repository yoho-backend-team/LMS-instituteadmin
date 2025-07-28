
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { FONTS } from "@/constants/uiConstants";
import { Input } from "../ui/input";

interface BranchFormProps {
  onSubmitSuccess: () => void;
}

const validationSchema = Yup.object({
  branchName: Yup.string().required("Branch name is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  alternate: Yup.string().matches(/^\d{10}$/, "Alternate number must be 10 digits").nullable(),
  address: Yup.string().required("Address is required"),
  pinCode: Yup.string().matches(/^\d{6}$/, "Pin code must be 6 digits"),
  landmark: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const BranchForm = ({ onSubmitSuccess }: BranchFormProps) => {
  const formik = useFormik({
    initialValues: {
      branchName: "",
      phone: "",
      alternate: "",
      address: "",
      pinCode: "",
      landmark: "",
      city: "",
      state: "",
    },
    validationSchema,
    onSubmit: (values:any) => {
      console.log("Form Submitted:", values);
      onSubmitSuccess();
    },
  });

  const fields = [
    { name: "branchName", label: "Branch Name", placeholder: "Enter branch name" },
    { name: "phone", label: "Phone Number", placeholder: "Enter phone number" },
    { name: "alternate", label: "Alternate Number", placeholder: "Enter alternate number" },
    { name: "address", label: "Address", placeholder: "Enter address" },
    { name: "pinCode", label: "Pin Code", placeholder: "Enter pin code" },
    { name: "landmark", label: "Land Mark", placeholder: "Enter landmark" },
    { name: "city", label: "City", placeholder: "Enter city" },
    { name: "state", label: "State", placeholder: "Enter state" },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {fields.map(({ name, label, placeholder }) => (
          <div key={name}>
            <label style={{ ...FONTS.form_topic }}>{label}</label>
            <Input
              name={name}
              placeholder={placeholder}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched[name] && formik.errors[name] ? "border-red-500" : ""}
            />
            {formik.touched[name] && typeof formik.errors[name] === "string" && (
  <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
)}

          </div>
        ))}
      </div>

      <DialogFooter className="mt-8 flex justify-end gap-4">
        <DialogClose asChild>
          <Button variant="outline" className="!border-[#0400FF] !text-[#0400FF]" style={{ ...FONTS.Buttons }}>
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" className="bg-[#ca406f] hover:bg-[#CA406F]" style={{ ...FONTS.Buttons }}>
          Create Branch
        </Button>
      </DialogFooter>
    </form>
  );
};

export default BranchForm;

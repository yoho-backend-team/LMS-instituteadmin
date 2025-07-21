import { useFormik } from "formik";
import * as Yup from "yup";
import { FONTS } from "@/constants/uiConstants";

interface EditBranchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditBranchModal: React.FC<EditBranchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      branchName: "",
      altPhone: "",
      phone: "",
      address: "",
      pin: "",
      landmark: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      branchName: Yup.string().required("Branch name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Must be 10 digits"),
      altPhone: Yup.string().matches(/^[0-9]{10}$/, "Must be 10 digits").notRequired(),
      address: Yup.string().required("Address is required"),
      pin: Yup.string().required("Pin code is required"),
      landmark: Yup.string().required("Landmark is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      onClose(); // close modal on submit
    },
  });

  const renderField = (
    label: string,
    name: keyof typeof formik.values,
    colSpan = 1
  ) => (
    <div className={`col-span-${colSpan}`}>
      <label className="block mb-1" style={{ ...FONTS.form_topic }}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full border border-gray-700 rounded-md p-2"
      />
      {formik.touched[name] && typeof formik.errors[name] === "string" && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] mx-4 flex flex-col">
        <div
          className="bg-[#ca406f] rounded-t-xl py-3 text-center"
          style={{ ...FONTS.form_head, color: "white" }}
        >
          Edit Branch
        </div>


        <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: "calc(120vh - 64px - 70px)" }}>
          <form id="edit-branch-form" onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-8">
            {renderField("Branch Name", "branchName", 2)}
            {renderField("Alternate Phone Number", "altPhone")}
            {renderField("Phone Number", "phone")}
            {renderField("Address", "address", 2)}
            {renderField("Pin Code", "pin")}
            {renderField("Landmark", "landmark")}
            {renderField("City", "city")}
            {renderField("State", "state")}
          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 px-8 py-4 border-t mt-auto">
          <button
            type="button"
            onClick={onClose}
            className="border border-[#0400FF] !text-[#0400FF] px-4 py-2 rounded-md hover:bg-blue-50"
            style={{ ...FONTS.Buttons }}
          >
            Cancel
          </button>
          <button
            type="submit"
            form="edit-branch-form"
            className="bg-[#ca406f] text-white px-4 py-2 rounded-md hover:bg-[#b1365e]"
            style={{ ...FONTS.Buttons }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBranchModal;

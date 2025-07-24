import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

interface PlacementFormData {
  companyName: string;
  companyAddress: string;
  contactEmail: string;
  contactNumber: string;
  jobName: string;
  jobDescription: string;
  skills: string;
  student: string;
}

interface AddPlacementProps {
  isEdit?: boolean;
  onClose: () => void;
  onSubmit: (data: PlacementFormData) => void;
  initialData?: PlacementFormData;
}

const AddPlacement = ({ isEdit = false, onClose, onSubmit, initialData }: AddPlacementProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlacementFormData>();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onFormSubmit = (data: PlacementFormData) => {
    onSubmit(data);
    onClose();
    reset();
  };

  const companyNames = ["TCS", "Infosys", "Wipro", "Accenture", "Google"];
  const companyEmails = ["hr@tcs.com", "careers@infosys.com", "contact@wipro.com"];
  const companyAddresses = [
    "Bangalore, India",
    "Chennai, India",
    "Pune, India",
    "Hyderabad, India",
  ];

  const jobNames = ["Software Engineer", "Data Analyst", "System Administrator"];
  const jobDescriptions = [
    "Develop and maintain web applications",
    "Analyze and interpret complex data",
    "Manage and support IT systems",
  ];
  const skillsList = ["JavaScript", "React", "Node.js", "Python", "SQL"];

  const students = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Mike Johnson", email: "mike@example.com" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <form className="space-y-8" onSubmit={handleSubmit(onFormSubmit)}>
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-700">
            {isEdit ? "Edit Placement Details" : "Add Placement Details"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-light"
          >
            ×
          </button>
        </div>

        {/* Company Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Company Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Company Name"
              name="companyName"
              register={register}
              error={errors.companyName}
              required
              suggestions={companyNames}
            />
            <InputField
              label="Company Address"
              name="companyAddress"
              register={register}
              error={errors.companyAddress}
              required
              suggestions={companyAddresses}
            />
            <InputField
              label="Contact Email"
              name="contactEmail"
              register={register}
              error={errors.contactEmail}
              type="email"
              required
              suggestions={companyEmails}
            />
            <InputField
              label="Contact Number"
              name="contactNumber"
              register={register}
              error={errors.contactNumber}
              type="tel"
              required
            />
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Job Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Name Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Job Name</label>
              <select
                {...register("jobName", { required: "Job Name is required" })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Job Name</option>
                {jobNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              {errors.jobName && <p className="text-red-500 text-sm mt-1">{errors.jobName.message}</p>}
            </div>

            {/* Job Description Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Job Description</label>
              <select
                {...register("jobDescription", { required: "Job Description is required" })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Job Description</option>
                {jobDescriptions.map((desc) => (
                  <option key={desc} value={desc}>
                    {desc}
                  </option>
                ))}
              </select>
              {errors.jobDescription && <p className="text-red-500 text-sm mt-1">{errors.jobDescription.message}</p>}
            </div>

            {/* Skills Dropdown */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-2">Skills</label>
              <select
                {...register("skills", { required: "Skills are required" })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Skill</option>
                {skillsList.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
              {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>}
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Student Details</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Select Student
            </label>
            <div className="relative">
              <select
                {...register("student", { required: "Please select a student" })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white pr-10"
              >
                <option value="">Select Student</option>
                {students.map((student) => (
                  <option key={student.email} value={student.name}>
                    {student.name} ({student.email})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              {errors.student && (
                <p className="text-red-500 text-sm mt-1">{errors.student.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {isEdit ? "Update Placement" : "Submit Placement"}
          </button>
        </div>
      </form>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: keyof PlacementFormData;
  type?: string;
  required?: boolean;
  register: any;
  error?: any;
  suggestions?: string[];
}

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  register,
  error,
  suggestions,
}: InputFieldProps) => {
  const dataListId = `${name}-suggestions`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
      <input
        type={type}
        list={suggestions ? dataListId : undefined}
        {...register(name, { required: required ? `${label} is required` : false })}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
      />
      {suggestions && (
        <datalist id={dataListId}>
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default AddPlacement;
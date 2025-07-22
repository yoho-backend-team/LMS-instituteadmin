import { PiPasswordFill } from "react-icons/pi";

const SecurityTab = () => (
  <div className="p-4 bg-white shadow rounded">
    <h3 className="text-lg text-[#7D7D7D] font-semibold mb-2">Change Password</h3>
    
    <form>
      <div className="grid grid-cols-3 gap-4 p-2">
        {/* New Password */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <PiPasswordFill className="text-[#CA406F]" />
            <label htmlFor="newPassword">New Password</label>
          </div>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="border h-10 rounded-lg px-2"
            placeholder="Enter new password"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <PiPasswordFill className="text-[#CA406F]" />
            <label htmlFor="confirmPassword">Confirm New Password</label>
          </div>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border h-10 rounded-lg px-2"
            placeholder="Confirm new password"
          />
        </div>
      </div>

      <div className="flex justify-end p-2">
        <button
          type="submit"
          className="bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-700 transition"
        >
          Change Password
        </button>
      </div>
    </form>
  </div>
);

export default SecurityTab;

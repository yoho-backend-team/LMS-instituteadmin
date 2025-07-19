import { useState } from "react";
import { BatchCard } from "../../components/Batch/batchCard";
import { Button } from "@/components/ui/button";
import bg from "../../assets/bg.png";
import filter from "../../assets/filter.png";
import plus from "../../assets/Add.png";
import { CreateBatchModal } from "@/components/Batch/createBatch";
import { FONTS } from "@/constants/uiConstants";

export default function StudentDashboard() {
  const [showFilter, setShowFilter] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mb-8">
        <h2 className=" mb-6" style={{...FONTS.heading_01}}>Student</h2>

        <div className="flex justify-between items-center">
          <Button
            onClick={() => setShowFilter(!showFilter)}
            className="bg-pink-600 hover:bg-pink-700  px-4 flex items-center gap-2"style={{...FONTS.add_button}}
          >
            <img src={filter} className="w-4 h-4" />
            {showFilter ? "Hide Filter" : "Show Filter"}
          </Button>

          <Button className="bg-pink-600 hover:bg-pink-700  px-4 flex items-center gap-2" style={{...FONTS.add_button}}
          onClick={() => setShowCreateModal(true)}>
            <img src={plus} className="w-4 h-4" />
            Add New Batch
          </Button>
        </div>
      </div>


      {showFilter && (
        <div className="bg-[white] p-6 rounded-2xl shadow mb-8">
          <h3 className=" mb-4"style={{...FONTS.card_htext}}>Batches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1"style={{...FONTS.form_topic}}>Search by Status</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block mb-1"style={{...FONTS.form_topic}}>Search Between Dates</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block mb-1"style={{...FONTS.form_topic}}>Search by Course</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option value="">Select Course</option>
              </select>
            </div>

            <div>
              <label className="block mb-1"style={{...FONTS.form_topic}}>Search Batch</label>
              <input type="text" placeholder="Undefined" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-6 flex-wrap">
        <BatchCard
          title="MERN 2025"
          subtitle="MERN STACK 2024"
          students={2}
          startDate="April 7, 2025"
          endDate="April 7, 2025"
          status="Active"
        />
        <BatchCard
          title="MERN 2025"
          subtitle="MERN STACK 2024"
          students={2}
          startDate="April 7, 2025"
          endDate="April 7, 2025"
          status="Active"
        />
      </div>
      <CreateBatchModal isOpen={showCreateModal} setIsOpen={setShowCreateModal} />
      
    </div>
  );
}

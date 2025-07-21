import React, { useState } from 'react';
import Chat from './Chat';

interface Batch {
  id: number;
  name: string;
  image: string;
  about?: string;
  email?: string;
  timing?: string;
  phone?: string;
  status?: string;
  batch?: string;
}


const batchList: Batch[] = [
  {
    id: 1,
    name: "MERN 2025",
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww',
    about: "This is the MERN 2025 batch",
    email: "mern2025@example.com",
    timing: "10:00 AM - 12:00 PM",
    phone: "+91 9876543210",
    status: "Active",
    batch: "MERN Full Stack",
  },
  {
    id: 2,
    name: "Python 2024",
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww',
    about: "Python 2024 batch",
    email: "python2024@example.com",
    timing: "3:00 PM - 5:00 PM",
    phone: "+91 1234567890",
    status: "Inactive",
    batch: "Python Core + Django",
  },
];

const CommunityChat: React.FC= ({ }) => {
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);

  return (
    <div className="flex w-full h-[90vh]">
      {/* Left Side - Batch List */}
      <div className="w-[30%] h-[86vh] bg-[#CA406F] text-white rounded-2xl mr-6 p-4 space-y-4">
        <h2 className="text-3xl font-semibold mb-5">Batches</h2>
        {batchList.map((batch) => (
          <div
            key={batch.id}
            onClick={() => setSelectedBatch(batch)}
            className="bg-white text-black p-3 rounded-lg cursor-pointer flex items-center gap-3 hover:bg-pink-100 transition"
          >
            <img src={batch.image} alt={batch.name} className="w-14 h-14 rounded-full object-cover" />
            <div className="grid">
              <span className="font-medium">{batch.name}</span>
              <span className="text-sm text-gray-600">{batch.batch}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1">
      <Chat selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
      </div>
    </div>
  );
};

export default CommunityChat;

import React, { useState } from 'react';
import Chat from '../chat/Chat';
import CommunityChat from '../chat/Batches';
import backdrop from '../../assets/Backdrop Image.jpg';

interface Batch {
  id: number;
  name: string;
  batch: string;
  image: string;
}


const Community = () => {
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);

  return (
    <div
      className="flex overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-screen mt-5 ml-12 w-full">
        <CommunityChat onSelectBatch={setSelectedBatch} />
      </div>
      {/* <div className="w-2/3 mt-5 mr-5 h-[90vh]">
        <Chat selectedBatch={selectedBatch} />
      </div> */}
    </div>
  );
};

export default Community;

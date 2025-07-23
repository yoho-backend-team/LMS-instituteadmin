import React, { useState } from "react";
import Chat from "./Chat";
import CommunityChat from "./Batches";
import backdrop from "../../assets/Backdrop Image.jpg";

interface Batch {
  id: number;
  name: string;
  batch: string;
  image: string;
}

const CommunityManagement = () => {

  return (
    <div
      className="flex overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen mt-5 ml-12 w-full">
        <CommunityChat />
      </div>
    </div>
  );
};

export default CommunityManagement;

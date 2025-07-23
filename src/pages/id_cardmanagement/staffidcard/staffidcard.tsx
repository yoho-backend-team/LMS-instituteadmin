
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import barcode from "../../../assets/barcode.png";
import { FONTS } from "@/constants/uiConstants";

interface StaffInfo {
  imageUrl: string;
  name: string;
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
}

const staff: StaffInfo = {
  imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  name: "Undefined",
  id: "ANN-TIR-STF0019",
  username: "undefined",
  email: "undefined@gmail.com",
  phone: "9876543987",
  address: "Hello, world, Chennai, Tamilnadu - 909090",
};

export default function StaffIDCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-2xl font-semibold mb-6 text-[#ca406f]"style={{...FONTS.heading_01}}>
        Staff ID Card
      </h1>

      <div
        className="[perspective:1000px] w-[320px]"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
        
          <Card className="absolute w-full rounded-2xl shadow-xl overflow-hidden backface-hidden">
            <div className="relative h-[120px] -top-3">
              <div className="absolute top-20 left-[-60px] w-[400px] h-[60px] rotate-[20deg] bg-[#ca406f] z-0 rounded-lg" />
              <div className="relative z-10 flex justify-center items-center h-full">
                <Avatar className="w-[130px] h-[130px] mt-26 shadow-md">
                  <AvatarImage src={staff.imageUrl} alt={staff.name} />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <CardContent className="pt-6 pb-4 px-6 text-center relative z-10">
              <p className="text-xl font-semibold text-gray-800">
                {staff.name}
              </p>
              <p className="text-sm text-gray-500 mb-4">Teaching Staff</p>

              <div className="text-left space-y-2 text-sm text-gray-700 font-medium">
                <p>
                  <span className="font-bold text-gray-800">ID No:</span>{" "}
                  {staff.id}
                </p>
                <p>
                  <span className="font-bold text-gray-800">User Name:</span>{" "}
                  {staff.username}
                </p>
                <p>
                  <span className="font-bold text-gray-800">Email:</span>{" "}
                  {staff.email}
                </p>
                <p>
                  <span className="font-bold text-gray-800">Phone:</span>{" "}
                  {staff.phone}
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={barcode}
                  alt="barcode"
                  className="h-[100px] w-[220px]"
                />
              </div>
            </CardContent>

            
            <div className="relative top-1 h-3 w-full bg-[#ca406f] rounded-b-2xl" />
          </Card>

          <Card className="w-full h-full rounded-2xl shadow-xl bg-white [transform:rotateY(180deg)] backface-hidden">
            <div className="relative -top-1 h-8 bg-[#ca406f] rounded-t-xl" />

            <CardContent className="py-6 px-6 space-y-3">
              <div className="text-sm text-[#333] font-medium">
                <div className="flex">
                  <span className="w-24 mt-5">User Name :</span>
                  <span className="ml-2 mt-5">{staff.username}</span>
                </div>
                <div className="flex">
                  <span className="w-24 mt-5">Email :</span>
                  <span className="ml-2 mt-5">{staff.email}</span>
                </div>
                <div className="flex">
                  <span className="w-24 mt-5">Role :</span>
                  <span className="ml-2 mt-5">Teaching Staff</span>
                </div>
                <div className="flex">
                  <span className="w-24 mt-5">ID :</span>
                  <span className="ml-2 mt-5">{staff.id}</span>
                </div>
                <div className="flex">
                  <span className="w-24 mt-5">Contact :</span>
                  <span className="ml-2 mt-5">{staff.phone}</span>
                </div>
                <div className="flex">
                  <span className="w-24 mt-5">Address :</span>
                  <span className="ml-2 mt-5">{staff.address}</span>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white w-[120px] mt-15">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

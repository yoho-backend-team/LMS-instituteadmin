const UnRead = () => {

    const staff = [
        {
            name: 'Reg - exam schedule',
            dateTime: '2025-07-25 09:15 AM',
            description: " All staff's must atten the meeting which is held at 4.00 pm",
        }
    ];
    const students = [
        {
            name: 'Reg - Tour',
            batch: 'Batch C',
            dateTime: '2025-07-25 09:15 AM',
            description: 'Classroom doors close at 9.30 AM sharp.'
        },
    ];
    return (
        <div>
            <div>welcome to unread notification page</div>
            {/* <div className="flex">
                <div>
                    <p>Student notification</p>
                    <div className="border-white  rounded-2xl p-3 px-2 max-h-[380px] overflow-y-auto  ">
                        <div className="text-sm grid gap-4">
                            {students.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 rounded-sm border-1 border-gray-200 shadow-sm shadow-[#CA406F]  space-y-2 flex flex-col "
                                >
                                    <div className="grid grid-cols-3 justify-between gap-2">
                                        <h2>Notification : {item.name}</h2>
                                        <p>Batch : {item.batch}</p>
                                        <p>Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>Staff Notification</p>
                    <div className="border-white   rounded-2xl p-3 px-2 max-h-[380px] overflow-x-auto hide-scrollbar ">
                        <div className="text-sm grid gap-4">
                            {staff.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 rounded-sm shadow-sm shadow-[#CA406F]  space-y-2 flex flex-col "
                                >
                                    <div className="grid grid-cols-2 justify-between gap-2">
                                        <h2>Notification : {item.name}</h2>
                                        <p>Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div> */}

            <div className="flex gap-5">
                <div>
                    <p>Student notification</p>
                    <div className="border-white  rounded-2xl p-3 px-2 max-h-[380px] overflow-y-auto  ">
                        <div className="text-sm grid gap-4">
                            {students.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 rounded-sm border-1 border-gray-200 shadow-sm shadow-[#CA406F]  space-y-2 flex flex-col "
                                >
                                    <div className="grid grid-cols-3 justify-between gap-2">
                                        <h2 className="line-clamp-1">Notification : {item.name}</h2>
                                        <p className="line-clamp-1">Batch : {item.batch}</p>
                                        <p className="line-clamp-1">Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>Staff Notification</p>
                    <div className="border-white   rounded-2xl p-3 px-2 max-h-[380px] overflow-x-auto hide-scrollbar ">
                        <div className="text-sm grid ">
                            {staff.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 rounded-sm shadow-sm shadow-[#CA406F]  space-y-2 flex flex-col "
                                >
                                    <div className="grid grid-cols-2 justify-between gap-5">
                                        <h2 className="line-clamp-1">Notification : {item.name}</h2>
                                        <p className="line-clamp-1">Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>)
}
export default UnRead;
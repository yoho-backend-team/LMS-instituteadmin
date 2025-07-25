const Staff_All = () => {

    const staff = [
        {
            name: 'Reg - dresscode',
            dateTime: '2025-07-23 10:00 AM',
            description: 'Everyone should be inside the classroom before 9.30 am with proper dresscode',
            status: "NEW"
        },
        {
            name: 'Reg - attendance maintenance',
            dateTime: '2025-07-24 09:45 AM',
            description: 'Every one should maintain the attendance regularly',
            status: ""
        },
        {
            name: 'Reg - exam schedule',
            dateTime: '2025-07-25 09:15 AM',
            description: " All staff's must atten the meeting which is held at 4.00 pm",
            status:""
        }
    ];

    return (
        <div className="">

            <h4 className="mb-5 text-lg font-bold">Staff all notification page</h4>

            <div className="border-white rounded-2xl py-2">
                <div className="text-sm grid gap-4">
                    {staff.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 rounded-sm shadow-sm shadow-[#CA406F] hover:scale-103 space-y-2 flex flex-col "
                        >
                            <div className="grid grid-cols-2 justify-between gap-2">
                                <h2>Notification : {item.name}</h2>
                                <p>Date & Time : {item.dateTime}</p>
                            </div>
                            <div>
                                <p>Description : {item.description}</p>
                            </div>
                            <div className=" self-end">
                                <button className="bg-green-500 text-white w-14 rounded-sm">
                                    {item.status}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}
export default Staff_All;
const All = () => {

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
            status: ""
        },
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
            status: ""
        }
    ];
    const students = [
        {
            name: 'Reg - Uniform',
            batch: 'Batch A',
            dateTime: '2025-07-23 10:00 AM',
            description: 'Everyone should be inside the classroom before 9.30 am with proper unifrom',
            status: "NEW"
        },
        {
            name: 'Reg -holiday',
            batch: 'Batch B',
            dateTime: '2025-07-24 09:45 AM',
            description: 'Attendance is mandatory for all students.',
            status: ""
        },
        {
            name: 'Reg - Tour',
            batch: 'Batch C',
            dateTime: '2025-07-25 09:15 AM',
            description: 'Classroom doors close at 9.30 AM sharp.'
        },
        {
            name: 'Reg - Uniform',
            batch: 'Batch A',
            dateTime: '2025-07-23 10:00 AM',
            description: 'Everyone should be inside the classroom before 9.30 am with proper unifrom',
            status: "NEW"
        },
        {
            name: 'Reg -holiday',
            batch: 'Batch B',
            dateTime: '2025-07-24 09:45 AM',
            description: 'Attendance is mandatory for all students.',
            status: ""
        },
        {
            name: 'Reg - Tour',
            batch: 'Batch C',
            dateTime: '2025-07-25 09:15 AM',
            description: 'Classroom doors close at 9.30 AM sharp.'
        }
    ];


    return (
        
        <div>
            <div>welcome to all notification page</div>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
                <div>
                    <p className="text-lg font-semibold mb-2">Student notification</p>
                    <div className="border border-white rounded-2xl p-2 max-h-[320px] overflow-y-auto no-scrollbar">
                        <div className="text-sm grid gap-4">
                            {students.map((item, index) => (
                                <div key={index} className="p-2 rounded-sm shadow-sm shadow-[#CA406F] space-y-2 flex flex-col">
                                    <div className="grid grid-cols-3 justify-between ">
                                        <h2 className="font-medium line-clamp-1 ">Notification : {item.name}</h2>
                                        <p className="line-clamp-1">Batch : {item.batch}</p>
                                        <p className="line-clamp-1">Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                    <div className="self-end">
                                        <button className="bg-green-500 text-white w-14 rounded-sm">{item.status}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">Staff Notification</p>
                    <div className="border border-white rounded-2xl p-2 max-h-[320px] overflow-y-auto no-scrollbar">
                        <div className="text-sm grid gap-4">
                            {staff.map((item, index) => (
                                <div key={index} className="p-2 rounded-sm shadow-sm shadow-[#CA406F] space-y-2 flex flex-col">
                                    <div className="grid grid-cols-2 justify-between ">
                                        <h2 className="font-medium line-clamp-1">Notification : {item.name}</h2>
                                        <p className="line-clamp-1">Date & Time : {item.dateTime}</p>
                                    </div>
                                    <div>
                                        <p className="line-clamp-1">Description : {item.description}</p>
                                    </div>
                                    <div className="self-end">
                                        <button className="bg-green-500 text-white w-14 rounded-sm">{item.status}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default All;
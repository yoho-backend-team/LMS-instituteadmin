
const Student_Allnotification = () => {


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
        }
    ];



    return (
        <div className="">

            <h4 className="mb-5 text-lg font-bold">Student all notification page</h4>

            <div className="border-white rounded-2xl py-2">
                <div className="text-sm grid gap-4">
                    {students.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 rounded-sm shadow-sm shadow-[#CA406F] hover:scale-103 space-y-2 flex flex-col "
                        >
                            <div className="grid grid-cols-3 justify-between gap-2">
                                <h2>Notification : {item.name}</h2>
                                <p>Batch : {item.batch}</p>
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
        </div>
    );
};

export default Student_Allnotification;

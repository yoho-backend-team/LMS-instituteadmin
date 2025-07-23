const Staff_Read=() =>{

      const staff = [
        {
            name: 'Reg - attendance maintenance',
            dateTime: '2025-07-24 09:45 AM',
            description: 'Every one should maintain the attendance regularly',
         
        },
    ];
    return(
        <div>
            <h4 className="mb-5 text-lg font-bold">welcome to staff  read notification page</h4>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}
export default Staff_Read;
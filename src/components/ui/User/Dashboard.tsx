import { FaUsers, FaLayerGroup, FaUserCheck, FaUserSlash } from 'react-icons/fa';
import notifyImage from '../../../assets/Notifications.png';
import userImage from '../../../assets/userimg.jpg';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import img7 from '../../../assets/img7.png';
import img8 from '../../../assets/img8.png';
import img9 from '../../../assets/img9.png';

const Dashboard: React.FC = () => {
    const cards = [
        { label: 'Total Users', count: 0, color: 'bg-red-500', icon: <FaUsers /> },
        { label: 'Total Groups', count: 0, color: 'bg-purple-600', icon: <FaLayerGroup /> },
        { label: 'Active Users', count: 0, color: 'bg-cyan-600', icon: <FaUserCheck /> },
        { label: 'Blocked Users', count: 0, color: 'bg-green-600', icon: <FaUserSlash /> },
    ];

    return (
        <div className="relative h-screen w-screen bg-pink-100 text-gray-500 ">

            <div className="absolute top-0 left-0 w-[1270px] h-[70px] flex flex-col items-start px-[30px] py-[21px] gap-[10px] bg-white shadow z-10 topbar">

                <div className="flex justify-between items-center mb-6">

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src={notifyImage}
                                alt="User"
                                className="w-8 h-8 rounded-full border"
                            />
                        </div>
                        <img
                            src={userImage}
                            alt="User"
                            className="w-8 h-8 rounded-full border"
                        />
                    </div>
                </div>
            </div>


            <div className="flex h-full pt-[70px]">

                <aside className="w-16 bg-pink-300 flex flex-col items-center py-4 space-y-6 text-white">

                    <img
                        src={img9}
                        alt="img1"
                        className="w-8 h-8 rounded-full border"
                    />
                    <img
                        src={img1}
                        alt="img1"
                        className="w-8 h-8 rounded-full border"
                    />
                    <img
                        src={img2}
                        alt="img2"
                        className="w-6 h-6 "
                    />
                    <img
                        src={img3}
                        alt="img3"
                        className="w-6 h-6 "
                    />
                    <img
                        src={img4}
                        alt="img4"
                        className="w-6 h-6 "
                    />

                    <img
                        src={img5}
                        alt="img5"
                        className="w-6 h-6 "
                    />
                    <img
                        src={img6}
                        alt="img5"
                        className="w-6 h-6 "
                    />
                    <img
                        src={img7}
                        alt="img5"
                        className="w-6 h-6 "
                    />
                    <img
                        src={img8}
                        alt="img5"
                        className="w-6 h-6 "
                    />

                </aside>


                <div className="flex-1 p-6 ">
                    <h2 className="text-lg font-bold">Admin User</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between p-4 rounded-lg shadow ${card.color} text-white`}
                            >
                                <div className="space-y-1">
                                    <div className="text-sm">{card.label}</div>
                                    <div className="text-xl font-bold">{card.count}</div>
                                </div>
                                <div>{card.icon}</div>
                            </div>
                        ))}
                    </div>


                    <div className="flex items-center space-x-4">
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Show Filter</button>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded">+ Add User</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

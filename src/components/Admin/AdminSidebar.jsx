import React, { useState, useMemo } from 'react';
import { MdHome, MdGroups, MdEvent, MdLogout, MdPersonOutline} from 'react-icons/md';
import { useGlobalContext } from './AdminController';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({ isOpen }) => {
    const [active, setActive] = useState('Dashboard');
    const { openDashboardSection, openRegistrationSection, openEventsSection, openMembersSection } = useGlobalContext();

    const navItems = useMemo(() => [
        { id: 'Dashboard', icon: <MdHome size={20} />, label: 'Dashboard' },
        { id: 'Registration', icon: <MdGroups size={20} />, label: 'Registration' },
        { id: 'Members', icon: <MdPersonOutline size={20} />, label: 'Members' },
        { id: 'Events', icon: <MdEvent size={20} />, label: 'Events' }
        
    ], []);

    const handleClick = (itemId) => {
        setActive(itemId);
        if (itemId === 'Dashboard') openDashboardSection();
        else if (itemId === 'Registration') openRegistrationSection();
        else if (itemId === 'Events') openEventsSection();
        else if (itemId === 'Members') openMembersSection();
    };

    const navigate = useNavigate();

    const navigation = () => {
        sessionStorage.removeItem('adminId');
        navigate("/");
    };

    return (
        <div
            className={`transition-all duration-300 ease-in-out fixed top-0 left-0 z-50 ${
                isOpen ? 'w-[250px] opacity-100' : 'w-0 opacity-0'
            } bg-[#FFFFFF] h-[100vh] py-4 pt-20 shadow-lg flex flex-col justify-between items-start`}
        >
            <div className='flex flex-col justify-start items-start gap-y-4 w-full px-4'>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`h-[44px] w-full text-[16px] font-normal rounded-[8px] cursor-pointer flex items-center pl-3 gap-x-2 transition-all duration-200
                            ${active === item.id
                                ? 'bg-[#4B0082] text-white'
                                : 'bg-transparent text-[#4B0082] hover:bg-[rgba(75,0,130,0.1)]'}`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </div>

            <div className='w-full px-4'>
                <hr className='border-[rgba(75,0,130,0.15)] border-[1px] mb-4' />
                <button
                    onClick={navigation}
                    className='bg-[rgba(75,0,130,0.15)] h-[44px] w-full text-[16px] font-normal text-[#4B0082] rounded-[8px] cursor-pointer flex items-center pl-3 gap-x-2'
                >
                    <MdLogout size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;

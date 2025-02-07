import React from 'react';
import { HomeIcon, ChartBarIcon, ChatBubbleLeftIcon, 
         CogIcon, UserIcon, QuestionMarkCircleIcon, 
         PhoneIcon, ArrowRightOnRectangleIcon } 
from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Insights', icon: ChartBarIcon },
    { name: 'Messages', icon: ChatBubbleLeftIcon, count: 2 },
  ];

  const settingsItems = [
    { name: 'Profile', icon: UserIcon },
    { name: "FAQ's", icon: QuestionMarkCircleIcon },
    { name: 'Contact us', icon: PhoneIcon },
    { name: 'Logout', icon: ArrowRightOnRectangleIcon },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-8">
        <img 
          src="logo-placeholder.jpg" 
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">Energy Audit System</span>
      </div>

      <div className="flex flex-col space-y-6">
        <div>
          <p className="text-gray-500 mb-4">Menu</p>
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
              {item.count && (
                <span className="bg-gray-200 rounded-full px-2 text-sm">{item.count}</span>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="text-gray-500 mb-4">Settings</p>
          {settingsItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

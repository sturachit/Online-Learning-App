import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div 
            className="bg-gradient-to-r from-red-500 to-green-600 text-white p-6 shadow-lg w-64 h-screen fixed top-0 left-0 transition-transform duration-300 ease-in-out"
        >
            <h2 className="text-3xl font-bold mb-8 text-center">Menu</h2>
            <ul className="space-y-4">
                {[
                    { path: "/dashboard", label: "Dashboard" },
                    { path: "/schedule", label: "Schedule" },
                    { path: "/homework", label: "Homework" },
                    { path: "/lecture", label: "Lecture" },
                    { path: "/messages", label: "Messages" },
                    { path: "/settings", label: "Settings" },
                ].map((item) => (
                    <li key={item.path}>
                        <Link 
                            to={item.path} 
                            className="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-600"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

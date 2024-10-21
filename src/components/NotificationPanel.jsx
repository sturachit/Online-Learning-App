import React, { useEffect, useState } from 'react';

const NotificationPanel = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await fetch('https://api.example.com/user/notifications'); // Replace with your API
            const data = await response.json();
            setNotifications(data);
        };

        fetchNotifications();
    }, []);

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-gray-800 text-2xl font-semibold mb-4 text-center">Notifications</h2>
            <ul className="list-none p-0">
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <li 
                            key={index} 
                            className="bg-white mb-3 p-4 rounded-lg shadow hover:bg-blue-50 transition duration-300"
                        >
                            {notification.message}
                        </li>
                    ))
                ) : (
                    <li className="p-4 text-center text-gray-400">
                        No notifications available
                    </li>
                )}
            </ul>
        </div>
    );
};

export default NotificationPanel;

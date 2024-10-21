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
        <div 
            className="notification-container" 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '15px', 
                maxWidth: '600px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Notifications</h2>
            <ul className="list-group" style={{ listStyleType: 'none', padding: 0 }}>
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <li 
                            key={index} 
                            className="list-group-item" 
                            style={{ 
                                padding: '15px', 
                                backgroundColor: '#ffffff', 
                                marginBottom: '10px', 
                                borderRadius: '10px', 
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0f7fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                        >
                            {notification.message}
                        </li>
                    ))
                ) : (
                    <li style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
                        No notifications available
                    </li>
                )}
            </ul>
        </div>
    );
};

export default NotificationPanel;

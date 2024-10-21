import React, { useState } from 'react';

const Dashboard = () => {
    const [userStats] = useState({
        completedCourses: 1,
        enrolledCourses: 5,
        totalHoursWatched: 10,
    });

    const [activities] = useState([
        { id: 1, message: 'Completed the course: React Basics', date: '2024-10-18' },
        { id: 2, message: 'Started the course: JavaScript Advanced', date: '2024-10-15' },
        { id: 3, message: 'Watched: CSS for Beginners', date: '2024-10-14' },
    ]);

    const [upcomingTasks] = useState([
        { id: 1, title: 'Finish project for JavaScript Advanced', dueDate: '2024-10-20' },
        { id: 2, title: 'Watch the next lecture on React Hooks', dueDate: '2024-10-21' },
    ]);

    

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-red-500 to-green-600 rounded-2xl shadow-lg">
            <h2 className="text-white text-3xl font-semibold text-center mb-8">Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {Object.entries(userStats).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-6 shadow-md text-center">
                        <h3 className="text-gray-800 text-2xl font-bold">{value}</h3>
                        <p className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</p>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <h3 className="text-white text-2xl font-semibold mb-4">Recent Activities</h3>
                <ul className="bg-white rounded-lg shadow-md p-4">
                    {activities.map((activity) => (
                        <li key={activity.id} className="border-b last:border-b-0 py-2">
                            <p className="text-gray-800">{activity.message}</p>
                            <small className="text-gray-500">{activity.date}</small>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-white text-2xl font-semibold mb-4">Upcoming Tasks</h3>
                <ul className="bg-white rounded-lg shadow-md p-4">
                    {upcomingTasks.map((task) => (
                        <li key={task.id} className="border-b last:border-b-0 py-2">
                            <strong className="text-gray-800">{task.title}</strong> - Due: {task.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

           
        </div>
    );
};

export default Dashboard;

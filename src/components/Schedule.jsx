import React, { useState } from 'react';

const Schedule = () => {
    const [scheduleItems, setScheduleItems] = useState([]);
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAddSchedule = (e) => {
        e.preventDefault();
        if (subject && date && time) {
            const newScheduleItem = { subject, date, time };
            setScheduleItems([...scheduleItems, newScheduleItem]);
            setSubject('');
            setDate('');
            setTime('');
        }
    };

    const handleDeleteSchedule = (index) => {
        const updatedSchedule = scheduleItems.filter((_, i) => i !== index);
        setScheduleItems(updatedSchedule);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-gray-800 text-xl font-semibold text-center">Schedule</h2>
            <form onSubmit={handleAddSchedule} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Add Schedule
                </button>
            </form>

            <h3 className="text-gray-800 text-lg mt-6">My Schedule</h3>
            <ul className="list-none p-0">
                {scheduleItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg mb-2 bg-white shadow">
                        <span>
                            <strong>{item.subject}</strong> - {item.date} at {item.time}
                        </span>
                        <button 
                            onClick={() => handleDeleteSchedule(index)} 
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;

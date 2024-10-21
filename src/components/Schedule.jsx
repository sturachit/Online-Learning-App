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
        <div 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '15px', 
                maxWidth: '500px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 style={{ color: "grey", textAlign: 'center' }}>Schedule</h2>
            <form onSubmit={handleAddSchedule} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    style={{
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid #ccc', 
                        backgroundColor: '#ffffff'
                    }}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    style={{
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid #ccc', 
                        backgroundColor: '#ffffff'
                    }}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    style={{
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: '1px solid #ccc', 
                        backgroundColor: '#ffffff'
                    }}
                />
                <button 
                    type="submit" 
                    style={{ 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: 'none', 
                        backgroundColor: '#4a90e2', 
                        color: '#fff', 
                        cursor: 'pointer', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                >
                    Add Schedule
                </button>
            </form>

            <h3 style={{ color: "grey", marginTop: '20px' }}>My Schedule</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {scheduleItems.map((item, index) => (
                    <li key={index} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '10px', 
                        border: '1px solid #ddd', 
                        borderRadius: '5px', 
                        marginBottom: '10px', 
                        backgroundColor: '#ffffff' 
                    }}>
                        <span>
                            <strong>{item.subject}</strong> - {item.date} at {item.time}
                        </span>
                        <button 
                            onClick={() => handleDeleteSchedule(index)} 
                            style={{ 
                                backgroundColor: 'red', 
                                color: 'white', 
                                border: 'none', 
                                padding: '5px 10px', 
                                borderRadius: '5px', 
                                cursor: 'pointer' 
                            }}
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

import React, { useState } from 'react';

const Homework = () => {
    const initialHomework = {
        Math: [
            { title: 'Algebra Homework', dueDate: '2024-10-20', isCompleted: false },
            { title: 'Geometry Assignment', dueDate: '2024-10-22', isCompleted: false },
        ],
        Science: [
            { title: 'Physics Experiment Report', dueDate: '2024-10-21', isCompleted: false },
        ],
    };

    const [homeworkData, setHomeworkData] = useState(initialHomework);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [newHomework, setNewHomework] = useState({ title: '', dueDate: '' });
    const [newSubject, setNewSubject] = useState('');

    const addSubject = () => {
        if (newSubject && !homeworkData[newSubject]) {
            setHomeworkData((prevData) => ({
                ...prevData,
                [newSubject]: [],
            }));
            setNewSubject('');
        }
    };

    const addHomework = () => {
        if (newHomework.title && newHomework.dueDate && selectedSubject) {
            setHomeworkData((prevData) => ({
                ...prevData,
                [selectedSubject]: [
                    ...prevData[selectedSubject],
                    { title: newHomework.title, dueDate: newHomework.dueDate, isCompleted: false }
                ]
            }));
            setNewHomework({ title: '', dueDate: '' });
        }
    };

    const deleteHomework = (index) => {
        const updatedHomework = homeworkData[selectedSubject].filter((_, i) => i !== index);
        setHomeworkData((prevData) => ({
            ...prevData,
            [selectedSubject]: updatedHomework
        }));
    };

    const toggleComplete = (index) => {
        const updatedHomework = homeworkData[selectedSubject].map((item, i) =>
            i === index ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setHomeworkData((prevData) => ({
            ...prevData,
            [selectedSubject]: updatedHomework
        }));
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center text-gray-700 mb-6">Homework</h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="New Subject"
                    className="w-full p-3 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                />
                <button
                    onClick={addSubject}
                    className="w-full bg-green-500 text-white py-2 rounded-lg"
                >
                    Add Subject
                </button>
            </div>

            <select
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setSelectedSubject(e.target.value)}
                value={selectedSubject}
            >
                <option value="">Select a Subject</option>
                {Object.keys(homeworkData).map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>

            {selectedSubject && (
                <div>
                    <h3 className="text-xl text-blue-500 mb-4">{selectedSubject} Homework</h3>
                    <ul className="space-y-4">
                        {homeworkData[selectedSubject].map((item, index) => (
                            <li
                                key={index}
                                className={`p-4 bg-white rounded-lg shadow-md flex justify-between items-center transition ${
                                    item.isCompleted ? 'line-through text-gray-500' : ''
                                }`}
                            >
                                <div>
                                    <strong>{item.title}</strong> - Due: {item.dueDate}
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => toggleComplete(index)}
                                        className={`px-3 py-1 rounded-md ${
                                            item.isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300'
                                        }`}
                                    >
                                        {item.isCompleted ? 'Completed' : 'Mark Complete'}
                                    </button>
                                    <button
                                        onClick={() => deleteHomework(index)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="New Homework Title"
                            className="w-full p-2 mb-3 rounded-lg border"
                            value={newHomework.title}
                            onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value })}
                        />
                        <input
                            type="date"
                            className="w-full p-2 mb-3 rounded-lg border"
                            value={newHomework.dueDate}
                            onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
                        />
                        <button
                            onClick={addHomework}
                            className="w-full bg-blue-500 text-white py-2 rounded-lg"
                        >
                            Add Homework
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homework;

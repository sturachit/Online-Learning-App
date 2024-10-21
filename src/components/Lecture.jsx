import React, { useState } from 'react';

const Lecture = () => {
    const initialLectures = [
        {
            title: 'React Basics',
            duration: '1 hour',
            timing: 'Monday, 10:00 AM - 11:00 AM',
            description: 'Learn the fundamentals of React, including components, props, and state management.',
            videoUrl: 'https://youtu.be/SqcY0GlETPk',
        },
        
    ];

    const [lectures, setLectures] = useState(initialLectures);
    const [newLecture, setNewLecture] = useState({
        title: '',
        duration: '',
        timing: '',
        description: '',
        videoUrl: ''
    });

    // Add a new lecture
    const addLecture = () => {
        setLectures([...lectures, newLecture]);
        setNewLecture({ title: '', duration: '', timing: '', description: '', videoUrl: '' });
    };

    // Delete a lecture
    const deleteLecture = (index) => {
        const updatedLectures = lectures.filter((_, i) => i !== index);
        setLectures(updatedLectures);
    };

    // Edit a lecture (for simplicity, toggle logic here can be expanded as needed)
    const editLecture = (index) => {
        const editedLecture = { ...lectures[index], title: `${lectures[index].title} (Edited)` };
        const updatedLectures = [...lectures];
        updatedLectures[index] = editedLecture;
        setLectures(updatedLectures);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center text-gray-700 mb-6">Lecture</h2>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Lecture Title"
                    className="w-full p-2 mb-3 rounded-lg border"
                    value={newLecture.title}
                    onChange={(e) => setNewLecture({ ...newLecture, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Duration"
                    className="w-full p-2 mb-3 rounded-lg border"
                    value={newLecture.duration}
                    onChange={(e) => setNewLecture({ ...newLecture, duration: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Timing"
                    className="w-full p-2 mb-3 rounded-lg border"
                    value={newLecture.timing}
                    onChange={(e) => setNewLecture({ ...newLecture, timing: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="w-full p-2 mb-3 rounded-lg border"
                    value={newLecture.description}
                    onChange={(e) => setNewLecture({ ...newLecture, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Video URL"
                    className="w-full p-2 mb-3 rounded-lg border"
                    value={newLecture.videoUrl}
                    onChange={(e) => setNewLecture({ ...newLecture, videoUrl: e.target.value })}
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg"
                    onClick={addLecture}
                >
                    Add Lecture
                </button>
            </div>

            {/* Lecture List */}
            <div>
                {lectures.map((lecture, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-md mb-6 transition duration-300 ease-in-out hover:bg-blue-100"
                    >
                        <h3 className="text-xl text-blue-500 mb-2">{lecture.title}</h3>
                        <p>Duration: {lecture.duration}</p>
                        <p>Timing: {lecture.timing}</p>
                        <p className="mb-4">{lecture.description}</p>
                        <a
                            href={lecture.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Watch Now
                        </a>
                        <div className="mt-4 flex space-x-4">
                            <button
                                onClick={() => editLecture(index)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteLecture(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lecture;

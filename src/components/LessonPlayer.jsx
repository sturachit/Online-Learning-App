import React from 'react';

const LessonPlayer = ({ lesson }) => {
    return (
        <div 
            className="p-5 bg-gray-100 rounded-lg max-w-xl mx-auto shadow-md"
        >
            <h2 className="text-gray-800 text-2xl mb-5">{lesson.title}</h2>
            <div className="text-center mb-5">
                <video 
                    src={lesson.videoUrl} 
                    controls 
                    className="w-full max-w-lg rounded-lg shadow-md"
                ></video>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">{lesson.content}</p>
        </div>
    );
};

export default LessonPlayer;

import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <div 
            className="bg-white shadow-lg rounded-lg p-5 m-4 hover:bg-gray-100 transition duration-300 ease-in-out max-w-xs md:max-w-md lg:max-w-lg"
        >
            <div className="flex flex-col justify-between h-full">
                <h5 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h5>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link 
                    to={`/courses/${course.id}`} 
                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-center transition duration-300 ease-in-out"
                >
                    View Course
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;

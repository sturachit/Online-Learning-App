import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            const response = await fetch(`https://api.example.com/courses/${id}`); // Replace with your API
            const data = await response.json();
            setCourse(data);
        };

        fetchCourseDetail();
    }, [id]);

    if (!course) return <p className="text-center text-gray-600">Loading...</p>;

    return (
        <div className="container mx-auto p-6 md:p-10 bg-gray-50 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{course.title}</h2>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
        </div>
    );
};

export default CourseDetail;

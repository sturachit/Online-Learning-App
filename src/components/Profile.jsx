import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch('https://api.example.com/user/profile'); // Replace with your API
            const data = await response.json();
            setUser(data);
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-gray-800 text-2xl font-semibold mb-4 text-center">Your Profile</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1 font-bold text-gray-700">Name</label>
                    <input 
                        type="text" 
                        className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={user.name} 
                        readOnly 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-bold text-gray-700">Email</label>
                    <input 
                        type="email" 
                        className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={user.email} 
                        readOnly 
                    />
                </div>
            </form>
        </div>
    );
};

export default Profile;

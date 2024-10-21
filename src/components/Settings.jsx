import React, { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        username: 'Username',
        email: '123@gmail.com',
        notifications: true,
        darkMode: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Settings saved!');
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="form-group">
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
               
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 shadow-md"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;

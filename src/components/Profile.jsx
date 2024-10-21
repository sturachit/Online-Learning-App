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
        <div 
            className="profile-container" 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '15px', 
                maxWidth: '500px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Your Profile</h2>
            <form>
                <div className="mb-3">
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={user.name} 
                        readOnly 
                        style={{
                            padding: '10px', 
                            borderRadius: '5px', 
                            border: '1px solid #ccc', 
                            backgroundColor: '#ffffff', 
                            color: '#555'
                        }} 
                    />
                </div>
                <div className="mb-3">
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={user.email} 
                        readOnly 
                        style={{
                            padding: '10px', 
                            borderRadius: '5px', 
                            border: '1px solid #ccc', 
                            backgroundColor: '#ffffff', 
                            color: '#555'
                        }} 
                    />
                </div>
            </form>
        </div>
    );
};

export default Profile;

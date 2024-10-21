import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import UserDashboard from './components/UserDashboard';
import CourseDetail from './components/CourseDetail';
import Profile from './components/Profile';
import NotificationPanel from './components/NotificationPanel';
import Sidebar from './components/Sidebar';
import Schedule from './components/Schedule';
import Homework from './components/Homework';
import Lecture from './components/Lecture';
import Messages from './components/Messages';
import Settings from './components/Settings';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<UserDashboard />} /> 
                        <Route path="/courses/:id" element={<CourseDetail />} />
                        <Route path="/dashboard" element={<UserDashboard />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/homework" element={<Homework />} />
                        <Route path="/lecture" element={<Lecture />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/notifications" element={<NotificationPanel />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

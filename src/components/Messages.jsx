import React, { useState } from 'react';

const Messages = () => {
    const initialMessages = [];

    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState({ sender: '', content: '' });
    const [editingId, setEditingId] = useState(null);

    const handleAddMessage = () => {
        if (newMessage.sender && newMessage.content) {
            const currentDate = new Date().toLocaleString();
            const newMsg = {
                id: messages.length + 1,
                ...newMessage,
                date: currentDate,
            };
            setMessages([...messages, newMsg]);
            setNewMessage({ sender: '', content: '' });
        }
    };

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id));
    };

    const handleEditMessage = (id) => {
        const messageToEdit = messages.find(message => message.id === id);
        setNewMessage({ sender: messageToEdit.sender, content: messageToEdit.content });
        setEditingId(id);
    };

    const handleSaveEdit = () => {
        setMessages(messages.map(message =>
            message.id === editingId ? { ...message, ...newMessage } : message
        ));
        setEditingId(null);
        setNewMessage({ sender: '', content: '' });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Messages</h2>
            <ul className="space-y-4">
                {messages.map(message => (
                    <li key={message.id} className="p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition-all">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{message.sender}</h4>
                        <p className="text-gray-600 mb-3">{message.content}</p>
                        <span className="text-sm text-gray-500">{message.date}</span>
                        <div className="mt-4">
                            <button 
                                className="text-blue-500 hover:underline mr-4" 
                                onClick={() => handleEditMessage(message.id)}
                            >
                                Edit
                            </button>
                            <button 
                                className="text-red-500 hover:underline" 
                                onClick={() => handleDeleteMessage(message.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Add/Edit Form */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">
                    {editingId ? 'Edit Message' : 'Add New Message'}
                </h3>
                <input
                    type="text"
                    placeholder="Sender"
                    value={newMessage.sender}
                    onChange={(e) => setNewMessage({ ...newMessage, sender: e.target.value })}
                    className="w-full mb-4 p-2 border rounded"
                />
                <textarea
                    placeholder="Message content"
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                    className="w-full mb-4 p-2 border rounded"
                />
                <button
                    onClick={editingId ? handleSaveEdit : handleAddMessage}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    {editingId ? 'Save Changes' : 'Add Message'}
                </button>
            </div>
        </div>
    );
};

export default Messages;

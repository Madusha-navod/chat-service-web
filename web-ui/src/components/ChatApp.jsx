import React, { useState } from "react";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [language, setLanguage] = useState("en");

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Group Chat</h2>

        {/* Room & Language Selection */}
        <div className="mt-4 flex flex-col space-y-2">
          <input
            type="text"
            className="w-full p-2 bg-gray-700 rounded-md"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <select
            className="w-full p-2 bg-gray-700 rounded-md"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
          <button className="bg-green-500 p-2 rounded-md hover:bg-green-600 transition mt-2">
            Join Room
          </button>
        </div>
        {/* Messages Display */}
        <div className="h-60 overflow-y-auto bg-gray-700 p-4 rounded-lg mt-3 space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-600 rounded-md">
              {msg}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex mt-4">
          <input
            type="text"
            className="w-full p-2 rounded-l-md bg-gray-700 border-none focus:outline-none"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default ChatApp;

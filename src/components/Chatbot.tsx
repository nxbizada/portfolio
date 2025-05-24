'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiUser } from 'react-icons/fi';
import Image from 'next/image';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Farhad. I'm here to answer any questions you have about my background, skills, and projects. Feel free to ask me anything!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.reply,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FiX size={20} className="sm:w-6 sm:h-6" /> : <FiMessageCircle size={20} className="sm:w-6 sm:h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:bottom-24 sm:right-6 sm:top-auto sm:left-auto sm:inset-auto z-40 sm:w-96 sm:h-[500px] bg-white dark:bg-gray-800 sm:rounded-lg shadow-2xl border-0 sm:border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 flex items-center space-x-3 pt-safe-top">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/30">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQFk0I6hhGzkAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684838139084?e=1753315200&v=beta&t=Bu40Kqemnziwa4ToGKQjm6xaHVhf0hIdy1KxqCFrPZY"
                alt="Farhad Nabizada"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base">Chat with Farhad</h3>
              <p className="text-xs sm:text-sm opacity-90">Ask me anything about my work!</p>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden p-2 hover:bg-white/20 rounded-full"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-4 space-y-4 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] sm:max-w-[80%] p-3 sm:p-3 rounded-lg text-sm sm:text-base ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <div className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full flex items-center justify-center overflow-hidden ${
                      message.isUser ? 'bg-white/20' : ''
                    }`}>
                      {message.isUser ? (
                        <FiUser size={14} className="text-white" />
                      ) : (
                        <Image
                          src="https://media.licdn.com/dms/image/v2/D4E03AQFk0I6hhGzkAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684838139084?e=1753315200&v=beta&t=Bu40Kqemnziwa4ToGKQjm6xaHVhf0hIdy1KxqCFrPZY"
                          alt="Farhad"
                          width={24}
                          height={24}
                          className="object-cover w-full h-full rounded-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-1 opacity-70 ${
                        message.isUser ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 sm:p-3 rounded-lg rounded-bl-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D4E03AQFk0I6hhGzkAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684838139084?e=1753315200&v=beta&t=Bu40Kqemnziwa4ToGKQjm6xaHVhf0hIdy1KxqCFrPZY"
                        alt="Farhad"
                        width={24}
                        height={24}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 sm:p-4 pb-safe-bottom">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-3 sm:p-2 text-base sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-3 sm:p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FiSend size={20} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 
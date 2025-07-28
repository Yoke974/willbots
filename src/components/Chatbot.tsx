'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! I'm your Willbots AI assistant 🤖\nHow can I help you today?\n\nExamples: Automation, n8n, Web Scraping..."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Fallback responses for common questions
  const getFallbackResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('n8n')) {
      return "n8n is a powerful workflow automation tool! I can help you with:\n\n• Setting up automated workflows\n• Connecting different apps and services\n• Creating custom integrations\n• Data processing and transformation\n\nWould you like to know more about a specific aspect?";
    }
    
    if (lowerMessage.includes('automation') || lowerMessage.includes('workflow')) {
      return "Workflow automation can transform your business! Here's what I can help with:\n\n• Process automation\n• Data collection and processing\n• Email and notification systems\n• API integrations\n• Custom business logic\n\nWhat type of automation interests you?";
    }
    
    if (lowerMessage.includes('scraping') || lowerMessage.includes('web scraping')) {
      return "Web scraping is essential for data collection! I can help you with:\n\n• Extracting data from websites\n• Structured data processing\n• Automated data collection\n• Integration with databases\n• Real-time data monitoring\n\nWhat kind of data do you need to collect?";
    }
    
    if (lowerMessage.includes('api') || lowerMessage.includes('integration')) {
      return "API integrations connect your systems! I can help with:\n\n• REST API connections\n• Webhook implementations\n• Data synchronization\n• Custom API development\n• Third-party service integration\n\nWhich service would you like to integrate?";
    }
    
    return "I'm here to help with automation, n8n workflows, web scraping, and API integrations! What would you like to know more about?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      console.log('Sending message to Dify:', userMessage);
      
      const response = await fetch('https://api.dify.ai/v1/chat-messages', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer app-hnpl0YNQm4WIXXDD3opNIxKO',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {},
          query: userMessage,
          response_mode: "blocking",
          conversation_id: conversationId
        }),
      });

      console.log('Dify response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Dify response data:', data);

        if (data.conversation_id) {
          setConversationId(data.conversation_id);
        }

        if (data.answer) {
          setMessages(prev => [...prev, { role: 'bot', content: data.answer }]);
        } else {
          // Fallback to local response
          const fallbackResponse = getFallbackResponse(userMessage);
          setMessages(prev => [...prev, { role: 'bot', content: fallbackResponse }]);
        }
      } else {
        // API failed, use fallback
        const fallbackResponse = getFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'bot', content: fallbackResponse }]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      // Use fallback response
      const fallbackResponse = getFallbackResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', content: fallbackResponse }]);
    } finally {
      setIsTyping(false);
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
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-[#6e00ff] to-[#00d1ff] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-robot"></i>
        </motion.button>
      </motion.div>

      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-[#112240] rounded-xl border border-[#233554] shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#233554]">
              <h3 className="text-lg font-bold text-white">AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8892b0] hover:text-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-[#00d1ff]/20 text-white rounded-br-sm'
                        : 'bg-[#6e00ff]/20 text-white rounded-bl-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-[#6e00ff]/20 text-white rounded-lg rounded-bl-sm p-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#00d1ff] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#00d1ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-[#00d1ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">Willbots is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#233554]">
              <div className="flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#0a192f] border border-[#233554] rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00d1ff] text-white"
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-[#6e00ff] text-white px-4 rounded-r-lg font-medium hover:bg-[#00d1ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 
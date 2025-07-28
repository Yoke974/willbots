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
      content: "Hello! 👋 I'm Willbots' assistant.\nTell me briefly what could save you time today:\n\n• Task automation?\n• Data extraction?\n• A website + AI chatbot?"
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

  // Fallback responses aligned with new prompt
  const getFallbackResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('automation') || lowerMessage.includes('automate')) {
      return "Perfect! Will specializes in automation with n8n, Make, and Zapier.\n\n✅ Save 10h/week automating emails, invoices & reporting\n✅ Connect your apps seamlessly\n✅ Custom workflows for your business\n\nWhat specific task would you like to automate?";
    }
    
    if (lowerMessage.includes('data') || lowerMessage.includes('scraping') || lowerMessage.includes('extraction')) {
      return "Great choice! We extract data from:\n\n✅ Google Maps & directories\n✅ Public databases & websites\n✅ APIs & custom sources\n✅ Real-time monitoring\n\nWhat type of data do you need collected?";
    }
    
    if (lowerMessage.includes('website') || lowerMessage.includes('web') || lowerMessage.includes('chatbot')) {
      return "Excellent! We build complete websites with:\n\n✅ Portfolio, e-commerce & landing pages\n✅ Custom AI chatbots (like this one!)\n✅ 24/7 automated customer support\n✅ Dify integration for smart replies\n\nNeed a website, chatbot, or both?";
    }
    
    if (lowerMessage.includes('n8n')) {
      return "n8n expert here! Will can help you:\n\n✅ Build powerful automation workflows\n✅ Connect 200+ apps and services\n✅ Save hours with custom integrations\n✅ Process data automatically\n\nWhat's your automation goal?";
    }
    
    if (lowerMessage.includes('api') || lowerMessage.includes('integration')) {
      return "API integrations are our specialty!\n\n✅ Connect any service or platform\n✅ Custom API development\n✅ Real-time data synchronization\n✅ Webhook implementations\n\nWhich systems need connecting?";
    }
    
    return "I help businesses save time with:\n\n✅ Task automation (emails, reports, workflows)\n✅ Data extraction (Google Maps, databases)\n✅ Website + AI chatbot development\n\nWhich area interests you most?";
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
          inputs: {
            system_prompt: "You are the AI assistant for Willbots (www.willbots.shop), specializing in automation, API integration, AI, and web development.\n\n🎯 Your Mission:\nWelcome visitors and identify their needs in 1-2 questions max.\nOffer tailored solutions with clear benefits.\nHighlight Will Gigan's expertise in:\n• Automation (n8n, Make, Zapier)\n• Web Scraping (Google Maps, directories, public databases)\n• Full Website Development (with customizable AI chatbots)\n\n✨ Key Services:\n✅ Automation (emails, invoices, reporting)\n✅ Data Extraction (scraping, APIs, public databases)\n✅ Website Development (portfolio, e-commerce, landing pages)\n✅ Custom AI Chatbots (Dify integration, automated replies, 24/7 customer support)\n\n🗣 Response Style:\n• Professional yet simple\n• Concise (3-5 lines max)\n• Results-driven (e.g., \"Save 10h/week by automating emails\")"
          },
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
          className="w-16 h-16 bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl"
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
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-[#1a1f2e] rounded-xl border border-[#00d4ff]/20 shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#00d4ff]/20">
              <h3 className="text-lg font-bold text-white">Willbots Assistant</h3>
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
                        ? 'bg-[#00d4ff]/20 text-white rounded-br-sm'
                        : 'bg-[#ff00ff]/20 text-white rounded-bl-sm'
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
                  <div className="bg-[#ff00ff]/20 text-white rounded-lg rounded-bl-sm p-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">Willbots is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#00d4ff]/20">
              <div className="flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#0a0f1c] border border-[#00d4ff]/30 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] text-white"
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-[#ff00ff] text-white px-4 rounded-r-lg font-medium hover:bg-[#00d4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
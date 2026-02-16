import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { chatbotKnowledge, quickSuggestions } from '../data/resumeData';

const getResponse = (query) => {
  const lowerQuery = query.toLowerCase();

  // Keyword matching
  if (lowerQuery.match(/skill|tech|programming|code|develop/)) {
    return chatbotKnowledge.skills;
  }
  if (lowerQuery.match(/navy|military|sea|service|veteran/)) {
    return chatbotKnowledge.navy;
  }
  if (lowerQuery.match(/project|app|portfolio|built|create/)) {
    return chatbotKnowledge.projects;
  }
  if (lowerQuery.match(/education|degree|school|certificate|college/)) {
    return chatbotKnowledge.education;
  }
  if (lowerQuery.match(/clearance|security|secret/)) {
    return chatbotKnowledge.clearance;
  }
  if (lowerQuery.match(/experience|work|job|career|employ/)) {
    return chatbotKnowledge.experience;
  }
  if (lowerQuery.match(/sales|deal|record|sell/)) {
    return chatbotKnowledge.sales;
  }
  if (lowerQuery.match(/contact|email|phone|reach|hire|linkedin/)) {
    return chatbotKnowledge.contact;
  }
  if (lowerQuery.match(/coach|youth|basketball|mentor/)) {
    return chatbotKnowledge.coaching;
  }
  if (lowerQuery.match(/who|about|summary|dominique|tell me/)) {
    return chatbotKnowledge.summary;
  }

  // Default response
  return chatbotKnowledge.summary;
};

const suggestionToQuery = {
  'Top Skills': 'What are your top skills?',
  'Navy Service': 'Tell me about your Navy service',
  'Projects': 'What projects have you built?',
  'Education': 'What is your education background?',
  'Clearance': 'Do you have security clearance?',
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to help you learn about Dominique. Ask me about his skills, experience, projects, or anything else!",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: 'user', text }]);

    // Get bot response
    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const query = suggestionToQuery[suggestion] || suggestion;
    handleSend(query);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle"
        aria-label="Toggle chat"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-syne font-bold text-sm">DM</span>
                </div>
                <div>
                  <h4 className="font-syne font-bold">Ask About Dominique</h4>
                  <p className="text-sm opacity-80">Powered by AI · Instant answers</p>
                </div>
              </div>
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className="quick-suggestions">
                {quickSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="quick-suggestion"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`chat-message ${message.type}`}
                >
                  {message.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
              />
              <button onClick={() => handleSend()} aria-label="Send message">
                <FiSend size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

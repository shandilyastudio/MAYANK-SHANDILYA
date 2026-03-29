import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot, Sparkles, ArrowLeft, MoreVertical, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Guide() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! I am your Village Guide. How can I help you plan your perfect celebration today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful village event planning guide called "Village Guide". You help users plan events in rural areas, bridging city elegance with rural charm. Keep your tone warm, helpful, and culturally respectful. User says: ${input}` }] }
        ],
        config: {
          systemInstruction: "You are a helpful village event planning guide called 'Village Guide'. You help users plan events in rural areas, bridging city elegance with rural charm. Keep your tone warm, helpful, and culturally respectful."
        }
      });

      const botMsg = { role: 'bot', text: response.text || "I'm sorry, I couldn't process that. How else can I help?" };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Namaste, I am having some trouble connecting. Please try again in a moment." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-surface z-[60] flex flex-col">
      {/* Header */}
      <header className="glass-effect border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 rounded-full hover:bg-primary/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <Bot className="w-6 h-6 text-on-surface" />
            </div>
            <div>
              <h1 className="text-lg font-headline font-bold text-on-surface">Village Guide</h1>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary/5 transition-colors text-primary"><Phone className="w-6 h-6" /></button>
          <button className="p-2 rounded-full hover:bg-primary/5 transition-colors text-primary"><MoreVertical className="w-6 h-6" /></button>
        </div>
      </header>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex items-end gap-3 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                msg.role === 'user' ? "bg-primary text-on-primary" : "bg-surface-container-highest text-primary"
              )}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl shadow-sm text-sm leading-relaxed",
                msg.role === 'user' 
                  ? "bg-primary text-on-primary rounded-br-none" 
                  : "bg-surface-container-lowest text-on-surface border border-outline-variant/10 rounded-bl-none"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-on-surface-variant text-xs font-bold ml-11"
            >
              <Sparkles className="w-4 h-4 animate-spin text-primary" />
              Guide is thinking...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-6 glass-effect border-t border-outline-variant/10 shrink-0">
        <div className="max-w-4xl mx-auto relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about venues, catering, or logistics..."
            className="w-full h-14 pl-6 pr-16 bg-surface-container-low border border-outline-variant/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-2 w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all disabled:opacity-50 disabled:scale-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-4">
          Powered by Festive Hearth AI
        </p>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { throttle } from 'lodash';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<NodeJS.Timeout>();
  const { toast } = useToast();
  
  // Add styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Viswa's AI assistant. Feel free to ask me anything about his skills, experience, projects, or background. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let lastScrollPosition = 0;
    let ticking = false;
    
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
      lastScrollPosition = currentScrollPosition;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only show popup when:
          // 1. Scrolling down
          // 2. Scrolled more than 300px
          // 3. Chat is closed
          // 4. Popup is not already showing
          if (scrollDirection === 'down' && 
              currentScrollPosition > 300 && 
              !isOpen && 
              !showPopup) {
            setShowPopup(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle the scroll event for better performance
    const throttledScroll = throttle(handleScroll, 200);
    
    // Add scroll event listener
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      throttledScroll.cancel?.();
    };
  }, [isOpen, showPopup]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare conversation history for the API
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const { data, error } = await supabase.functions.invoke('chat-with-gemini', {
        body: {
          message: userMessage.content,
          conversationHistory
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get response from the chatbot. Please try again.",
        variant: "destructive",
      });
      
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Popup Message */}
      {showPopup && !isOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in-up">
          <div className="bg-primary text-primary-foreground rounded-xl p-4 shadow-xl max-w-xs md:max-w-sm">
            <div className="flex items-start gap-3">
              <div className="bg-primary-foreground/20 p-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Tired of scrolling?</p>
                <p className="text-sm opacity-90 mt-1">Ask me anything about Viswa's skills and experience!</p>
                <Button 
                  onClick={() => {
                    setIsOpen(true);
                    setShowPopup(false);
                  }}
                  size="sm" 
                  variant="secondary" 
                  className="mt-2 w-full flex items-center gap-1 text-sm"
                >
                  Chat Now <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground ml-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <div
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ease-out ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl border-2 border-primary/20 transition-all duration-500 hover:scale-110 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
        </Button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 z-50 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        } md:bottom-6 md:right-6`}
      >
        <Card className="flex flex-col w-screen h-[calc(100vh-4rem)] md:w-[420px] md:h-[600px] md:max-h-[700px] md:rounded-2xl shadow-2xl border border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <CardHeader className="relative flex flex-row items-center justify-between p-6 pb-4 border-b border-border/50 bg-background/80 backdrop-blur-sm">
            <CardTitle className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-foreground">Viswa's AI Assistant</div>
                <div className="text-sm text-muted-foreground font-normal">Always here to help</div>
              </div>
            </CardTitle>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-muted/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="relative flex flex-col h-[calc(100%-80px)] p-3 md:p-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto pb-4 space-y-2 md:space-y-3 scrollbar-thin scrollbar-thumb-border/20 scrollbar-track-transparent pr-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in-up ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mt-1 ring-2 ring-primary/10">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  
                   <div
                     className={`max-w-[90%] md:max-w-[300px] p-3 rounded-xl text-sm leading-relaxed shadow-sm transition-all ${
                       message.role === 'user'
                         ? 'bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-br-sm'
                         : 'bg-muted/50 border border-border/30 rounded-bl-sm backdrop-blur-sm'
                     }`}
                   >
                    <p className="whitespace-pre-wrap break-words text-sm md:text-base">{message.content}</p>
                    <span className={`text-[10px] mt-1 block opacity-75 ${message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  
                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mt-1 ring-2 ring-primary/20">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start animate-fade-in">
                  <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mt-1 ring-2 ring-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted/50 border border-border/30 p-4 rounded-2xl rounded-bl-md text-sm backdrop-blur-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="sticky bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border/30 p-2">
              <div className="flex gap-2 items-end">
                <Textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Viswa..."
                  className="flex-1 min-h-[48px] max-h-[120px] text-sm md:text-base resize-none border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/60 rounded-xl"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  size="icon"
                  className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
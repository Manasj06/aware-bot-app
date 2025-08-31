import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI Health Assistant. I can help you with health information, disease awareness, and answer your medical questions. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    // Placeholder responses - will be replaced with actual AI integration
    const responses: { [key: string]: string } = {
      covid: "COVID-19 is a respiratory disease caused by the SARS-CoV-2 virus. Key symptoms include fever, cough, and difficulty breathing. Prevention measures include vaccination, wearing masks, and maintaining social distance. Would you like more specific information?",
      diabetes: "Diabetes is a chronic condition that affects how your body processes blood sugar. Type 1 diabetes is usually diagnosed in children, while Type 2 is more common in adults. Management includes diet control, regular exercise, and medication. What aspect would you like to know more about?",
      headache: "Headaches can have various causes including tension, dehydration, or underlying conditions. For persistent or severe headaches, it's important to consult a healthcare provider. Common remedies include rest, hydration, and over-the-counter pain relievers. Is this a recurring issue?",
      fever: "Fever is your body's natural response to infection. If temperature exceeds 103°F (39.4°C) or persists for more than 3 days, seek medical attention. Stay hydrated and rest. Are you experiencing any other symptoms?",
      default: "I understand you're looking for health information. While I can provide general guidance, please remember that for specific medical concerns, it's important to consult with a healthcare professional. Could you tell me more about what you'd like to know?",
    };

    const lowerMessage = userMessage.toLowerCase();
    for (const key in responses) {
      if (lowerMessage.includes(key)) {
        return responses[key];
      }
    }
    return responses.default;
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-mesh flex flex-col">
      {/* Chat Header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-4">
        <div className="container mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg">AI Health Assistant</h1>
            <p className="text-sm text-muted-foreground">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 animate-message-in",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                
                <div
                  className={cn(
                    "max-w-[70%] px-4 py-3 rounded-2xl shadow-soft",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card glass-card"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={cn(
                      "text-xs mt-1",
                      message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start animate-message-in">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-card glass-card shadow-soft">
                  <div className="flex gap-1 items-center">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-background/95 backdrop-blur-md border-t border-border/50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your health question..."
              className="flex-1 bg-background/50"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isTyping || inputMessage.trim() === ""}
              variant="hero"
              size="icon"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            This AI provides general health information only. For medical emergencies, call emergency services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Brain, Heart, MessageCircle, Users, ChevronRight } from "lucide-react";
import healthHero from "@/assets/health-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get accurate health information powered by advanced AI technology",
    },
    {
      icon: Shield,
      title: "Trusted Information",
      description: "Access verified medical content from reliable health sources",
    },
    {
      icon: Users,
      title: "24/7 Availability",
      description: "Get health guidance anytime, anywhere, whenever you need it",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={healthHero} 
            alt="Healthcare technology" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Your Health, Our Priority</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-slide-up">
              AI-Driven Public Health{" "}
              <span className="text-gradient">Chatbot</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Your guide to reliable health information and disease awareness. 
              Get personalized health insights powered by advanced AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/chat">
                <Button variant="hero" size="lg" className="group">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/awareness">
                <Button variant="outline" size="lg">
                  <Activity className="mr-2 h-4 w-4" />
                  Learn About Diseases
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-health-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-health-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Why Choose Our Health Assistant?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of healthcare information with our intelligent chatbot
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who trust our AI health assistant for reliable medical information
            </p>
            <Link to="/chat">
              <Button variant="glass" size="lg" className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with AI Assistant
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
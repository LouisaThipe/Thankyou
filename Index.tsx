import { Code, Cpu, Database, Wifi, Heart, Users, Clock, Sparkles, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MicrosoftLogo from "@/components/MicrosoftLogo";

const Index = () => {
  const appreciationCards = [
    {
      title: "Support",
      description: "Your unwavering support has been the backbone of our success. Every challenge we faced was made lighter by your encouragement.",
      icon: HandHeart,
      color: "hsl(var(--tech-green))",
    },
    {
      title: "Participation",
      description: "Your active involvement and enthusiastic engagement made this event truly memorable and impactful for everyone.",
      icon: Users,
      color: "hsl(var(--tech-blue))",
    },
    {
      title: "Patience",
      description: "Thank you for your understanding and patience throughout. Your grace during challenging moments means everything.",
      icon: Clock,
      color: "hsl(var(--tech-yellow))",
    },
    {
      title: "Love & Grace",
      description: "The warmth, kindness, and grace you've shown created an environment where everyone felt valued and inspired.",
      icon: Heart,
      color: "hsl(var(--tech-red))",
    },
  ];

  const techIcons = [
    { Icon: Code, color: "hsl(var(--tech-green))", delay: "0s" },
    { Icon: Cpu, color: "hsl(var(--tech-blue))", delay: "0.5s" },
    { Icon: Database, color: "hsl(var(--tech-yellow))", delay: "1s" },
    { Icon: Wifi, color: "hsl(var(--tech-red))", delay: "1.5s" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted font-inter">
      {/* Floating tech icons background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        {techIcons.map(({ Icon, color, delay }, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              left: `${(index + 1) * 20}%`,
              top: `${(index + 1) * 15}%`,
              animationDelay: delay,
              color: color,
            }}
          >
            <Icon size={80} />
          </div>
        ))}
        <div className="absolute animate-float" style={{ left: "10%", top: "60%", animationDelay: "2s" }}>
          <MicrosoftLogo size={80} className="opacity-60" />
        </div>
        <div className="absolute animate-float" style={{ left: "85%", top: "40%", animationDelay: "2.5s" }}>
          <MicrosoftLogo size={80} className="opacity-60" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center gap-6 items-center flex-wrap">
            <MicrosoftLogo size={40} className="animate-pulse" />
            <Sparkles className="text-[hsl(var(--tech-yellow))] animate-pulse" size={40} />
            <Code className="text-[hsl(var(--tech-green))] animate-bounce" size={40} />
            <MicrosoftLogo size={40} className="animate-bounce" />
            <Cpu className="text-[hsl(var(--tech-blue))] animate-pulse" size={40} />
            <Database className="text-[hsl(var(--tech-red))] animate-bounce" size={40} />
          </div>
          
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--tech-blue))] via-[hsl(var(--tech-green))] to-[hsl(var(--tech-red))] bg-clip-text text-transparent animate-fade-in">
            Thank You!
          </h1>
          
          <p className="font-space text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in-delay">
            Enterprise Partner Connect 2024
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-delay-2">
              To our incredible colleagues: Your dedication, collaboration, and spirit have made this event 
              an extraordinary success. This is more than a thank you—it's a celebration of everything we've 
              accomplished together.
            </p>
          </div>
        </div>
      </section>

      {/* Appreciation Cards */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {appreciationCards.map((card, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-opacity-50 animate-slide-up bg-gradient-to-br from-card to-card/50 backdrop-blur"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: card.color,
                }}
              >
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <card.icon 
                      size={32} 
                      style={{ color: card.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 
                    className="font-space text-2xl font-bold mb-4 transition-colors"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="px-6 py-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[hsl(var(--tech-blue))]/10 via-[hsl(var(--tech-green))]/10 to-[hsl(var(--tech-yellow))]/10 rounded-2xl p-12 backdrop-blur border border-border/50">
            <Heart className="mx-auto mb-6 text-[hsl(var(--tech-red))] animate-pulse" size={48} />
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
              With Heartfelt Gratitude
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You've shown us what true partnership means. Your contributions have shaped not just this event, 
              but the future we're building together. Here's to the amazing journey ahead and the incredible 
              community we've built. Thank you for being exceptional in every way.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Index;

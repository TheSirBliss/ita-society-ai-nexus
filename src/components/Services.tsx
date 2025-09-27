import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Target, 
  Heart, 
  BarChart3, 
  Route, 
  MessageSquare, 
  Eye, 
  Layers, 
  Rocket,
  ArrowRight
} from "lucide-react";

const aiDevelopmentServices = [
  {
    title: "AI Wizard",
    description: "Create dynamic, personalized websites in moments using our advanced artificial intelligence",
    icon: Zap,
    color: "from-ita-green to-quantum-teal"
  },
  {
    title: "Agent Nexus",
    description: "Access a network of autonomous AI agents to automate complex tasks and optimize business processes",
    icon: Network,
    color: "from-cyber-blue to-neural-purple"
  },
  {
    title: "Prompt Virtuoso Automator",
    description: "Generate and optimize prompts for language models, maximizing the effectiveness of your interactions",
    icon: Brain,
    color: "from-neural-purple to-ita-red"
  }
];

const securityServices = [
  {
    title: "Sentinel Cyber Nexus AI",
    description: "AI-powered cybersecurity solutions for proactive protection of your digital infrastructure",
    icon: Shield,
    color: "from-ita-red to-ita-red-light"
  },
  {
    title: "PenTest AI Portal",
    description: "Simulate cyberattacks to identify and fix vulnerabilities in your systems before they can be exploited",
    icon: Target,
    color: "from-quantum-teal to-cyber-blue"
  },
  {
    title: "MedTrack Analyzer",
    description: "Advanced platform for analyzing medical data, supporting research and diagnostics with AI-driven insights",
    icon: Heart,
    color: "from-ita-green-light to-neural-purple"
  }
];

const businessServices = [
  {
    title: "Business Nexus",
    description: "An ecosystem of intelligent tools, AI agents, and automations to manage, analyze, and grow your business.",
    icon: BarChart3,
    color: "from-cyber-blue to-ita-green"
  },
  {
    title: "Smart Delivery Routes",
    description: "Optimize delivery routes with intelligent algorithms to reduce costs, times and emissions",
    icon: Route,
    color: "from-ita-red to-quantum-teal"
  },
  {
    title: "SomaSynth",
    description: "Your AI doctor and psychotherapist that remembers conversations to respond comprehensively to symptoms",
    icon: Heart,
    color: "from-neural-purple to-ita-green-light"
  },
  {
    title: "Discord Ultimate Bot",
    description: "Enhance your server with interactive buttons and advanced features to boost engagement",
    icon: MessageSquare,
    color: "from-ita-green to-cyber-blue"
  }
];

const innovationServices = [
  {
    title: "Dream Recorder",
    description: "MIT project brought to light: revolutionary machine to visualize and collect data on brain activity during dreaming phases",
    icon: Eye,
    color: "from-neural-purple to-cyber-blue"
  },
  {
    title: "Holo Revolution",
    description: "Research on the most advanced holographic projection methods for the future of digital interaction",
    icon: Layers,
    color: "from-ita-green to-ita-red"
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <Card className="group relative overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30">
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
    <CardHeader className="relative z-10">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-6 h-6 text-foreground" />
      </div>
      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4">
        {service.description}
      </CardDescription>
      <Button variant="ghost" size="sm" className="group/btn">
        Scopri di più
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </Button>
    </CardContent>
  </Card>
);

const ServiceSection = ({ title, description, services, id }: { title: string; description: string; services: any[]; id: string }) => (
  <section id={id} className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export const Services = () => {
  return (
    <div className="bg-background">
      <ServiceSection
        id="ai-development"
        title="AI Development & Automation"
        description="Cutting-edge AI solutions to transform the way you work and innovate"
        services={aiDevelopmentServices}
      />
      
      <ServiceSection
        id="security"
        title="Security & Data Analysis"
        description="Advanced protection and intelligent insights for your digital ecosystem"
        services={securityServices}
      />
      
      <ServiceSection
        id="business"
        title="Business Solutions & Utilities"
        description="An ecosystem of intelligent tools, AI agents, and automations to manage, analyze, and grow your business."
        services={businessServices}
      />
      
      <ServiceSection
        id="innovations"
        title="Revolutionary Innovations"
        description="Cutting-edge research defining the future of technology"
        services={innovationServices}
      />

      {/* Custom AI Solutions CTA */}
      <section className="py-20 bg-gradient-neural">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-background/20 backdrop-blur-sm rounded-full mb-8 mx-auto">
            <Rocket className="w-10 h-10 text-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Request a Custom AI Solution
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Do you have specific needs? Our team of AI experts develops tailored solutions
            for your unique business challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl">
              Request a Free Consultation
            </Button>
            <Button variant="enterprise" size="xl">
              Explore Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
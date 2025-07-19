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
    description: "Crea siti web dinamici e personalizzati in pochi istanti utilizzando la nostra intelligenza artificiale avanzata",
    icon: Zap,
    color: "from-ita-green to-quantum-teal"
  },
  {
    title: "Agent Nexus",
    description: "Accedi a una rete di agenti AI autonomi per automatizzare task complesse e ottimizzare i processi aziendali",
    icon: Network,
    color: "from-cyber-blue to-neural-purple"
  },
  {
    title: "Prompt Virtuoso Automator",
    description: "Genera e ottimizza prompt per modelli linguistici, massimizzando l'efficacia delle tue interazioni",
    icon: Brain,
    color: "from-neural-purple to-ita-red"
  }
];

const securityServices = [
  {
    title: "Sentinel Cyber Nexus AI",
    description: "Soluzioni di cybersecurity potenziate dall'AI per la protezione proattiva delle tue infrastrutture digitali",
    icon: Shield,
    color: "from-ita-red to-ita-red-light"
  },
  {
    title: "PenTest AI Portal",
    description: "Simula attacchi informatici per identificare e correggere le vulnerabilità dei tuoi sistemi prima che vengano sfruttate",
    icon: Target,
    color: "from-quantum-teal to-cyber-blue"
  },
  {
    title: "MedTrack Analyzer",
    description: "Piattaforma avanzata per l'analisi di dati medici, supportando la ricerca e la diagnostica con insight basati sull'AI",
    icon: Heart,
    color: "from-ita-green-light to-neural-purple"
  }
];

const businessServices = [
  {
    title: "Business Nexus",
    description: "Un ecosistema di strumenti intelligenti per la gestione, l'analisi e la crescita del tuo business",
    icon: BarChart3,
    color: "from-cyber-blue to-ita-green"
  },
  {
    title: "Smart Delivery Routes",
    description: "Ottimizza i percorsi di consegna con algoritmi intelligenti per ridurre costi, tempi ed emissioni",
    icon: Route,
    color: "from-ita-red to-quantum-teal"
  },
  {
    title: "SomaSynth",
    description: "Il tuo medico e psicoterapeuta AI che mantiene in memoria le conversazioni per rispondere in modo completo ai sintomi",
    icon: Heart,
    color: "from-neural-purple to-ita-green-light"
  },
  {
    title: "Discord Ultimate Bot",
    description: "Potenzia il tuo server con pulsanti interattivi e funzionalità avanzate per migliorare l'engagement",
    icon: MessageSquare,
    color: "from-ita-green to-cyber-blue"
  }
];

const innovationServices = [
  {
    title: "Dream Recorder",
    description: "Progetto dell'MIT portato alla luce: macchina rivoluzionaria per visualizzare e raccogliere dati sulle attività cerebrali durante le fasi oniriche",
    icon: Eye,
    color: "from-neural-purple to-cyber-blue"
  },
  {
    title: "Holo Revolution",
    description: "Ricerca sulle modalità più avanzate delle proiezioni olografiche per il futuro dell'interazione digitale",
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
        title="Sviluppo e Piattaforme AI"
        description="Soluzioni AI all'avanguardia per trasformare il modo in cui lavori e innovi"
        services={aiDevelopmentServices}
      />
      
      <ServiceSection
        id="security"
        title="Sicurezza e Analisi Dati"
        description="Protezione avanzata e insights intelligenti per il tuo ecosistema digitale"
        services={securityServices}
      />
      
      <ServiceSection
        id="business"
        title="Soluzioni Business e Utility"
        description="Strumenti intelligenti per ottimizzare ogni aspetto del tuo business"
        services={businessServices}
      />
      
      <ServiceSection
        id="innovations"
        title="Innovazioni Rivoluzionarie"
        description="Ricerche all'avanguardia che definiscono il futuro della tecnologia"
        services={innovationServices}
      />

      {/* Custom AI Solutions CTA */}
      <section className="py-20 bg-gradient-neural">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-background/20 backdrop-blur-sm rounded-full mb-8 mx-auto">
            <Rocket className="w-10 h-10 text-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Richiedi una Soluzione AI Personalizzata
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Hai esigenze specifiche? Il nostro team di esperti AI sviluppa soluzioni su misura 
            per le tue sfide aziendali uniche.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl">
              Richiedi Consulenza Gratuita
            </Button>
            <Button variant="enterprise" size="xl">
              Esplora Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
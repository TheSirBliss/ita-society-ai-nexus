import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Network } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-neural rounded-full blur-3xl opacity-20 animate-quantum-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-quantum rounded-full blur-3xl opacity-20 animate-neural-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Il Futuro dell'AI Enterprise</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Rivoluziona il tuo Business
              <br />
              <span className="bg-gradient-to-r from-ita-green to-quantum-teal bg-clip-text text-transparent">
                con l'AI Avanzata
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ITAsociety trasforma i processi aziendali attraverso un ecosistema tecnologico 
              all'avanguardia, combinando intelligenza artificiale, sicurezza avanzata e innovazione continua.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl" className="group">
              Esplora l'Ecosistema
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="enterprise" size="xl">
              Richiedi Consulenza
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-neural rounded-full">
                <Cpu className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground">12+</div>
              <div className="text-muted-foreground">Soluzioni AI</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-quantum rounded-full">
                <Network className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Aziende Partner</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ita-red to-ita-red-light rounded-full">
                <Sparkles className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-muted-foreground">Uptime Garantito</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
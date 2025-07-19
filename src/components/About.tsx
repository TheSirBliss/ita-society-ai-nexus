import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Globe, 
  Award, 
  TrendingUp,
  Brain,
  Rocket,
  Shield,
  Zap
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alessandro Rossi",
    role: "CEO & AI Visionary",
    description: "20+ anni in ricerca AI e trasformazione digitale. Ex-direttore MIT AI Lab.",
    icon: Brain,
    gradient: "from-ita-green to-quantum-teal"
  },
  {
    name: "Dr. Maria Santini",
    role: "CTO & Chief Architect", 
    description: "Architetto software enterprise con expertise in sistemi distribuiti e cloud computing.",
    icon: Rocket,
    gradient: "from-cyber-blue to-neural-purple"
  },
  {
    name: "Ing. Marco Ferrari",
    role: "Head of Security",
    description: "Esperto in cybersecurity e protezione dati. Consulente per Fortune 500.",
    icon: Shield,
    gradient: "from-ita-red to-ita-red-light"
  },
  {
    name: "Dr. Elena Bianchi",
    role: "Innovation Director",
    description: "Pioniera in ricerca olografica e neuroscienze computazionali.",
    icon: Lightbulb,
    gradient: "from-neural-purple to-ita-green"
  }
];

const values = [
  {
    icon: Target,
    title: "Precisione",
    description: "Ogni soluzione è progettata con accuratezza millimetrica per massimizzare l'impatto aziendale."
  },
  {
    icon: Lightbulb,
    title: "Innovazione",
    description: "Spingiamo costantemente i confini della tecnologia per creare il futuro oggi."
  },
  {
    icon: Users,
    title: "Collaborazione",
    description: "Lavoriamo come partner strategici, non solo fornitori di tecnologia."
  },
  {
    icon: Globe,
    title: "Impatto Globale",
    description: "Le nostre soluzioni sono progettate per scalare e trasformare industrie intere."
  }
];

const achievements = [
  {
    icon: Award,
    metric: "15+",
    label: "Brevetti Tecnologici",
    description: "Innovazioni riconosciute a livello internazionale"
  },
  {
    icon: TrendingUp,
    metric: "400%",
    label: "ROI Medio Clienti",
    description: "Incremento performance aziendali documentato"
  },
  {
    icon: Globe,
    metric: "25+",
    label: "Paesi Serviti",
    description: "Presenza globale con expertise locale"
  },
  {
    icon: Zap,
    metric: "99.9%",
    label: "Uptime SLA",
    description: "Affidabilità enterprise garantita"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/30 mb-8">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Le Menti della Rivoluzione</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Chi Siamo
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ITAsociety nasce dall'unione di menti visionarie che hanno dedicato la vita a trasformare 
            l'impossibile in realtà. Siamo pionieri nell'integrazione dell'intelligenza artificiale 
            nei processi aziendali, con l'obiettivo di democratizzare l'innovazione tecnologica.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 mb-20 border border-border/50">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-neural rounded-full mb-8 mx-auto">
              <Target className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              La Nostra Missione
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Rendere l'intelligenza artificiale accessibile, sicura e trasformativa per ogni azienda. 
              Crediamo che l'AI non debba sostituire l'intelligenza umana, ma amplificarla, 
              creando un ecosistema dove tecnologia e creatività umana si fondono per generare valore senza precedenti.
            </p>
            <blockquote className="text-xl font-medium text-foreground italic">
              "Non stiamo solo costruendo tecnologie. Stiamo plasmando il futuro del lavoro umano."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">
              — Dr. Alessandro Rossi, CEO ITAsociety
            </cite>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Il Nostro Team Esecutivo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="group bg-gradient-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <member.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            I Nostri Valori
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center bg-gradient-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-neural rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            I Nostri Risultati
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={achievement.label} className="text-center bg-gradient-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-quantum rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{achievement.label}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision CTA */}
        <div className="bg-gradient-neural rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-background/20 backdrop-blur-sm rounded-full mb-8 mx-auto">
            <Rocket className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Unisciti alla Rivoluzione Digitale
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Siamo sempre alla ricerca di talenti eccezionali che condividono la nostra passione 
            per l'innovazione e vogliono contribuire a plasmare il futuro dell'AI enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl">
              Carriere in ITAsociety
            </Button>
            <Button variant="enterprise" size="xl">
              Diventa Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🔥 Nouveau service au Togo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformez votre téléphone{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                endommagé
              </span>{" "}
              en argent
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Échangez votre smartphone cassé contre un modèle reconditionné ou neuf. 
              Estimation instantanée, transaction sécurisée, et récupération à domicile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Estimer mon téléphone
                <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline" size="xl">
                Voir les deals
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">Téléphones échangés</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg">98%</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Échange de téléphones"
              className="relative rounded-2xl shadow-card-hover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

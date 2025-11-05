import { Smartphone, Search, ArrowRightLeft, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Estimez votre téléphone",
      description: "Utilisez notre simulateur pour obtenir une estimation instantanée de la valeur de votre appareil",
    },
    {
      icon: ArrowRightLeft,
      title: "Choisissez votre deal",
      description: "Parcourez nos offres de téléphones reconditionnés ou neufs et trouvez celui qui vous convient",
    },
    {
      icon: Smartphone,
      title: "Envoyez votre ancien téléphone",
      description: "Nous récupérons votre téléphone gratuitement à domicile ou en point relais",
    },
    {
      icon: CheckCircle,
      title: "Recevez votre nouveau téléphone",
      description: "Profitez de votre nouveau smartphone avec garantie et support client",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comment ça{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">marche ?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                    <div className="relative bg-card p-4 rounded-2xl shadow-card">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">Étape {index + 1}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

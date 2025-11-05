import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const Simulator = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const brands = ["iPhone", "Samsung", "Xiaomi", "Huawei", "Oppo", "Autre"];
  
  const models: Record<string, string[]> = {
    iPhone: ["15 Pro Max", "15 Pro", "14 Pro Max", "14 Pro", "13 Pro Max", "13", "12"],
    Samsung: ["Galaxy S24", "Galaxy S23", "Galaxy S22", "Galaxy A54", "Galaxy A34"],
    Xiaomi: ["Redmi Note 13 Pro", "Redmi Note 12 Pro", "Poco X6", "Poco F5"],
  };

  const conditions = [
    { value: "excellent", label: "Excellent - Comme neuf", multiplier: 0.8 },
    { value: "good", label: "Bon - Quelques rayures", multiplier: 0.6 },
    { value: "fair", label: "Correct - Écran fissuré", multiplier: 0.4 },
    { value: "poor", label: "Mauvais - Ne s'allume plus", multiplier: 0.2 },
  ];

  const baseValues: Record<string, number> = {
    "15 Pro Max": 900000,
    "15 Pro": 800000,
    "14 Pro Max": 650000,
    "Galaxy S24": 750000,
    "Galaxy S23": 600000,
    "Redmi Note 13 Pro": 250000,
  };

  const calculateEstimate = () => {
    if (!model || !condition) return;
    
    const baseValue = baseValues[model] || 150000;
    const conditionMultiplier = conditions.find(c => c.value === condition)?.multiplier || 0.5;
    const estimatedValue = Math.round(baseValue * conditionMultiplier);
    
    setEstimate(estimatedValue);
  };

  return (
    <section id="simulator" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card-hover">
            <CardHeader className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-hero p-4 rounded-2xl">
                  <Calculator className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-3xl">
                Estimez votre téléphone
              </CardTitle>
              <CardDescription className="text-base">
                Obtenez une estimation instantanée de la valeur de votre smartphone
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="brand">Marque</Label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Sélectionnez une marque" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Modèle</Label>
                <Select value={model} onValueChange={setModel} disabled={!brand}>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Sélectionnez un modèle" />
                  </SelectTrigger>
                  <SelectContent>
                    {brand && models[brand]?.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">État du téléphone</Label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="Sélectionnez l'état" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={calculateEstimate}
                disabled={!brand || !model || !condition}
              >
                Calculer l'estimation
              </Button>

              {estimate && (
                <div className="mt-6 p-6 bg-gradient-hero rounded-xl text-center space-y-2">
                  <div className="text-sm font-medium text-primary-foreground/80">
                    Estimation de votre téléphone
                  </div>
                  <div className="text-4xl font-bold text-primary-foreground">
                    {estimate.toLocaleString()} FCFA
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Cette estimation est indicative et peut varier selon l'inspection finale
                  </div>
                  <Button variant="outline" size="lg" className="mt-4 bg-card hover:bg-card/90">
                    Continuer l'échange
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Simulator;

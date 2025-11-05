import PhoneCard from "./PhoneCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DealsSection = () => {
  const deals = [
    {
      brand: "iPhone",
      model: "13 Pro Max",
      condition: "Très bon état",
      price: 450000,
      originalPrice: 550000,
      rating: 4.8,
    },
    {
      brand: "Samsung",
      model: "Galaxy S23",
      condition: "Bon état",
      price: 380000,
      originalPrice: 480000,
      rating: 4.6,
    },
    {
      brand: "iPhone",
      model: "12",
      condition: "État correct",
      price: 280000,
      originalPrice: 350000,
      rating: 4.4,
    },
    {
      brand: "Xiaomi",
      model: "Redmi Note 12 Pro",
      condition: "Très bon état",
      price: 180000,
      originalPrice: 230000,
      rating: 4.5,
    },
  ];

  const newPhones = [
    {
      brand: "iPhone",
      model: "15 Pro",
      condition: "Neuf",
      price: 850000,
      rating: 5.0,
    },
    {
      brand: "Samsung",
      model: "Galaxy S24",
      condition: "Neuf",
      price: 720000,
      rating: 5.0,
    },
  ];

  return (
    <section id="deals" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nos meilleurs{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">deals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de smartphones reconditionnés et neufs à prix imbattables
          </p>
        </div>

        <Tabs defaultValue="refurbished" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="refurbished">Reconditionnés</TabsTrigger>
            <TabsTrigger value="new">Neufs</TabsTrigger>
          </TabsList>

          <TabsContent value="refurbished">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deals.map((deal, index) => (
                <PhoneCard key={index} {...deal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newPhones.map((phone, index) => (
                <PhoneCard key={index} {...phone} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir tous les deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

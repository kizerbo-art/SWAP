import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Smartphone, Star } from "lucide-react";

interface PhoneCardProps {
  brand: string;
  model: string;
  condition: string;
  price: number;
  originalPrice?: number;
  image?: string;
  rating?: number;
}

const PhoneCard = ({
  brand,
  model,
  condition,
  price,
  originalPrice,
  image,
  rating = 4.5,
}: PhoneCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-card-hover transition-smooth overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="aspect-square bg-gradient-subtle flex items-center justify-center p-8 relative overflow-hidden">
          {image ? (
            <img src={image} alt={`${brand} ${model}`} className="w-full h-full object-cover" />
          ) : (
            <Smartphone className="h-24 w-24 text-primary/40 group-hover:text-primary transition-smooth" />
          )}
          {discount > 0 && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              -{discount}%
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <div className="text-sm text-muted-foreground">{brand}</div>
          <h3 className="font-bold text-lg">{model}</h3>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {condition}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{price.toLocaleString()} FCFA</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice.toLocaleString()} FCFA
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button variant="default" className="w-full group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-smooth">
          Voir les détails
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PhoneCard;

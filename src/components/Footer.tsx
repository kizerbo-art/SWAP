import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                ReDeal Togo
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              La plateforme n°1 d'échange de smartphones au Togo. Transformez votre ancien téléphone en argent.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#deals" className="text-muted-foreground hover:text-primary transition-smooth">
                  Nos deals
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#simulator" className="text-muted-foreground hover:text-primary transition-smooth">
                  Simulateur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Garanties
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Lomé, Togo
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +228 XX XX XX XX
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@redeal.tg
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ReDeal Togo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

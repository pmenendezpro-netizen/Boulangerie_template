import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdressesContact = () => {
  return (
    <section id="adresses" className="py-20 px-4 md:px-8 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Adresses et contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8 text-center">
              <MapPin className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-primary">Adresse</h3>
              <p className="text-muted-foreground leading-relaxed">
                15 Rue de la Boulangerie<br />
                75001 Paris, France
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Phone className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-primary">Téléphone</h3>
              <p className="text-muted-foreground text-lg">
                01 23 45 67 89
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Mail className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-primary">Email</h3>
              <p className="text-muted-foreground">
                contact@maison-dubois.fr
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdressesContact;

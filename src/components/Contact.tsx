import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const hours = [
    { day: "Lundi - Vendredi", time: "6h30 - 20h00" },
    { day: "Samedi", time: "6h30 - 20h30" },
    { day: "Dimanche", time: "7h00 - 13h00" },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Nous Trouver
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                <Clock className="text-accent" />
                Horaires d'Ouverture
              </h3>
              <ul className="space-y-4">
                {hours.map((schedule) => (
                  <li key={schedule.day} className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                <MapPin className="text-accent" />
                Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      15 Rue de la Boulangerie<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@boulangerie-artisanale.fr</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

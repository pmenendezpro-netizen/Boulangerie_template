import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const hours = [
    { day: "Lundi", time: "7h30 - 19h00" },
    { day: "Mardi", time: "7h30 - 19h00" },
    { day: "Mercredi", time: "7h30 - 19h00" },
    { day: "Jeudi", time: "7h30 - 19h00" },
    { day: "Vendredi", time: "7h30 - 19h00" },
    { day: "Samedi", time: "7h30 - 19h00" },
    { day: "Dimanche", time: "7h30 - 12h30" },
  ];

  return (
    <section id="horaires" className="py-20 px-4 md:px-8 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Nos horaires
        </h2>
        
        <Card className="shadow-soft hover:shadow-elevated transition-all duration-300 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center justify-center gap-3">
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
      </div>
    </section>
  );
};

export default Contact;

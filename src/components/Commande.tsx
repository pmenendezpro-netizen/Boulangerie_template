import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const FORM_ENDPOINT = "https://formspree.io/f/mgvnlkar";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  productType: string;
  quantity?: number | "";
  date: string;
  details: string;
  consent: boolean;
  website?: string; // honeypot
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  productType: "",
  quantity: "",
  date: "",
  details: "",
  consent: false,
  website: "",
};

const Commande = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : name === "quantity" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // honeypot check
    if (form.website && form.website.trim().length > 0) {
      return;
    }
    try {
      setStatus("loading");
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (response.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="commandes" className="py-20 px-4 md:px-8 bg-secondary/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Passer une commande
        </h2>

        <Card className="shadow-soft">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} noValidate>
              {status === "success" && (
                <div className="mb-6 p-4 rounded-md bg-green-50 text-green-800">
                  Merci, nous vous recontacterons rapidement.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-md bg-red-50 text-red-800">
                  Une erreur est survenue. Merci de réessayer.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-foreground">
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    minLength={2}
                    value={form.firstName}
                    onChange={handleChange}
                    aria-invalid={form.firstName.length > 0 && form.firstName.length < 2}
                    aria-describedby="firstName-error"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-foreground">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    minLength={2}
                    value={form.lastName}
                    onChange={handleChange}
                    aria-invalid={form.lastName.length > 0 && form.lastName.length < 2}
                    aria-describedby="lastName-error"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    pattern="^(\+33|0)[1-9](\d{2}){4}$"
                    placeholder="06 12 34 56 78"
                    value={form.phone}
                    onChange={handleChange}
                    aria-describedby="phone-help"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p id="phone-help" className="text-xs text-muted-foreground mt-1">
                    Format FR: 0X XX XX XX XX ou +33X XX XX XX XX
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="productType" className="block text-sm font-medium mb-2 text-foreground">
                    Type de produit (optionnel)
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={form.productType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionner…</option>
                    <option value="Baguette">Baguette</option>
                    <option value="Croissant">Croissant</option>
                    <option value="Pain au chocolat">Pain au chocolat</option>
                    <option value="Tarte">Tarte</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-foreground">
                    Quantité approximative (optionnel)
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-foreground">
                    Date souhaitée (optionnel)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="details" className="block text-sm font-medium mb-2 text-foreground">
                    Détails de la commande
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    minLength={10}
                    rows={5}
                    value={form.details}
                    onChange={handleChange}
                    aria-invalid={form.details.length > 0 && form.details.length < 10}
                    aria-describedby="details-help"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p id="details-help" className="text-xs text-muted-foreground mt-1">
                    Décrivez votre besoin (produits, quantités, horaires…)
                  </p>
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-border"
                  />
                  <label htmlFor="consent" className="text-sm text-foreground">
                    J’accepte d’être contacté par Boulangerie Artisanale
                  </label>
                </div>
              </div>

              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                value={form.website}
                onChange={handleChange}
                aria-hidden="true"
              />

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-elevated transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Envoi…" : "Envoyer ma demande de devis"}
                </button>
              </div>

              {/* TODO: Connect EmailJS/Formspree/API endpoint for real submissions */}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Commande;



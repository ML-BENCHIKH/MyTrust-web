"use client";

import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

// Dummy data for Wilayas and Communes
const wilayas = [
  "Toutes les Wilayas", // Option to show all
  "Alger",
  "Oran",
  "Constantine",
  "Annaba",
  "Sétif",
  "Tlemcen",
  "Blida",
  "Tizi Ouzou",
  "Béjaïa",
  "Batna",
  "Djelfa",
  "M'sila",
  "Ouargla",
  "Ghardaïa",
];

const communesByWilaya: Record<string, string[]> = {
  Alger: [
    "Toutes les Communes",
    "Alger Centre",
    "Bab El Oued",
    "Bir Mourad Raïs",
    "Hussein Dey",
    "Dar El Beïda",
    "Cheraga",
    "Draria",
  ],
  Oran: [
    "Toutes les Communes",
    "Oran",
    "Bir El Djir",
    "Es Senia",
    "Arzew",
    "Misserghin",
  ],
  Constantine: [
    "Toutes les Communes",
    "Constantine",
    "El Khroub",
    "Hamma Bouziane",
    "Didouche Mourad",
  ],
  Annaba: [
    "Toutes les Communes",
    "Annaba",
    "El Bouni",
    "Sidi Amar",
    "Berrahal",
  ],
  Sétif: ["Toutes les Communes", "Sétif", "El Eulma", "Aïn Oulmene", "Bougaa"],
  Tlemcen: ["Toutes les Communes", "Tlemcen", "Mansourah", "Maghnia"],
  Blida: ["Toutes les Communes", "Blida", "Ouled Yaïch", "Boufarik"],
  "Tizi Ouzou": [
    "Toutes les Communes",
    "Tizi Ouzou",
    "Draâ Ben Khedda",
    "Azazga",
  ],
  Béjaïa: ["Toutes les Communes", "Béjaïa", "Akbou", "Amizour"],
  Batna: ["Toutes les Communes", "Batna", "Barika", "Arris"],
  Djelfa: ["Toutes les Communes", "Djelfa", "Messaad", "Hassi Bahbah"],
  "M'sila": ["Toutes les Communes", "M'sila", "Bou Saâda", "Magra"],
  Ouargla: ["Toutes les Communes", "Ouargla", "Hassi Messaoud", "Rouissat"],
  Ghardaïa: ["Toutes les Communes", "Ghardaïa", "Bounoura", "El Atteuf"],
  "Toutes les Wilayas": ["Toutes les Communes"], // Default for "All Wilayas"
};

// Dummy data for agencies
const allAgencies = [
  {
    id: 1,
    name: "Agence Alger Centre",
    address: "123 Rue Didouche Mourad",
    wilaya: "Alger",
    commune: "Alger Centre",
    phone: "021 123 456",
    email: "alger.centre@trust.dz",
    lat: 36.76,
    lng: 3.05,
  },
  {
    id: 2,
    name: "Agence Bab El Oued",
    address: "456 Boulevard Colonel Amirouche",
    wilaya: "Alger",
    commune: "Bab El Oued",
    phone: "021 789 012",
    email: "bab.el.oued@trust.dz",
    lat: 36.79,
    lng: 3.04,
  },
  {
    id: 3,
    name: "Agence Oran Centre",
    address: "789 Avenue de l'Indépendance",
    wilaya: "Oran",
    commune: "Oran",
    phone: "041 345 678",
    email: "oran.centre@trust.dz",
    lat: 35.7,
    lng: -0.64,
  },
  {
    id: 4,
    name: "Agence Bir El Djir",
    address: "101 Rue des Martyrs",
    wilaya: "Oran",
    commune: "Bir El Djir",
    phone: "041 901 234",
    email: "bir.el.djir@trust.dz",
    lat: 35.73,
    lng: -0.57,
  },
  {
    id: 5,
    name: "Agence Constantine Ville",
    address: "202 Rue Larbi Ben M'hidi",
    wilaya: "Constantine",
    commune: "Constantine",
    phone: "031 567 890",
    email: "constantine.ville@trust.dz",
    lat: 36.36,
    lng: 6.61,
  },
  {
    id: 6,
    name: "Agence Annaba Port",
    address: "303 Boulevard du 1er Novembre",
    wilaya: "Annaba",
    commune: "Annaba",
    phone: "038 123 456",
    email: "annaba.port@trust.dz",
    lat: 36.9,
    lng: 7.76,
  },
  {
    id: 7,
    name: "Agence Sétif Est",
    address: "404 Cité 1000 Logements",
    wilaya: "Sétif",
    commune: "Sétif",
    phone: "036 789 012",
    email: "setif.est@trust.dz",
    lat: 36.19,
    lng: 5.41,
  },
  {
    id: 8,
    name: "Agence Dar El Beïda",
    address: "505 Route de l'Aéroport",
    wilaya: "Alger",
    commune: "Dar El Beïda",
    phone: "021 234 567",
    email: "dar.el.beida@trust.dz",
    lat: 36.71,
    lng: 3.22,
  },
  {
    id: 9,
    name: "Agence El Eulma",
    address: "606 Rue de la Liberté",
    wilaya: "Sétif",
    commune: "El Eulma",
    phone: "036 345 678",
    email: "el.eulma@trust.dz",
    lat: 36.17,
    lng: 5.8,
  },
  {
    id: 10,
    name: "Agence Es Senia",
    address: "707 Route de Tlemcen",
    wilaya: "Oran",
    commune: "Es Senia",
    phone: "041 987 654",
    email: "es.senia@trust.dz",
    lat: 35.66,
    lng: -0.6,
  },
  {
    id: 11,
    name: "Agence Tlemcen Centre",
    address: "808 Rue de la Paix",
    wilaya: "Tlemcen",
    commune: "Tlemcen",
    phone: "043 111 222",
    email: "tlemcen.centre@trust.dz",
    lat: 34.88,
    lng: -1.31,
  },
  {
    id: 12,
    name: "Agence Blida Ville",
    address: "909 Boulevard des Roses",
    wilaya: "Blida",
    commune: "Blida",
    phone: "025 333 444",
    email: "blida.ville@trust.dz",
    lat: 36.47,
    lng: 2.83,
  },
  {
    id: 13,
    name: "Agence Tizi Ouzou",
    address: "1010 Rue de la Soummam",
    wilaya: "Tizi Ouzou",
    commune: "Tizi Ouzou",
    phone: "026 555 666",
    email: "tiziouzou@trust.dz",
    lat: 36.71,
    lng: 4.05,
  },
  {
    id: 14,
    name: "Agence Béjaïa Port",
    address: "1111 Quai de la Liberté",
    wilaya: "Béjaïa",
    commune: "Béjaïa",
    phone: "034 777 888",
    email: "bejaia.port@trust.dz",
    lat: 36.75,
    lng: 5.08,
  },
  {
    id: 15,
    name: "Agence Batna Centre",
    address: "1212 Avenue de l'ALN",
    wilaya: "Batna",
    commune: "Batna",
    phone: "033 999 000",
    email: "batna.centre@trust.dz",
    lat: 35.55,
    lng: 6.17,
  },
  {
    id: 16,
    name: "Agence Djelfa Sud",
    address: "1313 Route Nationale 1",
    wilaya: "Djelfa",
    commune: "Djelfa",
    phone: "027 123 789",
    email: "djelfa.sud@trust.dz",
    lat: 34.67,
    lng: 3.26,
  },
  {
    id: 17,
    name: "Agence M'sila Ouest",
    address: "1414 Rue du 17 Octobre",
    wilaya: "M'sila",
    commune: "M'sila",
    phone: "035 456 123",
    email: "msila.ouest@trust.dz",
    lat: 35.7,
    lng: 4.53,
  },
  {
    id: 18,
    name: "Agence Ouargla Oasis",
    address: "1515 Boulevard des Palmiers",
    wilaya: "Ouargla",
    commune: "Ouargla",
    phone: "029 789 456",
    email: "ouargla.oasis@trust.dz",
    lat: 31.95,
    lng: 5.32,
  },
  {
    id: 19,
    name: "Agence Ghardaïa M'zab",
    address: "1616 Rue du Ksar",
    wilaya: "Ghardaïa",
    commune: "Ghardaïa",
    phone: "029 123 789",
    email: "ghardaia.mzab@trust.dz",
    lat: 32.49,
    lng: 3.67,
  },
];

export default function MapSection() {
  const [selectedWilaya, setSelectedWilaya] =
    React.useState<string>("Toutes les Wilayas");
  const [selectedCommune, setSelectedCommune] = React.useState<string>(
    "Toutes les Communes"
  );
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedAgency, setSelectedAgency] = React.useState<
    (typeof allAgencies)[0] | null
  >(null);

  const availableCommunes = React.useMemo(() => {
    return communesByWilaya[selectedWilaya] || ["Toutes les Communes"];
  }, [selectedWilaya]);

  const filteredAgencies = React.useMemo(() => {
    return allAgencies.filter((agency) => {
      const matchesWilaya =
        selectedWilaya === "Toutes les Wilayas" ||
        agency.wilaya === selectedWilaya;
      const matchesCommune =
        selectedCommune === "Toutes les Communes" ||
        agency.commune === selectedCommune;
      const matchesSearch =
        searchTerm === "" ||
        agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.wilaya.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.commune.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesWilaya && matchesCommune && matchesSearch;
    });
  }, [selectedWilaya, selectedCommune, searchTerm]);

  // Reset commune when wilaya changes
  React.useEffect(() => {
    setSelectedCommune("Toutes les Communes");
  }, [selectedWilaya]);

  return (
    <section id="agency-network-section">
      <div className="container">
           <div className="hidden md:flex mb-8 ml-4 flex-col items-center justify-center gap-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
                    Nos agences
                </h2>
                <p className="text-gray-600 text-[1rem] md:text-xl text-center">
                     Trouvez l'agence TRUST Assurance la plus proche de chez vous.
                </p>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Map Placeholder */}
          <div className="flex flex-col items-center justify-center  rounded-lg shadow-lg p-4 aspect-video lg:aspect-square">
            {filteredAgencies.length > 0 ? (
              <iframe
                key={`${(selectedAgency || filteredAgencies[0]).lat},${
                  (selectedAgency || filteredAgencies[0]).lng
                }`}
                src={`https://maps.google.com/maps?q=${
                  (selectedAgency || filteredAgencies[0]).lat
                },${
                  (selectedAgency || filteredAgencies[0]).lng
                }&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-md w-full h-full"
              />
            ) : (
              <p className="text-center text-sm py-8">
                Aucune localisation disponible.
              </p>
            )}
            <p className="text-sm mt-2">
              (Cliquez une agence pour voir sa position sur la carte.)
            </p>
          </div>

          {/* Right Side: Filters and Agency List */}
          <div className="flex flex-col gap-6">
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select value={selectedWilaya} onValueChange={setSelectedWilaya}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner une Wilaya" />
                </SelectTrigger>
                <SelectContent>
                  {wilayas.map((wilaya) => (
                    <SelectItem key={wilaya} value={wilaya}>
                      {wilaya}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCommune}
                onValueChange={setSelectedCommune}
                disabled={selectedWilaya === "Toutes les Wilayas"}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner une Commune" />
                </SelectTrigger>
                <SelectContent>
                  {availableCommunes.map((commune) => (
                    <SelectItem key={commune} value={commune}>
                      {commune}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                type="text"
                placeholder="Rechercher une agence..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Agency List */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto p-2">
              {" "}
              {/* Added max-height and overflow for scrollable list */}
              {filteredAgencies.length > 0 ? (
                filteredAgencies.map((agency) => (
                  <Card
                    key={agency.id}
                    onClick={() => setSelectedAgency(agency)} // 🔹 set clicked agency
                    className={`p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition 
      ${
        selectedAgency?.id === agency.id
          ? "ring-2 ring-primary"
          : "hover:bg-muted"
      }`}
                  >
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-primary">
                        {agency.name}
                      </h3>
                      <p className="flex items-center gap-2 text-sm mt-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>
                          {agency.address}, {agency.commune}, {agency.wilaya}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm ">
                      <a
                        href={`tel:${agency.phone}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{agency.phone}</span>
                      </a>
                      <a
                        href={`mailto:${agency.email}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{agency.email}</span>
                      </a>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-center  py-8">
                  Aucune agence trouvée pour votre sélection.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, ShieldCheck, Settings, Users, ArrowRight, CheckCircle2, Phone, Briefcase, RefreshCcw, Handshake } from "lucide-react";

export const COMPANY_INFO = {
    name: "Advanced Power And Infra Solutions",
    tagline: "Delivering Power on time every time",
    established: 2009,
    headOffice: "Bangalore, India",
    authorizedDealer: "Mahindra Powerol Diesel Generator Sets",
    capacityRange: "5 KVA – 1010 KVA",
    address: "No.190, Elite Residency, Kodipalya Main Road, Kengeri, Near Namma Layout, Bangalore – 560056",
    phone: ["+91 9686098702", "+91 9902807767"],
    email: "advancedpowerinfra@gmail.com",
    website: "www.advancedpowerinfra.com",
    whatsapp: "+919686098702"
};

export const SERVICES = [
    {
        title: "Generator Sales",
        description: "Supply of new diesel generators across multiple capacity ranges.",
        slug: "sales",
        icon: Zap
    },
    {
        title: "Generator Rental",
        description: "Short-term and long-term rental of diesel generators.",
        slug: "rental",
        icon: RefreshCcw
    },
    {
        title: "Generator Installation",
        description: "Professional installation and commissioning of DG sets.",
        slug: "installation",
        icon: Settings
    },
    {
        title: "Preventive Maintenance",
        description: "Routine servicing to ensure generator reliability.",
        slug: "maintenance",
        icon: ShieldCheck
    },
    {
        title: "Annual Maintenance Contracts (AMC)",
        description: "Long-term service contracts for generator maintenance.",
        slug: "amc",
        icon: Handshake
    },
    {
        title: "Generator Repair",
        description: "Emergency breakdown services and generator troubleshooting.",
        slug: "repair",
        icon: Phone
    },
    {
        title: "Used Generator Buyback",
        description: "Purchase of used diesel generators.",
        slug: "buyback",
        icon: Briefcase
    }
];

export const CLIENTS = [
    "Arvind Mills Ltd",
    "Vegus Hospital",
    "Alkem Laboratories",
    "Baldwin School",
    "Sigma Concretes",
    "Indus Sports Resorts Pvt Ltd"
];

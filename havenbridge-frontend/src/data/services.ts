import { Baby, Building, Handshake, Heart, HeartHandshake, Home } from "lucide-react";

export const servicesData = [
  {
    id: "affordable-social-housing",
    title: "Affordable & Social Housing Development",
    shortTitle: "Affordable Housing",
    desc: "Community-focused housing solutions aligned with government programs like HAFF and the Big Housing Build.",
    longDesc: "We specialize in delivering affordable and social housing developments that address Australia's critical housing shortage. Our projects are strategically aligned with government initiatives including the Housing Australia Future Fund (HAFF), the Big Housing Build, and NRAS (National Rental Affordability Scheme). We work closely with federal, state, and local governments to create housing solutions that are both financially viable and socially impactful.",
    icon: "Home",
    imageUrl: "/services/affordable-housing.jpg",
    heroImage: "/services/affordable-housing.jpg",
    color: "from-amber-400 to-amber-500",
    stats: "500+ Homes",
    keyBenefits: [
      "Government-backed funding and guarantees",
      "Stable long-term rental income",
      "Strong social impact metrics",
      "Access to NRAS and HAFF programs",
      "Priority planning approvals"
    ],
    targetMarket: [
      "Low to moderate-income families",
      "Key workers (nurses, teachers, first responders)",
      "First-time homebuyers",
      "Migrant and refugee communities"
    ],
    deliveryApproach: [
      "Feasibility analysis and site identification",
      "Government funding application support",
      "Community consultation and engagement",
      "Planning and approvals management",
      "Construction and project delivery",
      "Tenancy and property management"
    ],
    caseStudies: [
      {
        name: "Melbourne Modular Village",
        result: "48 homes delivered, 100% occupancy, 18% IRR"
      },
      {
        name: "Canberra Social Housing Project",
        result: "60 units in progress, government partnership"
      }
    ],
    metrics: {
      avgDeliveryTime: "12-18 months",
      avgReturn: "16-19% IRR",
      occupancyRate: "98%",
      socialImpact: "High"
    }
  },
  {
    id: "rooming-houses-accommodation",
    title: "Rooming Houses & Community Accommodation",
    shortTitle: "Rooming Houses",
    desc: "High-yield, fully compliant rooming house and community accommodation developments across key growth corridors.",
    longDesc: "Our rooming house developments provide affordable, safe, and compliant accommodation solutions for individuals seeking flexible housing options. We focus on high-yield properties that meet all regulatory requirements while maintaining dignity and quality for residents. Each development is strategically located near employment hubs, public transport, and essential services.",
    icon: "Building",
    imageUrl: "/services/rooming-houses.jpg",
    heroImage: "/services/rooming-houses.jpg",
    color: "from-cyan-500 to-blue-500",
    stats: "High Yield",
    keyBenefits: [
      "Strong cash-on-cash returns (12-16%)",
      "Lower capital requirements per dwelling",
      "High demand in growth corridors",
      "Flexible tenancy arrangements",
      "Government support for compliant operators"
    ],
    targetMarket: [
      "Single professionals and students",
      "Temporary workers",
      "Recent migrants and visa holders",
      "Individuals in housing transition"
    ],
    deliveryApproach: [
      "Site selection in high-demand areas",
      "Full compliance with rooming house regulations",
      "Quality design and amenities",
      "Professional property management",
      "Ongoing maintenance and support",
      "Tenant wellbeing programs"
    ],
    caseStudies: [
      {
        name: "Perth Rooming House Complex",
        result: "24 rooms, 16% IRR, stable tenancy"
      }
    ],
    metrics: {
      avgDeliveryTime: "8-12 months",
      avgReturn: "14-17% IRR",
      occupancyRate: "95%",
      socialImpact: "Medium-High"
    }
  },
  {
    id: "aged-care-ndis-housing",
    title: "Aged Care & NDIS Housing",
    shortTitle: "Aged Care & NDIS",
    desc: "Faith- and culturally-aligned aged care, SIL, and SDA housing designed for dignity, safety, and inclusion.",
    longDesc: "We develop specialized aged care and NDIS housing that prioritizes cultural sensitivity, accessibility, and person-centered design. Our developments include Specialist Disability Accommodation (SDA), Supported Independent Living (SIL) properties, and aged care facilities that meet the unique needs of multicultural communities.",
    icon: "Heart",
    imageUrl: "/services/aged-care.jpg",
    heroImage: "/services/aged-care.jpg",
    color: "from-emerald-500 to-green-500",
    stats: "Specialist Care",
    keyBenefits: [
      "NDIS SDA funding eligibility",
      "Long-term government-backed income",
      "Premium rental yields (15-25%)",
      "Purpose-built disability access",
      "Cultural and faith-aligned design"
    ],
    targetMarket: [
      "NDIS participants requiring SDA",
      "Elderly from CALD backgrounds",
      "Individuals with high physical support needs",
      "Faith-based community groups"
    ],
    deliveryApproach: [
      "Needs assessment with community groups",
      "Culturally-informed design",
      "Full accessibility and safety compliance",
      "Integration with support service providers",
      "Ongoing quality assurance",
      "Family and community engagement"
    ],
    caseStudies: [
      {
        name: "Sunrise Care Centre",
        result: "80 beds, 22% IRR, 95% occupancy"
      }
    ],
    metrics: {
      avgDeliveryTime: "18-24 months",
      avgReturn: "19-23% IRR",
      occupancyRate: "92%",
      socialImpact: "Very High"
    }
  },
  {
    id: "childcare-centre-development",
    title: "Childcare Centre Development",
    shortTitle: "Childcare Centres",
    desc: "End-to-end delivery of compliant childcare centres aligned with Victorian Education & Care regulations.",
    longDesc: "We deliver turn-key childcare centre developments that meet all National Quality Framework (NQF) standards and state-specific regulations. Our centres are designed to maximize operational efficiency while creating nurturing, educational environments for children.",
    icon: "Baby",
    imageUrl: "/services/childcare-centre.jpg",
    heroImage: "/services/childcare-centre.jpg",
    color: "from-violet-500 to-purple-500",
    stats: "Family Focused",
    keyBenefits: [
      "Fully compliant with NQF standards",
      "Child Care Subsidy (CCS) eligible",
      "Triple-net lease structures available",
      "High demand in growth areas",
      "Stable, government-backed income"
    ],
    targetMarket: [
      "Working families with young children",
      "New residential developments",
      "Established operators seeking expansion",
      "Community-based childcare providers"
    ],
    deliveryApproach: [
      "Site feasibility and demand analysis",
      "Compliance with education regulations",
      "Purpose-designed learning spaces",
      "Operator partnerships",
      "Licensing and approval support",
      "Handover and operational transition"
    ],
    caseStudies: [
      {
        name: "Adelaide Childcare Centre",
        result: "120 places, 19% IRR, CCS approved"
      }
    ],
    metrics: {
      avgDeliveryTime: "12-16 months",
      avgReturn: "17-20% IRR",
      occupancyRate: "96%",
      socialImpact: "High"
    }
  },
  {
    id: "cabin-parks-modular-housing",
    title: "Cabin Parks & Modular Housing",
    shortTitle: "Modular Housing",
    desc: "Modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based housing.",
    longDesc: "Our modular housing solutions provide rapid, cost-effective accommodation for diverse needs including crisis housing, worker accommodation, and faith-community villages. Using prefabricated construction methods, we deliver quality housing faster and more efficiently than traditional builds.",
    icon: "HeartHandshake",
    imageUrl: "/services/cabin-parks.jpg",
    heroImage: "/services/cabin-parks.jpg",
    color: "from-orange-500 to-red-500",
    stats: "Flexible Solutions",
    keyBenefits: [
      "Rapid deployment (6-12 months)",
      "Lower capital costs",
      "Relocatable and scalable",
      "Suitable for temporary/transitional use",
      "Sustainable construction methods"
    ],
    targetMarket: [
      "Individuals experiencing homelessness",
      "Domestic violence survivors",
      "Seasonal and temporary workers",
      "Faith communities",
      "Disaster relief accommodation"
    ],
    deliveryApproach: [
      "Rapid needs assessment",
      "Modular design and fabrication",
      "Site preparation and services",
      "Quick installation and commissioning",
      "Support services integration",
      "Flexible lease or ownership models"
    ],
    caseStudies: [
      {
        name: "Melbourne Modular Village",
        result: "48 homes, rapid deployment, community integration"
      }
    ],
    metrics: {
      avgDeliveryTime: "6-10 months",
      avgReturn: "15-18% IRR",
      occupancyRate: "94%",
      socialImpact: "Very High"
    }
  },
  {
    id: "development-management",
    title: "End-to-End Development Management",
    shortTitle: "Development Management",
    desc: "Full lifecycle development and project management from feasibility through delivery and risk management.",
    longDesc: "We offer comprehensive development management services for partners who want to leverage our expertise without direct property ownership. Our team manages every phase from initial feasibility through to completed handover, ensuring projects are delivered on time, on budget, and to the highest standards.",
    icon: "Handshake",
    imageUrl: "/services/development-management.jpg",
    heroImage: "/services/development-management.jpg",
    color: "from-indigo-500 to-purple-500",
    stats: "Full Service",
    keyBenefits: [
      "Expert project governance",
      "Risk mitigation strategies",
      "Cost control and value engineering",
      "Stakeholder management",
      "Quality assurance processes"
    ],
    targetMarket: [
      "Private investors and developers",
      "Government housing agencies",
      "Community housing providers",
      "Faith-based organizations",
      "Corporate real estate portfolios"
    ],
    deliveryApproach: [
      "Feasibility studies and site analysis",
      "Financial modeling and funding",
      "Planning and approvals",
      "Design and construction management",
      "Quality control and compliance",
      "Handover and defects management"
    ],
    caseStudies: [
      {
        name: "Multiple Projects",
        result: "$95M+ portfolio value, 100% on-time delivery"
      }
    ],
    metrics: {
      avgDeliveryTime: "Varies by project",
      avgReturn: "Management fee-based",
      occupancyRate: "N/A",
      socialImpact: "Varies"
    }
  }
];
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  Users, 
  Settings, 
  RefreshCcw,
  LucideIcon
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  price: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceData [] = [
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    description: "Virtually invisible and removable aligners for a comfortable and aesthetic teeth straightening experience.",
    price: "₹60,000 - ₹1,50,000",
    fullDescription: "Clear Aligner therapy is the modern standard for aesthetic teeth straightening. These custom-made, transparent trays gradually shift your teeth into their ideal position without the need for traditional metal brackets or wires. Ideal for professionals and students alike, they offer a discreet way to achieve a perfect smile while maintaining your comfort and lifestyle.",
    icon: Sparkles,
    image: "/images/clear-aligners.jpg",
    benefits: [
      "Virtually invisible aesthetics",
      "Removable for eating and hygiene",
      "No dietary restrictions",
      "Smooth, comfortable material",
      "Predictable results with 3D planning"
    ],
    process: [
      { step: "01", title: "Digital Scan", description: "Taking a precise 3D digital impression of your teeth using advanced intraoral scanners." },
      { step: "02", title: "Treatment Plan", description: "Architecting your transformation with specialized software to predict every movement." },
      { step: "03", title: "Custom Fabrication", description: "Creating your series of unique, BPA-free medical-grade plastic aligners." },
      { step: "04", title: "Active Wear", description: "Wearing each set for 1-2 weeks, removing them only for meals and cleaning." }
    ]
  },
  {
    slug: "metal-braces",
    title: "Traditional Metal Braces",
    description: "Highly effective and reliable traditional braces for precise control and correction of complex dental issues.",
    price: "₹30,000 - ₹55,000",
    fullDescription: "Traditional metal braces remain the most versatile and powerful tool in orthodontics. Utilizing high-grade stainless steel, these braces are capable of correcting the most complex dental and jaw alignments. Modern advancements have made them smaller, more comfortable, and more efficient than ever before, ensuring a result that is both functional and beautiful.",
    icon: Settings,
    image: "/images/metal-braces.jpg",
    benefits: [
      "Unmatched precision and control",
      "Suitable for all age groups",
      "Effective for complex bite issues",
      "Durability and reliability",
      "Cost-effective orthodontic solution"
    ],
    process: [
      { step: "01", title: "Consultation", description: "Comprehensive examination of dental and skeletal structures." },
      { step: "02", title: "Bonding", description: "Precisely attaching high-grade steel brackets to each tooth." },
      { step: "03", title: "Archwire Placement", description: "Fitting the specialized wires that guide tooth movement." },
      { step: "04", title: "Periodic Tuning", description: "Regular adjustments to maintain the correct biological force system." }
    ]
  },
  {
    slug: "ceramic-braces",
    title: "Ceramic Braces",
    description: "A discreet alternative to metal braces using tooth-colored brackets that blend in naturally with your teeth.",
    price: "₹40,000 - ₹70,000",
    fullDescription: "Ceramic braces offer the mechanical strength of traditional braces with the added benefit of aesthetic discretion. The brackets are made of a clear or tooth-colored polycrystalline material that blends seamlessly with your natural tooth enamel. This is a popular choice for adults and teenagers who require precise clinical correction but prefer a less noticeable appearance during treatment.",
    icon: ShieldCheck,
    image: "/images/ceramic-braces.jpg",
    benefits: [
      "Subtle, tooth-colored aesthetics",
      "High clinical effectiveness",
      "Resistant to staining",
      "Smooth and comfortable finish",
      "Perfect for image-conscious patients"
    ],
    process: [
      { step: "01", title: "Shade Matching", description: "Selecting the ceramic material that best matches your natural enamel." },
      { step: "02", title: "Precise Bonding", description: "Applying the aesthetic brackets using light-cured adhesive." },
      { step: "03", title: "Aesthetic Wires", description: "Using coated or translucent wires for further discretion." },
      { step: "04", title: "Master Alignment", description: "Careful monitoring to ensure perfect tooth positioning." }
    ]
  },
  {
    slug: "smile-design",
    title: "Smile Design",
    description: "Digital smile planning to achieve facial harmony and the perfect aesthetic balance for your unique features.",
    price: "₹20,000 - ₹45,000",
    fullDescription: "Digital Smile Design (DSD) is where science meets art. We utilize high-resolution digital photography and video to analyze your facial proportions, dental structures, and lip dynamics. By creating a 'virtual mock-up', we allow you to see and even 'test drive' your new smile before any treatment begins, ensuring the final result is in perfect harmony with your unique personality.",
    icon: Smile,
    image: "/images/smile-design.jpg",
    benefits: [
      "Visualized treatment outcomes",
      "Facial harmony analysis",
      "Emotional dentistry approach",
      "Improved patient communication",
      "Predictable aesthetic results"
    ],
    process: [
      { step: "01", title: "Digital Capture", description: "Professional studio photography and video of your smile in motion." },
      { step: "02", title: "Structural Analysis", description: "Analyzing the relationship between teeth, gums, and facial features." },
      { step: "03", title: "Virtual Design", description: "Crafting your ideal smile proportions using CAD technology." },
      { step: "04", title: "Mock-up Try-in", description: "Physically testing the proposed design in your mouth for final approval." }
    ]
  },
  {
    slug: "consultation",
    title: "Orthodontic Consultation",
    description: "Comprehensive initial assessment and personalized treatment planning using advanced diagnostic tools.",
    price: "₹500",
    fullDescription: "Your journey to excellence begins with a comprehensive orthodontic consultation. This is more than just an exam; it's an in-depth clinical discovery. We utilize digital cephalometric analysis, 3D intraoral scans, and clinical photography to build a complete biological profile, allowing us to discuss your goals and provide a tailored roadmap to your perfect smile.",
    icon: Stethoscope,
    image: "/images/consultation.jpg",
    benefits: [
      "Expert clinical diagnosis",
      "Advanced 3D imaging",
      "Customized roadmap",
      "Clear financial planning",
      "Opportunity to ask expert questions"
    ],
    process: [
      { step: "01", title: "Case History", description: "Discussing your dental history and aesthetic aspirations." },
      { step: "02", title: "Digital Diagnostics", description: "Taking 3D scans and clinical photographs." },
      { step: "03", title: "Clinical Assessment", description: "Dr. Singh personally evaluating your jaw and tooth alignment." },
      { step: "04", title: "Path Forward", description: "Presenting your personalized treatment options and timelines." }
    ]
  },
  {
    slug: "dentofacial-orthopedics",
    title: "Dentofacial Orthopedics",
    description: "Specialized care focusing on guiding facial growth and development during childhood and adolescence.",
    price: "₹25,000 - ₹50,000",
    fullDescription: "Dentofacial orthopedics is a specialized branch of orthodontics that focuses on guiding the growth and development of the facial structure. By treating patients during their growth phases, we can use functional appliances to normalize the relationship between the upper and lower jaws, creating a balanced facial profile and ensuring adequate space for erupting permanent teeth.",
    icon: Activity,
    image: "/images/dentofacial-orthopedics.jpg",
    benefits: [
      "Correction of jaw imbalances",
      "Guiding facial development",
      "Improved breathing and airway",
      "Reducing need for future extractions",
      "Enhanced long-term facial aesthetics"
    ],
    process: [
      { step: "01", title: "Growth Analysis", description: "Determining the patient's skeletal development stage." },
      { step: "02", title: "Appliance Theory", description: "Selecting the specific orthotic to guide jaw development." },
      { step: "03", title: "Monitoring", description: "Frequent checks to ensure growth is following the desired vector." },
      { step: "04", title: "Transition", description: "Moving into standard orthodontics if required once growth is stabilized." }
    ]
  },
  {
    slug: "retainers",
    title: "Retainers",
    description: "Custom-fitted appliances to protect and maintain your new smile after successful orthodontic treatment.",
    price: "₹5,000 - ₹12,000",
    fullDescription: "The completion of orthodontic treatment is just the beginning of your smile's longevity. Retainers are essential for protecting your investment, preventing 'relapse' by holding your teeth in their new, ideal positions while the surrounding bone and gums stabilize. We provide a range of fixed and removable options tailored to your clinical needs and daily lifestyle.",
    icon: RefreshCcw,
    image: "/images/retainers.jpg",
    benefits: [
      "Guaranteed smile stability",
      "Custom-fit for ultimate comfort",
      "Protection against tooth movement",
      "Options for fixed or removable",
      "Long-term health of your alignment"
    ],
    process: [
      { step: "01", title: "Impression", description: "Capturing the final, perfect position of your teeth." },
      { step: "02", title: "Custom Lab Work", description: "Precision-crafting your retainers in specialized materials." },
      { step: "03", title: "Fitting", description: "Ensuring the retainer fits comfortably and effectively." },
      { step: "04", title: "Maintenance Plan", description: "Educating on the wear schedule and long-term care." }
    ]
  },
  {
    slug: "preventive-care",
    title: "Preventive Dental Care",
    description: "Early intervention strategies to avoid future orthodontic complications and maintain oral health.",
    price: "₹2,500 - ₹7,500",
    fullDescription: "Preventive care is the cornerstone of lifelong oral health. By identifying potential orthodontic issues early—sometimes as young as age 7—we can implement strategies to manage space and growth, often reducing or eliminating the need for complex treatment later. This includes monitoring eruption patterns, managing oral habits, and ensuring general dental health remains optimal.",
    icon: Users,
    image: "/images/preventive-care.jpg",
    benefits: [
      "Early detection of bite issues",
      "Managing space for permanent teeth",
      "Correcting harmful oral habits",
      "Reducing complexity of future treatment",
      "Establishing positive dental experiences"
    ],
    process: [
      { step: "01", title: "Screening", description: "Early assessment of dental and skeletal patterns." },
      { step: "02", title: "Space Management", description: "Monitoring the loss of baby teeth and eruption of permanent ones." },
      { step: "03", title: "Habit Control", description: "Identifying and correcting functional issues like thumb sucking." },
      { step: "04", title: "Continual Support", description: "Regular check-ins to monitor changes until treatment is ready." }
    ]
  }
];

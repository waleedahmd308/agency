export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technology: string[];
  image: string;
  imageAlt: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "water-tank",
    title: "Smart Water Tank Automation",
    category: "IoT · Home automation",
    year: "2023",
    summary:
      "A pump-control system that saves electricity during peak-tariff hours while keeping a household water tank reliably filled.",
    challenge:
      "Household water pumps in Pakistan draw peak-tariff power and suffer voltage stress during peak hours. Manual control forced homeowners to choose between higher bills and inconvenient scheduling.",
    solution:
      "Built a hardware–software system that measures live tank level and controls pump relays against a peak/off-peak schedule. During peak hours the pump runs only in short bursts when water is actually needed; the tank fully refills once off-peak begins. A companion mobile app surfaces real-time water level, pump status and usage stats.",
    outcome:
      "The system runs autonomously with a clear operator UI. Homeowners avoid pump wear from peak-hour voltage stress and get immediate visibility into water levels and pump activity — without changing their habits.",
    technology: [
      "Hardware–Software Integration",
      "Motor & Relay Control",
      "Mobile App",
      "Real-time UI",
    ],
    image: "/projects/water-tank.png",
    imageAlt:
      "Smart water tank monitoring mobile app showing a half-filled cylindrical tank with a numbered level scale, pump status card, and percentage stats.",
  },
  {
    id: "lizard-habitat",
    title: "Smart Lizard Habitat Monitor",
    category: "IoT · Environmental control",
    year: "2022",
    client: "Fiverr client",
    summary:
      "An IoT dashboard for reptile breeders that reads temperature and humidity in real time and controls lamps, coolers, humidifiers and dehumidifiers to keep every enclosure in range.",
    challenge:
      "The breeder was managing multiple enclosures manually — physically checking sensors and toggling devices throughout the day. Missing a range for even a few hours risks stressed animals and failed breeding cycles.",
    solution:
      "Built a mobile-first dashboard connected to multiple microcontroller-based sensor nodes. Live temperature and humidity per enclosure feed into a tile grid; devices — lamp, humidifier, dehumidifier, cooler — toggle from the same view. Per-node configuration screens set the target range for each habitat.",
    outcome:
      "The breeder now manages every enclosure from one screen, sees status changes as they happen, and no longer walks between rooms to check readings — freeing time and reducing the risk of missed conditions.",
    technology: [
      "Flutter",
      "Microcontrollers",
      "IoT",
      "Sensor Fusion",
      "Real-time UI",
    ],
    image: "/projects/lizard-habitat.png",
    imageAlt:
      "IoT habitat monitoring mobile app with a two-column tile grid showing live temperature, humidity, lamp, humidifier, dehumidifier and cooler status.",
  },
  {
    id: "gaming",
    title: "E-Gaming Accounts Marketplace",
    category: "MERN marketplace",
    year: "2024",
    summary:
      "A trust-first marketplace where gamers can safely buy and sell accounts, with rich listings, two-sided reviews and a secure payment workflow.",
    challenge:
      "Gaming account trading happens across scattered forums with no accountability. Buyers get scammed, sellers get charged back, and both sides operate blind. A marketplace needed to make trust the default, not an afterthought.",
    solution:
      "Built the platform end-to-end on the MERN stack. Secure JWT authentication, role-based access and protected routes for sensitive actions. Sellers list accounts with images and videos. A two-sided rating and review system builds public reputation over time, and a secure payment workflow holds funds until both sides confirm the handover.",
    outcome:
      "A production-shape marketplace where every listing, transaction and rating is auditable. The trust surface is built into the product itself rather than depending on external reputation.",
    technology: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/gaming.png",
    imageAlt:
      "Marketplace web application shown on a laptop and phone, displaying a grid of gaming account listings with ratings and prices.",
  },
  {
    id: "eyec",
    title: "EyeC-Assistant · Accessibility App",
    category: "Mobile · Accessibility · ML",
    year: "2023",
    summary:
      "A Flutter mobile app that helps visually impaired shoppers identify Pakistani currency notes, find products by voice, and navigate a store while avoiding obstacles.",
    challenge:
      "Independent shopping is one of the hardest daily tasks for visually impaired people — identifying currency, locating a specific product on a shelf, and moving safely through an unfamiliar store without needing help.",
    solution:
      "Built a Flutter app around three focused features. A currency recognizer denominates Pakistani notes from the camera in real time. A voice-driven product search speaks item locations by aisle. An obstacle-navigation mode gives audio guidance while walking through the store layout. The whole interface is designed for high contrast and voice-first interaction.",
    outcome:
      "A single tool that replaces three separate coping strategies. The app puts control back in the user's hands during the moments that most often force reliance on strangers.",
    technology: ["Flutter", "Machine Learning", "Computer Vision", "Speech"],
    image: "/projects/eyec.png",
    imageAlt:
      "Accessibility mobile app screen showing a large currency denomination label and a glowing microphone button for voice interaction.",
  },
  {
    id: "dictionary",
    title: "Arabic → Urdu Dictionary",
    category: "Desktop application",
    year: "2021",
    summary:
      "A JavaFX desktop dictionary supporting word and sentence translation, saved words, PDF export and dark/light themes.",
    challenge:
      "An early-career learning project to internalize the full lifecycle of a desktop application — architecture, persistence, versioning and packaging — without hiding behind a framework.",
    solution:
      "Structured the app around MVC with a SQL-backed persistence layer for words, saved lists and translation history. JavaFX drove the UI with a switchable dark/light theme; PDF generation exported translated content on demand. Maven and Git enforced structured development from day one.",
    outcome:
      "A working end-to-end product built from first principles. More importantly, a foundation in software architecture, source control, dependency management and packaging that carried into every project after.",
    technology: ["Java", "JavaFX", "SQL", "Maven", "Git", "MVC"],
    image: "/projects/dictionary.png",
    imageAlt:
      "Arabic to Urdu dictionary desktop application with a split translation panel, saved-words sidebar and dark theme.",
  },
  {
    id: "search",
    title: "Desktop Search Engine",
    category: "Desktop · Data structures",
    year: "2020",
    summary:
      "A .NET desktop search engine built while studying data structures — used to prove out AVL trees, tries, priority queues and stacks inside a real interface.",
    challenge:
      "A data-structures course project with a real goal: build something that would fall over under load unless the right structure was chosen for each job. Naive search over a growing record set had to feel instant.",
    solution:
      "The record store sits behind an AVL tree so lookups stay logarithmic as the dataset grows. A trie powers prefix-based autocomplete suggestions. A priority queue ranks results by relevance score. A stack plus hash lookup keeps recent-search history addressable. Each structure was chosen because a naive alternative was measurably slower.",
    outcome:
      "A working desktop app that actually felt fast, and a durable understanding of when to reach for which data structure — internalized by shipping code, not by memorizing complexity tables.",
    technology: [
      "C#",
      ".NET",
      "WinForms",
      "AVL Tree",
      "Trie",
      "Priority Queue",
    ],
    image: "/projects/search.png",
    imageAlt:
      "Desktop search engine application with an autocomplete dropdown, ranked results list and a background AVL tree visualization.",
  },
];

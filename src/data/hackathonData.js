export const TRACKS_DATA = [
  {
    id: 'cybersecurity',
    number: '01',
    title: 'Cybersecurity & Blockchain',
    shortTitle: 'Cyber & Web3',
    iconName: 'ShieldAlert',
    color: '#2fb8ff',
    glowColor: 'rgba(47, 184, 255, 0.5)',
    description: 'Secure systems, protect data and build trustworthy decentralised applications and zero-knowledge architectures.',
    challenges: [
      'Zero-Knowledge Proofs for Privacy-Preserving Identity Verification',
      'AI-Powered Autonomous Threat Detection & Intrusion Prevention',
      'Smart Contract Security Auditing & Automated Vulnerability Mitigation',
      'Cross-Chain Bridge Security & Decentralized Recovery Protocols'
    ],
    techStack: ['Solidity', 'Rust', 'Circom', 'Python', 'eBPF', 'Wireshark'],
    prize: '₹20,000 Track Bounty + Web3 Grants'
  },
  {
    id: 'energy',
    number: '02',
    title: 'Energy and Sustainability',
    shortTitle: 'Energy & Climate',
    iconName: 'Zap',
    color: '#22d39a',
    glowColor: 'rgba(34, 211, 154, 0.5)',
    description: 'Clean energy, smart grids and tech that reduces our environmental footprint to combat global climate emergencies.',
    challenges: [
      'Smart Microgrid Energy Optimization using Predictive AI',
      'IoT Sensor Networks for Industrial Carbon Footprint Auditing',
      'Decentralized Peer-to-Peer Renewable Energy Trading Platforms',
      'Intelligent Battery Health & Lifecycle Management for EVs'
    ],
    techStack: ['IoT / ESP32', 'Python', 'Time-Series AI', 'TensorFlow', 'PostgreSQL'],
    prize: '₹20,000 Track Bounty + CleanTech Incubation'
  },
  {
    id: 'spacetech',
    number: '03',
    title: 'Space Technology',
    shortTitle: 'Space Tech',
    iconName: 'Rocket',
    color: '#f2b632',
    glowColor: 'rgba(242, 182, 50, 0.5)',
    description: 'Satellites, earth observation and tools for exploring beyond our planet with telemetry and geospatial intelligence.',
    challenges: [
      'Real-Time Space Debris Tracking & Collision Avoidance Modeling',
      'Hyperspectral Satellite Image Processing for Climate Disaster Response',
      'Low-Bandwidth Deep Space Mesh Communications Protocol',
      'Autonomous Rover Pathfinding in Simulated Martian Terrains'
    ],
    techStack: ['Orbital Mechanics SDK', 'PyTorch', 'OpenCV', 'Rust', 'GIS / Sentinel-2'],
    prize: '₹20,000 Track Bounty + Aerospace Mentorship'
  },
  {
    id: 'fintech',
    number: '04',
    title: 'Fintech',
    shortTitle: 'FinTech',
    iconName: 'TrendingUp',
    color: '#ff8a1f',
    glowColor: 'rgba(255, 138, 31, 0.5)',
    description: 'Payments, inclusion, risk and smarter ways to manage money and financial transactions globally.',
    challenges: [
      'High-Frequency Algorithmic Fraud Prevention with Graph Neural Networks',
      'Inclusive Micro-Credit Scoring for Underbanked Rural Communities',
      'Automated Cross-Border Multi-Currency Settlement Engine',
      'Conversational AI Agents for Proactive Wealth Management & Financial Literacy'
    ],
    techStack: ['Next.js', 'Go', 'Neo4j', 'FastAPI', 'Kafka', 'UPI / Stripe APIs'],
    prize: '₹20,000 Track Bounty + FinTech Accelerator Access'
  },
  {
    id: 'quantum',
    number: '05',
    title: 'Quantum Computing',
    shortTitle: 'Quantum Tech',
    iconName: 'Atom',
    color: '#ff3fa4',
    glowColor: 'rgba(255, 63, 164, 0.5)',
    description: 'Quantum algorithms, simulation and post-quantum thinking for hard, previously intractable computational problems.',
    challenges: [
      'Quantum Approximate Optimization (QAOA) for Supply Chain Logistics',
      'Post-Quantum Lattice-Based Cryptography Implementation',
      'Quantum Machine Learning for Molecular Drug Discovery Simulations',
      'Error Mitigation Techniques for Noisy Intermediate-Scale Quantum (NISQ) Devices'
    ],
    techStack: ['Qiskit', 'Cirq', 'Pennylane', 'Python', 'NumPy', 'Julia'],
    prize: '₹20,000 Track Bounty + Quantum Cloud Credits'
  }
];

export const PRIZES_DATA = [
  {
    rank: 'WINNER',
    title: 'GRAND CHAMPION',
    amount: '₹ 3,00,000',
    accent: 'border-yellow-400/50 shadow-yellow-500/20 text-yellow-400',
    perks: [
      'Grand Champion Trophy & Official Certificates',
      'Direct seed funding & incubation pitch',
      'Exclusive Tier-1 fast-track interviews',
      'Cloud credits worth $10,000'
    ]
  },
  {
    rank: 'RUNNER-UP',
    title: 'FIRST RUNNER UP',
    amount: '₹ 2,00,000',
    accent: 'border-cyan-400/50 shadow-cyan-500/20 text-cyan-400',
    perks: [
      'Silver Runner-up Trophy & Certificates',
      'Accelerator interview opportunities',
      'Cloud & API credits worth $5,000',
      'Mentorship package with industry leads'
    ]
  },
  {
    rank: 'SECOND RUNNER-UP',
    title: 'SECOND RUNNER UP',
    amount: '₹ 1,00,000',
    accent: 'border-purple-400/50 shadow-purple-500/20 text-purple-400',
    perks: [
      'Bronze Trophy & Certificates',
      'Exclusive Tech Swag Kit & Goodies',
      'Cloud credits worth $2,500',
      'Featured showcase in partner media'
    ]
  },
  {
    rank: 'SPECIAL AWARDS',
    title: '5 X TRACK & CATEGORY AWARDS',
    amount: '₹ 1,00,000 (₹ 20,000 each)',
    accent: 'border-emerald-400/50 shadow-emerald-500/20 text-emerald-400',
    perks: [
      'Best All-Women Hacker Squad',
      'Best UI/UX Experience',
      'Best Freshman Debut Hack',
      'Domain partner grants & credits'
    ]
  }
];

export const TIMELINE_DATA = [
  {
    phase: '01',
    date: 'OCT 25 - NOV 15',
    title: 'Registrations Open',
    status: 'ACTIVE NOW',
    active: true,
    description: 'Form your team of 1 to 4 members, choose your innovation track, and submit your initial problem statement pitch.'
  },
  {
    phase: '02',
    date: 'NOV 18',
    title: 'Idea Submission Deadline',
    status: 'UPCOMING',
    active: false,
    description: 'Submit your 3-slide architecture deck or demo prototype walkthrough for jury evaluation.'
  },
  {
    phase: '03',
    date: 'NOV 22',
    title: 'Shortlist Announced',
    status: 'UPCOMING',
    active: false,
    description: 'Top 100 teams across all 5 tracks are selected to enter the official 36-hour Chakravyuh arena sprint.'
  },
  {
    phase: '04',
    date: 'NOV 28 - NOV 30',
    title: 'Hackathon Day (36-Hr Arena)',
    status: 'ARENA SPRINT',
    active: false,
    description: 'High-octane non-stop coding sprint, mentor checkpoints, midnight mini-games, and prototype freeze.'
  },
  {
    phase: '05',
    date: 'DEC 01',
    title: 'Final Pitches & Results',
    status: 'AWARDS',
    active: false,
    description: 'Live stage demos to distinguished judges, followed by the ₹7,00,000 prize distribution and awards ceremony.'
  }
];

export const RULES_DATA = [
  {
    title: 'Team Composition & Eligibility',
    iconName: 'Users',
    points: [
      'Teams must consist of 1 to 4 members.',
      'Inter-college, cross-university, and multidisciplinary teams are welcome.',
      'Students, recent graduates, and independent developers are eligible.'
    ]
  },
  {
    title: 'Track Selection & Originality',
    iconName: 'Code',
    points: [
      'Choose exactly one of the five innovation tracks.',
      'All prototype code must be written during the hackathon sprint window.',
      'Open-source libraries and APIs are allowed with proper attribution.'
    ]
  },
  {
    title: 'Submission Deliverables',
    iconName: 'FileCheck',
    points: [
      'Public GitHub repository with README and setup instructions.',
      'Working demo deployment link or APK / executable.',
      'A 3-minute video pitch demonstrating features and live workflow.'
    ]
  },
  {
    title: 'Judging & Decision',
    iconName: 'Award',
    points: [
      'Innovation & Originality: 30%',
      'Technical Complexity & Architecture: 25%',
      'UI/UX Design & User Experience: 20%',
      'Judges decisions are final and binding.'
    ]
  }
];

export const FAQ_DATA = [
  {
    q: 'Who can participate?',
    a: 'Students and professionals worldwide, individually or in teams of up to 4 members.'
  },
  {
    q: 'Is there a registration fee?',
    a: 'No! Registration is 100% free of charge for all accepted participants. Meals, swag, and mentorship access are fully covered.'
  },
  {
    q: 'Can I change my track later?',
    a: 'Yes! Track changes are allowed anytime until the official idea submission deadline.'
  },
  {
    q: 'Is the event online or offline?',
    a: 'Chakravyuh is a hybrid event! Round 1 is fully virtual. The top 100 shortlisted teams enter the 36-hour physical arena sprint.'
  },
  {
    q: 'Who owns the intellectual property (IP)?',
    a: 'You and your team retain 100% ownership of all code, designs, and intellectual property created during the event.'
  }
];

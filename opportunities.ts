export type Opportunity = {
  id: string;
  slug: string;
  title: string;
  organization: string;
  orgLogo?: string;
  category: string;
  tags: string[];
  location: string;
  remote: boolean;
  deadline: string;
  daysLeft: number;
  match?: number;
  verified: boolean;
  isNew: boolean;
  summary: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  benefits: string[];
  sourceName: string;
  sourceUrl: string;
  applicationUrl: string;
  lastVerified: string;
  discoveredAt: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "1",
    slug: "ai-research-internship-nova-labs",
    title: "AI Research Internship",
    organization: "Nova Labs",
    category: "Internship",
    tags: ["Internship", "AI & Machine Learning"],
    location: "Remote · India",
    remote: true,
    deadline: "2026-09-20",
    daysLeft: 3,
    match: 94,
    verified: true,
    isNew: true,
    summary: "Join Nova Labs for an exciting AI Research Internship where you'll work on real-world projects, collaborate with experienced researchers, and contribute to cutting-edge AI solutions.",
    description: "Join Nova Labs for an exciting AI Research Internship where you'll work on real-world projects, collaborate with experienced researchers, and contribute to cutting-edge AI solutions.\n\nKey Responsibilities:\n• Work on machine learning and deep learning projects\n• Collaborate with cross-functional teams\n• Write research reports and documentation",
    eligibility: [
      "Students (undergraduate or graduate)",
      "Basic programming knowledge",
      "Interest in AI/ML"
    ],
    requirements: ["Python", "Machine Learning", "Git"],
    benefits: ["Mentorship", "Stipend", "Certificate", "Flexible hours"],
    sourceName: "Official Organization Website",
    sourceUrl: "https://novalabs.com/careers",
    applicationUrl: "https://novalabs.com/apply",
    lastVerified: "Today",
    discoveredAt: "2 hours ago"
  },
  {
    id: "2",
    slug: "global-ai-hackathon-openai",
    title: "Global AI Hackathon",
    organization: "OpenAI",
    category: "Hackathon",
    tags: ["Competition", "AI"],
    location: "Remote",
    remote: true,
    deadline: "2026-09-23",
    daysLeft: 6,
    match: 87,
    verified: true,
    isNew: true,
    summary: "Compete in OpenAI's global AI hackathon with $50,000 in prizes. Build innovative solutions using the latest AI models.",
    description: "OpenAI invites developers, researchers, and students worldwide to participate in the Global AI Hackathon. Build innovative applications using state-of-the-art models and compete for significant prizes.",
    eligibility: ["Open to all ages 18+", "Teams of 1-4"],
    requirements: ["Any programming language", "Creativity"],
    benefits: ["$50,000 prizes", "Mentorship from OpenAI", "Networking"],
    sourceName: "Official OpenAI Website",
    sourceUrl: "https://openai.com/hackathon",
    applicationUrl: "https://openai.com/hackathon/register",
    lastVerified: "3 hours ago",
    discoveredAt: "5 hours ago"
  },
  {
    id: "3",
    slug: "data-science-scholarship-google",
    title: "Data Science Scholarship",
    organization: "Google",
    category: "Scholarship",
    tags: ["Scholarship", "Data Science"],
    location: "India",
    remote: false,
    deadline: "2026-09-27",
    daysLeft: 10,
    match: 78,
    verified: true,
    isNew: true,
    summary: "Fully funded scholarship for aspiring data scientists in India. Covers tuition, living expenses, and mentorship.",
    description: "Google's Data Science Scholarship program supports talented students pursuing data science education in India. Recipients receive full financial support and access to Google mentors.",
    eligibility: ["Indian citizens", "Undergraduate or Master's students", "Strong academic record"],
    requirements: ["Academic transcripts", "Personal statement", "Recommendation letters"],
    benefits: ["Full tuition", "Stipend", "Google mentorship", "Career support"],
    sourceName: "Google for Education",
    sourceUrl: "https://edu.google.com/scholarships",
    applicationUrl: "https://edu.google.com/scholarships/apply",
    lastVerified: "1 day ago",
    discoveredAt: "1 day ago"
  },
  {
    id: "4",
    slug: "software-engineering-internship-microsoft",
    title: "Software Engineering Internship",
    organization: "Microsoft",
    category: "Internship",
    tags: ["Internship", "Software Development"],
    location: "Remote · India",
    remote: true,
    deadline: "2026-09-25",
    daysLeft: 8,
    match: 82,
    verified: true,
    isNew: false,
    summary: "12-week software engineering internship at Microsoft India. Work on real products used by millions.",
    description: "Microsoft is seeking passionate software engineering interns to join teams across Azure, Office, and Windows. Gain hands-on experience with production codebases and modern development practices.",
    eligibility: ["Current students in CS or related fields", "Available for 12 weeks"],
    requirements: ["C#, Java, or Python", "Data structures & algorithms", "Git"],
    benefits: ["Competitive stipend", "Housing assistance", "Mentorship", "Return offer potential"],
    sourceName: "Microsoft Careers",
    sourceUrl: "https://careers.microsoft.com",
    applicationUrl: "https://careers.microsoft.com/internships",
    lastVerified: "6 hours ago",
    discoveredAt: "2 days ago"
  },
  {
    id: "5",
    slug: "ai-engineering-internship-nova",
    title: "AI Engineering Internship",
    organization: "Nova Labs",
    category: "Internship",
    tags: ["Internship", "AI & Machine Learning"],
    location: "Remote · India",
    remote: true,
    deadline: "2026-09-22",
    daysLeft: 5,
    match: 94,
    verified: true,
    isNew: true,
    summary: "Hands-on AI engineering role building production ML systems at Nova Labs.",
    description: "Work alongside senior engineers to ship ML models into production. Focus on model serving, monitoring, and optimization.",
    eligibility: ["Students or recent graduates", "Strong Python skills"],
    requirements: ["Python", "PyTorch or TensorFlow", "Docker basics"],
    benefits: ["Stipend", "Remote work", "Learning budget"],
    sourceName: "Nova Labs Careers",
    sourceUrl: "https://novalabs.com",
    applicationUrl: "https://novalabs.com/apply",
    lastVerified: "Today",
    discoveredAt: "4 hours ago"
  },
  {
    id: "6",
    slug: "climate-tech-fellowship",
    title: "Climate Tech Fellowship",
    organization: "Breakthrough Energy",
    category: "Fellowship",
    tags: ["Fellowship", "Climate"],
    location: "Remote",
    remote: true,
    deadline: "2026-10-15",
    daysLeft: 28,
    match: 65,
    verified: true,
    isNew: false,
    summary: "One-year fellowship supporting entrepreneurs building climate solutions.",
    description: "The Climate Tech Fellowship provides funding, mentorship, and network access for founders working on hard-tech climate solutions.",
    eligibility: ["Founders or early-stage teams", "Climate-focused technology"],
    requirements: ["Pitch deck", "Technical prototype preferred"],
    benefits: ["$100k funding", "Mentorship", "Network access"],
    sourceName: "Breakthrough Energy",
    sourceUrl: "https://breakthroughenergy.org",
    applicationUrl: "https://breakthroughenergy.org/fellowship",
    lastVerified: "2 days ago",
    discoveredAt: "3 days ago"
  }
];

export const categories = [
  { name: "Internship", count: 342 },
  { name: "Scholarship", count: 128 },
  { name: "Hackathon", count: 89 },
  { name: "Grant", count: 56 },
  { name: "Freelance", count: 210 },
  { name: "Job", count: 423 }
];

export const liveStats = {
  opportunities: "10K+",
  organizations: "500+",
  activeUsers: "150K+",
  countries: "120+"
};

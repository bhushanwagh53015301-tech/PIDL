export const siteConfig = {
  name: "PIDL",
  fullName: "PIDL — Praavi Institute of Digital Leadership",
  tagline: "From Scroll to Skill to Success.",
  subTagline: "Become Job-Ready in 60 Days with live client projects, agency-style training, and guaranteed internship support.",
  location: "Loni Kalbhor, Pune, Maharashtra, India",
  fullAddress: "PIDL – Praavi Institute of Digital Leadership, Loni Kalbhor, Pune, Maharashtra 412201",
  phone: "+91 7709110967",
  formattedPhone: "+91 77091 10967",
  email: "info@pidlofficial.org",
  instagram: "@pidlofficial",
  instagramUrl: "https://instagram.com/pidlofficial",
  whatsappUrl: "https://wa.me/917709110967?text=Hi%20PIDL%2C%20I%20want%20to%20know%20more%20about%20the%20Digital%20Marketing%20course.",
  
  // Single CMS Constant for Fee & Batch Data
  fee: "₹9,999",
  originalFee: "₹15,999",
  discountAmount: "₹6,000 OFF",
  emiPlan: "₹4,999 x 2 (via GPay / UPI)",
  duration: "6 Weeks Learning + 2 Weeks Internship",
  totalWeeks: "8 Weeks Total Program",
  nextBatchDate: "October 7, 2026",
  batchSizeLimit: 50,
  seatsRemaining: 12,
  classTimings: "Sat & Sun: 9:00 AM – 1:00 PM (Weekend Batches)",

  // EdTech Active Batches (PW / KGS Style)
  batches: [
    {
      id: "offline-weekday",
      name: "Offline Classroom Weekend Batch (Loni Kalbhor Pune)",
      mode: "Offline",
      badge: "Campus Weekend",
      startDate: "October 10, 2026",
      timings: "Sat–Sun: 9:00 AM – 12:00 PM",
      location: "PIDL Campus, Loni Kalbhor, Pune",
      filledSeats: 38,
      totalSeats: 50,
      fee: "₹9,999",
      originalFee: "₹15,999",
      emi: "₹4,999 x 2",
      features: [
        "Dedicated Workstation in Computer Lab",
        "1:1 Faculty Desk Mentorship",
        "Campus Lounge & Free WiFi",
        "Physical Agency Client Meetings"
      ],
      isFillingFast: true
    },
    {
      id: "online-live",
      name: "Online Live Interactive Weekend Batch (Pan-India)",
      mode: "Online",
      badge: "Live Weekend",
      startDate: "October 10, 2026",
      timings: "Sat–Sun: 2:00 PM – 5:00 PM",
      location: "Zoom / Google Meet HD Live Studio",
      filledSeats: 42,
      totalSeats: 50,
      fee: "₹9,999",
      originalFee: "₹15,999",
      emi: "₹4,999 x 2",
      features: [
        "Live 2-Way Interactive HD Sessions",
        "Lifetime Recorded Lecture Portal Access",
        "Digital Assignment Submissions & Audits",
        "Virtual Doubt-Clearing Breakout Rooms"
      ],
      isFillingFast: true
    },
    {
      id: "weekend-hybrid",
      name: "Weekend Special Hybrid Batch (Offline + Online)",
      mode: "Hybrid",
      badge: "Weekend Special",
      startDate: "October 10, 2026",
      timings: "Sat–Sun: 9:00 AM – 1:00 PM",
      location: "Campus Lab or Live Online Stream",
      filledSeats: 25,
      totalSeats: 50,
      fee: "₹9,999",
      originalFee: "₹15,999",
      emi: "₹4,999 x 2",
      features: [
        "Ideal for Working Professionals & College Students",
        "Flexible Choice: Attend in Pune or Stream Online",
        "Weekend Intensive Live Teardowns",
        "2-Week Internship Placement Support"
      ],
      isFillingFast: false
    }
  ],

  // Udemy-Style Tools Stack Matrix
  toolsStack: [
    { name: "Meta Ads Manager", category: "Social Ads", icon: "/images/digital marketing.png", level: "Advanced Mastery" },
    { name: "Google Ads & Keyword Planner", category: "Paid Search", icon: "/images/digital marketing.png", level: "Search & Display" },
    { name: "WordPress & Elementor", category: "No-Code Web", icon: "/images/praavi.png", level: "Landing Pages" },
    { name: "Google Analytics 4 & Tag Mgr", category: "Analytics", icon: "/images/digital marketing.png", level: "Tracking & CRO" },
    { name: "HubSpot CRM", category: "Automation", icon: "/images/digital marketing.png", level: "Funnels & Leads" },
    { name: "Canva & Figma Basics", category: "Ad Creatives", icon: "/images/pooja badekar.png", level: "Creative Design" },
    { name: "Ahrefs & Semrush Audits", category: "SEO Tools", icon: "/images/digital marketing.png", level: "Keyword Research" },
    { name: "Mailchimp / Brevo", category: "Email Marketing", icon: "/images/digital marketing.png", level: "Email Automation" }
  ],

  // KGS-Style Weekly Schedule Timetable
  weeklySchedule: [
    { week: "Week 1", focus: "Digital Marketing Foundations & Strategy", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 2", focus: "Meta Ads (FB/IG) Campaign Engineering", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 3", focus: "Google Ads (Search/Display) & Keyword Strategy", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 4", focus: "SEO Audits & WordPress Landing Page Builds", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 5", focus: "Sales Funnels, CRM Automation & Copywriting", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 6", focus: "Political/Startup Marketing & Portfolio Teardown", offlineClass: "Sat–Sun 9 AM–12 PM", onlineClass: "Sat–Sun 2–5 PM", labHours: "Weekend 1–3 PM" },
    { week: "Week 7–8", focus: "Guaranteed 2-Week Agency Internship with Praavi Group", offlineClass: "Agency Live Tasks", onlineClass: "Remote Client Deliverables", labHours: "Dedicated Desk" }
  ],

  parentGroup: {
    name: "Praavi Group",
    clientsCount: "50+",
    description: "Backed by Praavi Group, a full-service digital agency managing 50+ active client portfolios across India.",
    highlights: [
      "50+ Active Clients Pan-India",
      "Proven Performance Marketing Results",
      "Real-World Agency Execution",
      "Direct Leadership Mentorship",
      "Guaranteed Agency Internship"
    ]
  },

  logos: {
    blackHeader: "/images/PIDL LOGO - Black (1).jpg",
    footerLogo: "/images/pidlfooterlogo.png",
    praaviLogo: "/images/praavi.png",
    favicon: "/images/favicon.svg"
  },

  images: {
    heroBanner: "/images/hero banner.jpg",
    homePageBanner: "/images/home page.jpg",
    banner1: "/images/Banner 1.jpg",
    banner1Alt: "/images/Banner 1 (1).jpg",
    digitalMarketing: "/images/digital marketing.png",
    breadcrub: "/images/breadcrub.png"
  },

  whyChooseFeatures: [
    { id: 1, title: "6 Week Intensive Program", desc: "Daily practical learning followed by hands-on execution.", icon: "Calendar" },
    { id: 2, title: "10+ Guest Lectures", desc: "Sessions by agency founders & domain industry experts.", icon: "Users" },
    { id: 3, title: "20+ Live Assignments", desc: "Real-world brand campaign challenges & problem solving.", icon: "CheckSquare" },
    { id: 4, title: "Real Client Projects", desc: "Agency-level portfolio building with Praavi Group clients.", icon: "Briefcase" },
    { id: 5, title: "Live Practical Sessions", desc: "Campaign setup, analytics auditing, and ad optimization.", icon: "Activity" },
    { id: 6, title: "Tool-Based Learning", desc: "Meta Ads Manager, Google Ads, SEO Dashboards & CRMs.", icon: "Cpu" },
    { id: 7, title: "Mentor-Guided Practice", desc: "1:1 personal guidance and campaign feedback.", icon: "UserCheck" },
    { id: 8, title: "Personal Branding Sessions", desc: "Building your digital identity & LinkedIn content strategy.", icon: "Award" },
    { id: 9, title: "100% Practical Focus", desc: "Zero fluff theory. Pure execution-focused learning.", icon: "Zap" }
  ],

  whyPidlPillars: [
    {
      step: "01",
      title: "Real-World Agency Experience",
      desc: "Work on live client accounts from Praavi Group’s portfolio of 50+ active brands across India."
    },
    {
      step: "02",
      title: "Built by Top Consultants",
      desc: "Curriculum designed & delivered by active practitioners, agency heads, and marketing strategists."
    },
    {
      step: "03",
      title: "Job-Ready Confidence",
      desc: "Master exact skills and software platforms that top digital marketing employers demand."
    },
    {
      step: "04",
      title: "Internship & Portfolio Guarantee",
      desc: "Graduate with a verified client portfolio, dual certification, and 2-week agency internship."
    }
  ],

  campusFacilities: [
    { name: "High-Speed Internet", desc: "Dedicated high-bandwidth WiFi for seamless research & campaign setup.", image: "/images/pidl campus/1.png" },
    { name: "Modern Computer Lab", desc: "Equipped workstations running modern SEO & ads tools.", image: "/images/pidl campus/2.png" },
    { name: "Smart Classrooms", desc: "Interactive display systems for immersive live teardowns.", image: "/images/pidl campus/3.png" },
    { name: "Student Lounge", desc: "Collaborative brainstorming & networking space.", image: "/images/pidl campus/4.png" },
    { name: "Parking & Transit Access", desc: "Secure two-wheeler/car parking & 2-min walk from bus/train.", image: "/images/pidl campus/5.png" }
  ],

  admissionsFaqs: [
    {
      q: "What is the fee structure for Offline vs Online batches?",
      a: "Both Offline Classroom (Pune Campus) and Online Live Interactive batches are available at the special fee of ₹9,999 (regular fee ₹15,999). Easy EMI options of ₹4,999 x 2 are available via UPI/GPay for both modes."
    },
    {
      q: "Can I switch between Offline and Online if needed?",
      a: "Yes! Students enrolled in the Offline batch can access live online lecture streams if they miss a class, and Online students are welcome to visit our Pune computer lab for weekend doubt clearing."
    },
    {
      q: "Do I need to own a laptop?",
      a: "A personal laptop is recommended for home practice, but PIDL provides a fully equipped computer lab at our Loni Kalbhor Pune campus for student use."
    },
    {
      q: "Is the 2-Week Internship guaranteed?",
      a: "Yes! Every student who completes the 6-week core training program is guaranteed a 2-week internship letter and real client work experience with Praavi Group."
    },
    {
      q: "What job placement assistance is provided?",
      a: "PIDL provides 100% placement support including resume building, LinkedIn optimization, mock interview prep, and direct referral to our agency network (85% placement rate within 3 months)."
    }
  ],

  otherCourses: [
    { name: "Web Development Course", desc: "Frontend & full-stack fundamentals for modern web applications.", icon: "Code" },
    { name: "German Language Learning", desc: "A1 to B2 level language coaching for career opportunities abroad.", icon: "Globe" },
    { name: "Japanese Language Learning", desc: "JLPT exam preparation and Japanese corporate culture training.", icon: "Languages" },
    { name: "Spoken English & Communication", desc: "Confidence building, professional voice, and corporate accent training.", icon: "MessageSquare" }
  ]
};

// Roadmap data — rule-based, no AI cost. Easy to extend with more domains later.

export const domains = [
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    tagline: 'Networking se SOC analyst tak',
    icon: 'shield',
  },
  {
    id: 'webdev',
    label: 'Web Development',
    tagline: 'HTML se full-stack developer tak',
    icon: 'code',
  },
  {
    id: 'officejobs',
    label: 'Data Entry & Office Jobs',
    tagline: 'Computer basics se confirmed naukri tak',
    icon: 'briefcase',
  },
];

export const roadmaps = {
  cybersecurity: {
    beginner: {
      goal: 'SOC Analyst / Security Fresher',
      durationWeeks: 24,
      steps: [
        {
          title: 'Computer & Networking Basics',
          weeks: '1-4',
          skills: ['OS concepts (Windows/Linux)', 'Networking fundamentals', 'OSI model', 'IP addressing'],
          resources: ['Network+ free YouTube series', 'Cisco Networking Basics (free)'],
          project: 'Apne ghar ke network ka diagram banao — router, devices, IP ranges',
        },
        {
          title: 'Linux Fundamentals',
          weeks: '5-8',
          skills: ['File system', 'Permissions', 'Bash scripting basics', 'Common commands'],
          resources: ['OverTheWire Bandit (free wargame)', 'Linux Journey (free)'],
          project: 'Bandit ke pehle 15 levels solve karo',
        },
        {
          title: 'Security Fundamentals',
          weeks: '9-14',
          skills: ['CIA Triad', 'Common attack types', 'Firewalls', 'VPN concepts'],
          resources: ['TryHackMe free rooms', 'Security+ free notes'],
          project: 'Ek phishing email ke red flags ka writeup banao',
        },
        {
          title: 'Hands-on Practice',
          weeks: '15-20',
          skills: ['Wireshark basics', 'Log analysis', 'Basic CTF challenges'],
          resources: ['TryHackMe SOC path (free tier)', 'PicoCTF (free)'],
          project: 'PicoCTF se 10 beginner challenges solve karo',
        },
        {
          title: 'Job Readiness',
          weeks: '21-24',
          skills: ['Resume building', 'Mock interviews', 'Portfolio writeups'],
          resources: ['LinkedIn optimization', 'GitHub writeup portfolio'],
          project: 'GitHub par apne 3 best CTF writeups publish karo',
        },
      ],
    },
    intermediate: {
      goal: 'Penetration Tester / Bug Bounty Hunter',
      durationWeeks: 20,
      steps: [
        {
          title: 'Web Application Security',
          weeks: '1-5',
          skills: ['OWASP Top 10', 'Burp Suite', 'SQL Injection', 'XSS'],
          resources: ['PortSwigger Web Security Academy (free)', 'OWASP Juice Shop'],
          project: 'Juice Shop ke 15 challenges complete karo',
        },
        {
          title: 'Advanced Exploitation',
          weeks: '6-10',
          skills: ['IDOR', 'Authentication bypass', 'API security'],
          resources: ['HackerOne disclosed reports (free reading)', 'TryHackMe'],
          project: 'Apna pehla responsible disclosure report likho (practice lab par)',
        },
        {
          title: 'Bug Bounty Practice',
          weeks: '11-16',
          skills: ['Recon techniques', 'Scope reading', 'Report writing'],
          resources: ['Bugcrowd University (free)', 'HackerOne Hacktivity'],
          project: 'Ek public bug bounty program ke scope ka recon karo',
        },
        {
          title: 'Portfolio & Applications',
          weeks: '17-20',
          skills: ['Professional reporting', 'Networking with community'],
          resources: ['Twitter/X infosec community', 'Discord CTF groups'],
          project: 'Apna bug bounty profile public karo aur 5 programs follow karo',
        },
      ],
    },
  },
  webdev: {
    beginner: {
      goal: 'Frontend Developer (Fresher)',
      durationWeeks: 16,
      steps: [
        {
          title: 'HTML, CSS Fundamentals',
          weeks: '1-3',
          skills: ['Semantic HTML', 'Flexbox', 'Grid', 'Responsive design'],
          resources: ['freeCodeCamp (free)', 'MDN Web Docs'],
          project: 'Apna personal portfolio page banao (static)',
        },
        {
          title: 'JavaScript Basics',
          weeks: '4-7',
          skills: ['Variables', 'Functions', 'DOM manipulation', 'Fetch API'],
          resources: ['JavaScript.info (free)', 'freeCodeCamp JS course'],
          project: 'Ek to-do list app banao (vanilla JS)',
        },
        {
          title: 'React Fundamentals',
          weeks: '8-12',
          skills: ['Components', 'Props/State', 'Hooks', 'Routing'],
          resources: ['React official docs', 'freeCodeCamp React course'],
          project: 'Weather app banao (free API use karke)',
        },
        {
          title: 'Job Readiness',
          weeks: '13-16',
          skills: ['Git/GitHub', 'Deployment', 'Resume + portfolio'],
          resources: ['GitHub Pages (free hosting)', 'Vercel (free hosting)'],
          project: '2 projects deploy karo aur GitHub par professional README likho',
        },
      ],
    },
    intermediate: {
      goal: 'Full-Stack Developer',
      durationWeeks: 18,
      steps: [
        {
          title: 'Backend Basics',
          weeks: '1-5',
          skills: ['Node.js', 'Express', 'REST APIs'],
          resources: ['Node.js docs', 'freeCodeCamp backend course'],
          project: 'Ek REST API banao (CRUD operations)',
        },
        {
          title: 'Databases',
          weeks: '6-9',
          skills: ['SQL basics', 'MongoDB/Supabase', 'Schema design'],
          resources: ['Supabase free tier docs', 'SQLBolt (free)'],
          project: 'Apna to-do app ko database se connect karo',
        },
        {
          title: 'Full-Stack Project',
          weeks: '10-15',
          skills: ['Authentication', 'Frontend-backend integration', 'State management'],
          resources: ['Supabase Auth (free)', 'React Context/Zustand'],
          project: 'Ek complete full-stack app banao with login',
        },
        {
          title: 'Portfolio Polish',
          weeks: '16-18',
          skills: ['Documentation', 'Deployment', 'Interview prep'],
          resources: ['Vercel/Netlify free hosting'],
          project: '3 full-stack projects live deploy karo',
        },
      ],
    },
  },
  officejobs: {
    beginner: {
      goal: 'Computer Operator / Data Entry Executive',
      durationWeeks: 8,
      steps: [
        {
          title: 'Computer Basics',
          weeks: '1-2',
          skills: ['File management', 'Typing speed', 'Keyboard shortcuts'],
          resources: ['Free typing practice sites', 'Windows basics tutorials'],
          project: 'Typing speed 30+ WPM tak le jao (free typing test sites se practice)',
        },
        {
          title: 'MS Office / Google Workspace',
          weeks: '3-5',
          skills: ['Excel formulas', 'Word formatting', 'Google Sheets/Docs'],
          resources: ['YouTube free Excel courses', 'Google Workspace free tutorials'],
          project: 'Ek sample data entry sheet banao with formulas (SUM, VLOOKUP)',
        },
        {
          title: 'Communication & Tools',
          weeks: '6-7',
          skills: ['Email etiquette', 'Basic English communication', 'Google Forms'],
          resources: ['Free Business English courses', 'Google Forms tutorials'],
          project: 'Ek professional email draft banao (job application ke liye)',
        },
        {
          title: 'Job Application Ready',
          weeks: '8',
          skills: ['Resume building', 'Naukri/LinkedIn profile', 'Interview basics'],
          resources: ['Naukri.com free profile', 'Free resume templates'],
          project: 'Apna resume finalize karo aur 10 jobs apply karo',
        },
      ],
    },
    intermediate: {
      goal: 'Office Administrator / Senior Data Executive',
      durationWeeks: 10,
      steps: [
        {
          title: 'Advanced Excel',
          weeks: '1-3',
          skills: ['Pivot tables', 'Macros basics', 'Data visualization'],
          resources: ['Free Advanced Excel YouTube series'],
          project: 'Ek dashboard banao Pivot tables se',
        },
        {
          title: 'Office Management Tools',
          weeks: '4-6',
          skills: ['Calendar management', 'Documentation', 'Basic accounting concepts'],
          resources: ['Free office admin courses (YouTube)'],
          project: 'Ek monthly report template banao',
        },
        {
          title: 'Soft Skills & Leadership',
          weeks: '7-9',
          skills: ['Team coordination', 'Client communication', 'Time management'],
          resources: ['Free soft-skills courses (Coursera audit mode)'],
          project: 'Apna time-management system document karo',
        },
        {
          title: 'Career Growth',
          weeks: '10',
          skills: ['Resume for senior roles', 'LinkedIn networking'],
          resources: ['LinkedIn free learning'],
          project: 'LinkedIn profile ko senior-role ke liye optimize karo',
        },
      ],
    },
  },
};

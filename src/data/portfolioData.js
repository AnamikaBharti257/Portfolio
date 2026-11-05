import imagePic from '../assets/image.png';
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';
import screenshot5 from '../assets/screenshot5.png';
import screenshot6 from '../assets/screenshot6.png';
import movieExplorerImg from '../assets/movie-explorer.svg';
import fakeNewsImg from '../assets/fake-news-detector.svg';

export const personalInfo = {
  name: "Anamika Bharti",
  role: "Full Stack Developer | MERN Stack Developer",
  shortRole: "Full Stack MERN Developer",
  location: "Bengaluru, Karnataka, India",
  hometown: "Ranchi, Jharkhand, India",
  headline: "Anamika Bharti — Full Stack Developer",
  tagline: "Learning by building and growing with every project.",
  intro: "I build web applications using modern frontend and backend technologies, with an interest in creating practical solutions and improving user experiences.",
  profileImage: imagePic,
  resumeUrl: "/resume.pdf",
  email: "bhartianamika012@gmail.com",
  phone: "+91 6207522412",
  socials: {
    linkedin: "https://www.linkedin.com/in/anamika-bharti-12f",
    github: "https://github.com/AnamikaBharti257",
    email: "mailto:bhartianamika012@gmail.com"
  }
};

export const aboutContent = {
  paragraph1:
    "I'm a Full Stack Developer specializing in the MERN stack, with hands-on experience building web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy turning ideas into functional applications and working on both frontend interfaces and backend functionality.",
  paragraph2:
    "I'm a 2026 B.Tech Computer Science graduate from Cambridge Institute of Technology, currently undergoing software development training at KodNest in Bengaluru. Through my projects, I've gained practical experience in REST API development, database management, authentication, and building responsive web applications. I'm always exploring new technologies and improving my development skills.",
  details: [
    { label: "Name", value: "Anamika Bharti" },
    { label: "Current Role", value: "Software Development Trainee – KodNest" },
    { label: "Experience", value: "Fresher | Hands-on Project Experience" },
    { label: "Graduation Year", value: "2026" },
    { label: "Degree", value: "B.Tech in Computer Science and Engineering" },
    { label: "College", value: "Cambridge Institute of Technology, Ranchi" },
    { label: "CGPA", value: "8.5 / 10" },
    { label: "Current Location", value: "Bengaluru, Karnataka, India" },
    { label: "Hometown", value: "Ranchi, Jharkhand, India" }
  ]
};

export const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Building responsive and user-friendly web applications using React.js, HTML, CSS, and JavaScript.",
    icon: "Globe"
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating interactive interfaces with React.js and reusable components.",
    icon: "Layout"
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Developing server-side applications, REST APIs, and authentication using Node.js and Express.js.",
    icon: "Server"
  },
  {
    number: "04",
    title: "Database Management",
    description: "Working with MongoDB and MySQL to store, manage, and retrieve application data.",
    icon: "Database"
  }
];

export const educationList = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Cambridge Institute of Technology",
    location: "Ranchi, Jharkhand",
    period: "2022 – 2026",
    grade: "CGPA: 8.5",
    type: "Higher Education",
    highlights: "Core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full Stack Web Engineering."
  },
  {
    degree: "Intermediate (Senior Secondary)",
    institution: "Loyola Convent School",
    location: "Ranchi, Jharkhand",
    period: "2020 – 2022",
    grade: "77%",
    type: "Intermediate",
    highlights: "Focused on Science (Physics, Chemistry, Mathematics) with foundational programming principles."
  },
  {
    degree: "Matriculation (Secondary Education)",
    institution: "Tata DAV Public School",
    location: "Ramgarh, Jharkhand",
    period: "2019 – 2020",
    grade: "89%",
    type: "High School",
    highlights: "Excellence in mathematics, logical reasoning, and basic sciences."
  }
];

export const experienceList = [
  {
    role: "Software Development Trainee",
    company: "KodNest",
    location: "Bengaluru, India",
    period: "2026 – Present",
    type: "Structured Technical Training",
    badge: "Current Training",
    description:
      "Currently undergoing structured software development training and working on programming assignments and practical development exercises.",
    responsibilities: [
      "Participating in structured software development training.",
      "Practicing Java programming and related technical concepts.",
      "Working on coding assignments and problem-solving exercises.",
      "Improving programming fundamentals and software development skills."
    ]
  }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Code2",
    skills: [
      { name: "React.js", level: "Hands-on Experience", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: "Hands-on Experience", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Hands-on Experience", icon: "Palette" },
      { name: "HTML5", level: "Hands-on Experience", icon: "FileCode2" },
      { name: "CSS3", level: "Hands-on Experience", icon: "Sparkles" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Cpu",
    skills: [
      { name: "Node.js", level: "Hands-on Experience", icon: "Server" },
      { name: "Express.js", level: "Hands-on Experience", icon: "Route" },
      { name: "REST APIs", level: "Hands-on Experience", icon: "Network" },
      { name: "Java", level: "Familiar", icon: "Coffee" },
      { name: "Python", level: "Familiar", icon: "Terminal" }
    ]
  },
  {
    category: "Database Systems",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Hands-on Experience", icon: "Layers" },
      { name: "MySQL", level: "Familiar", icon: "Table" },
      { name: "SQL", level: "Familiar", icon: "Binary" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Hands-on Experience", icon: "GitBranch" },
      { name: "GitHub", level: "Hands-on Experience", icon: "Github" },
      { name: "VS Code", level: "Hands-on Experience", icon: "Code" },
      { name: "Postman", level: "Hands-on Experience", icon: "Send" },
      { name: "Render", level: "Hands-on Experience", icon: "Cloud" }
    ]
  },
  {
    category: "Soft Skills & Professionalism",
    icon: "HeartHandshake",
    skills: [
      { name: "Problem Solving", level: "Core Strength", icon: "Lightbulb" },
      { name: "Communication", level: "Core Strength", icon: "MessageSquare" },
      { name: "Ownership", level: "Core Strength", icon: "CheckCircle" },
      { name: "Collaboration", level: "Core Strength", icon: "Users" },
      { name: "Adaptability", level: "Core Strength", icon: "Repeat" },
      { name: "Quick Learning", level: "Core Strength", icon: "Zap" }
    ]
  }
];

export const projectCategories = [
  "All",
  "Web Apps",
  "UI/UX",
  "Mobile",
  "Data",
  "AI"
];

export const projects = [
  {
    id: "campus-recruitment",
    title: "Campus Recruitment System",
    category: "Web Apps",
    subCategory: "Web Application | Full Stack MERN",
    featured: true,
    description:
      "A MERN-based web application that streamlines campus placements by allowing students to explore and apply for jobs, companies to manage job postings, and administrators to manage recruitment activities.",
    detailedDescription:
      "Campus Recruitment System is an end-to-end recruitment lifecycle solution developed with MongoDB, Express.js, React.js, and Node.js. It features a modern interface for students to register, build profile details, view active corporate job openings, and track real-time application statuses. Corporate recruiters can sign in to manage postings, review applicant pools, and streamline interview shortlists.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "JavaScript",
      "REST APIs"
    ],
    features: [
      "Student registration and secure login.",
      "Secure authentication using JWT tokens.",
      "Role-based access control (Student, Company, Admin).",
      "Company registration and placement profile management.",
      "Job posting creation, editing, and listing.",
      "Student job applications with resume submission.",
      "Real-time application status tracking.",
      "Modular REST API integration with Postman verification."
    ],
    contribution:
      "Worked primarily on backend development, including API creation, database integration, authentication, and application functionality. Also worked with frontend integration and API testing using Postman.",
    liveUrl: "https://campus-recruitment-system-frontend.onrender.com",
    githubUrl: "https://github.com/AnamikaBharti257/campus-recruitment-system",
    coverImage: screenshot1,
    screenshots: [
      {
        src: screenshot1,
        caption: "Campus Recruitment System - Homepage Hero & Value Proposition"
      },
      {
        src: screenshot6,
        caption: "Student Dashboard - Applied Jobs, Shortlists & Profile Management"
      },
      {
        src: screenshot2,
        caption: "Secure Login Portal - JWT Protected Authentication"
      },
      {
        src: screenshot4,
        caption: "Account Registration - Dual Role Flow (Student & Company)"
      },
      {
        src: screenshot3,
        caption: "Platform Mission & Architecture Overview"
      },
      {
        src: screenshot5,
        caption: "Placement Cell & Recruiter Support Contact Page"
      }
    ]
  },
  {
    id: "movie-explorer",
    title: "Movie Explorer",
    category: "Web Apps",
    subCategory: "Web Application | Frontend React",
    featured: true,
    description:
      "A React-based application that allows users to search and explore movies, view movie details, and fetch movie information using an external API.",
    detailedDescription:
      "CineScope Movie Explorer is an interactive media exploration dashboard powered by React and the OMDb API. Visitors can seamlessly search titles, browse ratings, view production credits, release dates, genres, and cast details. Features include responsive card layouts, query debouncing, error handling for nonexistent titles, and modal view states.",
    techStack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "OMDb API"
    ],
    features: [
      "Search movies dynamically by title.",
      "Fetch movie information using an external REST API.",
      "Display detailed movie cards and cast metadata.",
      "Responsive user interface for all viewports.",
      "Smooth loading skeletons and error handling states.",
      "Dynamic content rendering and modal details."
    ],
    contribution:
      "Built the full frontend React architecture, integrated asynchronous OMDb API calls, implemented search debounce to optimize network requests, and styled the UI.",
    liveUrl: "https://github.com/AnamikaBharti257",
    githubUrl: "https://github.com/AnamikaBharti257",
    coverImage: movieExplorerImg,
    screenshots: [
      {
        src: movieExplorerImg,
        caption: "Movie Explorer - Interactive Title Search & Details Dashboard"
      }
    ]
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection",
    category: "AI",
    subCategory: "AI | Machine Learning & NLP",
    featured: true,
    description:
      "A machine learning project that identifies whether a news article is likely to be real or fake using text preprocessing and classification algorithms.",
    detailedDescription:
      "An automated NLP verification system designed to combat misinformation. The application processes raw article text through NLP pipelines including tokenization, stop-word removal, and TF-IDF vectorization. Evaluated with Logistic Regression and Multinomial Naive Bayes classifiers to generate reliability scores, class probabilities, and confusion matrix insights.",
    techStack: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Logistic Regression",
      "Naive Bayes"
    ],
    features: [
      "Text preprocessing and normalization pipeline.",
      "Data cleaning, tokenization, and stop-word filtering.",
      "Machine learning classification using Logistic Regression and Naive Bayes.",
      "Model evaluation with precision, recall, and F1-score benchmarks.",
      "Confusion matrix analysis for false-positive & false-negative auditing.",
      "TF-IDF feature weighting for interpretability."
    ],
    contribution:
      "Developed the end-to-end Python ML workflow, performed data cleaning on labelled datasets, built and compared the classification models, and verified accuracy with confusion matrix analytics.",
    liveUrl: "https://github.com/AnamikaBharti257/News_detection",
    githubUrl: "https://github.com/AnamikaBharti257/News_detection",
    coverImage: fakeNewsImg,
    screenshots: [
      {
        src: fakeNewsImg,
        caption: "Veritas AI - NLP Text Preprocessing, Classification & Metrics Dashboard"
      }
    ]
  }
];

export const additionalProjects = [
  {
    number: "04",
    title: "Student Record Management System",
    category: "Web Apps",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    description: "CRUD application for academic institutions featuring student records, server-side pagination, search queries, and reliable data management.",
    githubUrl: "https://github.com/AnamikaBharti257"
  },
  {
    number: "05",
    title: "Tic Tac Toe Game",
    category: "Web Apps",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    description: "Interactive two-player classic game featuring real-time win-condition evaluation, turn indicators, move history, and game reset functionality.",
    githubUrl: "https://github.com/AnamikaBharti257/Tic-Tac-Toe_Game"
  },
  {
    number: "06",
    title: "Netflix Clone",
    category: "UI/UX",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    description: "Responsive Netflix-inspired frontend recreation featuring hero promotional banners, category carousels, responsive grid cards, and clean styling.",
    githubUrl: "https://github.com/AnamikaBharti257"
  }
];


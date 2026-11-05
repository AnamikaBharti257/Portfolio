import fs from 'fs';
import path from 'path';

function createPdf(outputPath) {
  const content = [];

  function addText(font, size, x, y, text, r = 0.1, g = 0.1, b = 0.1) {
    const clean = text
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
    content.push(`${r.toFixed(2)} ${g.toFixed(2)} ${b.toFixed(2)} rg`);
    content.push(`BT /${font} ${size} Tf ${x} ${y} Td (${clean}) Tj ET`);
  }

  function addLine(x1, y1, x2, y2, r = 0.8, g = 0.8, b = 0.8, w = 1) {
    content.push(`${w} w ${r.toFixed(2)} ${g.toFixed(2)} ${b.toFixed(2)} RG ${x1} ${y1} m ${x2} ${y2} l S`);
  }

  function addRect(x, y, w, h, r = 0.95, g = 0.95, b = 0.98) {
    content.push(`${r.toFixed(2)} ${g.toFixed(2)} ${b.toFixed(2)} rg ${x} ${y} ${w} ${h} re f`);
  }

  // Header background
  addRect(0, 750, 595.28, 91.89, 0.94, 0.96, 0.98);
  addText('F2', 22, 40, 805, 'ANAMIKA BHARTI', 0.07, 0.1, 0.2);
  addText('F2', 11, 40, 788, 'Full Stack Developer | MERN Stack Developer', 0.2, 0.38, 0.68);
  addText(
    'F1',
    8.5,
    40,
    768,
    'Bengaluru, Karnataka, India | +91 6207522412 | bhartianamika012@gmail.com | linkedin.com/in/anamika-bharti-12f | github.com/AnamikaBharti257',
    0.3,
    0.35,
    0.42
  );

  let y = 730;

  function section(title) {
    y -= 12;
    addText('F2', 11, 40, y, title.toUpperCase(), 0.08, 0.22, 0.45);
    addLine(40, y - 4, 555, y - 4, 0.25, 0.45, 0.72, 1);
    y -= 16;
  }

  // SUMMARY
  section('Professional Summary');
  addText('F1', 9, 40, y, "Full Stack Developer specializing in the MERN stack with practical experience building responsive web applications,", 0.2, 0.2, 0.2);
  y -= 13;
  addText('F1', 9, 40, y, "RESTful APIs, and secure database solutions. 2026 B.Tech Computer Science graduate from Cambridge Institute of Technology", 0.2, 0.2, 0.2);
  y -= 13;
  addText('F1', 9, 40, y, "undergoing software development training at KodNest, Bengaluru. Dedicated to clean architecture and practical solutions.", 0.2, 0.2, 0.2);
  y -= 18;

  // TRAINING & EXPERIENCE
  section('Training & Development Experience');
  addText('F2', 10, 40, y, 'Software Development Trainee  -  KodNest', 0.12, 0.12, 0.12);
  addText('F1', 9, 420, y, 'Bengaluru, India | 2026 - Present', 0.35, 0.35, 0.35);
  y -= 13;
  addText('F1', 8.5, 50, y, '• Participating in structured software development training, focusing on Java programming and engineering fundamentals.', 0.22, 0.22, 0.22);
  y -= 12;
  addText('F1', 8.5, 50, y, '• Solving coding assignments and practicing core object-oriented principles, algorithms, and practical development exercises.', 0.22, 0.22, 0.22);
  y -= 18;

  // EDUCATION
  section('Education');
  addText('F2', 9.5, 40, y, 'B.Tech in Computer Science and Engineering', 0.12, 0.12, 0.12);
  addText('F1', 9, 425, y, '2022 - 2026 | CGPA: 8.5', 0.35, 0.35, 0.35);
  y -= 12;
  addText('F1', 8.5, 40, y, 'Cambridge Institute of Technology, Ranchi, Jharkhand', 0.3, 0.3, 0.3);
  y -= 14;

  addText('F2', 9.5, 40, y, 'Intermediate (Senior Secondary Education)', 0.12, 0.12, 0.12);
  addText('F1', 9, 455, y, '2020 - 2022 | 77%', 0.35, 0.35, 0.35);
  y -= 12;
  addText('F1', 8.5, 40, y, 'Loyola Convent School, Ranchi, Jharkhand', 0.3, 0.3, 0.3);
  y -= 14;

  addText('F2', 9.5, 40, y, 'Matriculation (Secondary Education)', 0.12, 0.12, 0.12);
  addText('F1', 9, 455, y, '2019 - 2020 | 89%', 0.35, 0.35, 0.35);
  y -= 12;
  addText('F1', 8.5, 40, y, 'Tata DAV Public School, Ramgarh, Jharkhand', 0.3, 0.3, 0.3);
  y -= 18;

  // KEY PROJECTS
  section('Key Technical Projects');
  addText('F2', 9.5, 40, y, 'Campus Recruitment System | MERN Stack (React, Node, Express, MongoDB, JWT)', 0.1, 0.1, 0.1);
  addText('F1', 8.5, 450, y, 'Live Demo | GitHub', 0.2, 0.4, 0.7);
  y -= 12;
  addText('F1', 8.5, 50, y, '• Developed a comprehensive campus placement portal bridging students, college management, and corporate recruiters.', 0.22, 0.22, 0.22);
  y -= 11;
  addText('F1', 8.5, 50, y, '• Engineered secure JWT authentication with role-based authorization for Student and Company access levels.', 0.22, 0.22, 0.22);
  y -= 11;
  addText('F1', 8.5, 50, y, '• Built robust REST APIs in Express.js for job postings, student applications, and verified endpoints via Postman.', 0.22, 0.22, 0.22);
  y -= 15;

  addText('F2', 9.5, 40, y, 'Movie Explorer | React.js, JavaScript, OMDb API, CSS3', 0.1, 0.1, 0.1);
  y -= 12;
  addText('F1', 8.5, 50, y, '• Built an interactive film discovery application consuming third-party REST APIs with live title search and debounce.', 0.22, 0.22, 0.22);
  y -= 11;
  addText('F1', 8.5, 50, y, '• Implemented smooth loading states, detailed movie cards, error boundary handling, and responsive layouts.', 0.22, 0.22, 0.22);
  y -= 15;

  addText('F2', 9.5, 40, y, 'Fake News Detection System | Python, Machine Learning, NLP', 0.1, 0.1, 0.1);
  y -= 12;
  addText('F1', 8.5, 50, y, '• Developed text classification pipelines implementing Logistic Regression and Naive Bayes algorithms.', 0.22, 0.22, 0.22);
  y -= 11;
  addText('F1', 8.5, 50, y, '• Conducted text cleaning, tokenization, stop-word removal, TF-IDF vectorization, and confusion matrix analysis.', 0.22, 0.22, 0.22);
  y -= 15;

  addText('F2', 9.5, 40, y, 'Student Record Management System | Node.js, Express.js, MongoDB, EJS', 0.1, 0.1, 0.1);
  y -= 12;
  addText('F1', 8.5, 50, y, '• Developed complete CRUD operations, server-side data pagination, search filters, and Mongoose schemas.', 0.22, 0.22, 0.22);
  y -= 18;

  // TECHNICAL SKILLS
  section('Technical Skills');
  addText('F2', 9, 40, y, 'Frontend Development:', 0.12, 0.12, 0.12);
  addText('F1', 9, 150, y, 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS', 0.22, 0.22, 0.22);
  y -= 13;
  addText('F2', 9, 40, y, 'Backend Development:', 0.12, 0.12, 0.12);
  addText('F1', 9, 150, y, 'Node.js, Express.js, REST APIs, Java, Python', 0.22, 0.22, 0.22);
  y -= 13;
  addText('F2', 9, 40, y, 'Databases:', 0.12, 0.12, 0.12);
  addText('F1', 9, 150, y, 'MongoDB, MySQL, SQL', 0.22, 0.22, 0.22);
  y -= 13;
  addText('F2', 9, 40, y, 'Developer Tools:', 0.12, 0.12, 0.12);
  addText('F1', 9, 150, y, 'Git, GitHub, VS Code, Postman, Render', 0.22, 0.22, 0.22);
  y -= 13;
  addText('F2', 9, 40, y, 'Soft Skills:', 0.12, 0.12, 0.12);
  addText('F1', 9, 150, y, 'Problem Solving, Communication, Ownership, Collaboration, Adaptability, Quick Learning', 0.22, 0.22, 0.22);

  const streamContent = content.join('\n');
  const streamLen = Buffer.byteLength(streamContent, 'utf-8');

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>',
    `<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'
  ];

  let body = '%PDF-1.4\n';
  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(Buffer.byteLength(body, 'utf-8'));
    body += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const startXref = Buffer.byteLength(body, 'utf-8');
  body += 'xref\n';
  body += `0 ${objects.length + 1}\n`;
  body += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    const off = offsets[i].toString().padStart(10, '0');
    body += `${off} 00000 n \n`;
  }
  body += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF`;

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, body, 'utf-8');
  console.log(`Generated ${outputPath} (${Buffer.byteLength(body, 'utf-8')} bytes)`);
}

createPdf('public/resume.pdf');


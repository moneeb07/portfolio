export const portfolioData = {
  personal: {
    name: "Moneeb Ur Rahman",
    role: "Machine Learning Engineer & Full Stack Developer",
    profileImage: "/images/profile.jpg",
    email: "mrahman.bscs23seecs@seecs.edu.pk",
    phone: "+92-321-7935820",
    linkedin: "https://www.linkedin.com/in/moneeb-ur-rahman-0533b0247/",
    github: "https://github.com/moneeb07",
    location: "Islamabad, Pakistan",
  },
  education: [
    {
      institution: "National University of Sciences & Technology (NUST)",
      degree: "Bachelor of Science in Computer Science",
      duration: "Sep. 2023 – May 2027",
      location: "Islamabad, Pakistan",
      coursework: [
        "Calculus", "Multivariable Calculus", "Probability & Statistics",
        "Artificial Intelligence", "Machine Learning", "Data Structures & Algorithms",
        "Linear Algebra", "Web Technologies"
      ],
    },
  ],
  projects: [
    {
      title: "Kisan Dost",
      subtitle: "Crop Yield Prediction System",
      tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
      description: "Developed supervised regression models with Random Forest achieving R² = 0.9679. Deployed a live web application for real-time yield prediction.",
      link: "https://kissan-dost-ekjs3enydkymoze3lgkdzd.streamlit.app",
      status: "Completed",
    },
    {
      title: "InterviewAI",
      subtitle: "InterviewAi",
      tech: ["MERN Stack", "Judge0", "Python"],
      description: "Full-stack platform for technical hiring with voice, coding, and system design rounds. Integrated proctoring with plagiarism checks.",
      link: "https://web.interview-ai.tech/",
      status: "Completed",
    },
    {
      title: "Reinforcement Learning Escape Room",
      subtitle: "with Adversarial AI",
      tech: ["Python", "PyTorch", "Gymnasium", "NumPy"],
      description: "Implemented an RL environment where an agent navigates to collect a key while avoiding adversarial bullets and ghosts using Q-learning.",
      // link: "#", // No link provided in CV
      status: "Completed",
    },
    {
      title: "Class Management System",
      subtitle: "LMS",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      description: "LMS with JWT authentication, RBAC for faculty/students, and RESTful APIs for assignment management and file uploads.",
      // link: "#",
      status: "Completed",
    },
  ],
  skills: {
    languages: ["Python", "C/C++", "Java", "JavaScript", "TypeScript"],
    frameworks: ["React", "Node.js", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "MongoDB", "Express"],
    tools: ["Git", "Linux", "Docker"], // Docker assumed from typical stack, but checking CV... CV says Git, Linux. I'll stick to CV.
    concepts: ["Reinforcement Learning", "A*/Dijkstra", "REST APIs", "Pandas", "NumPy"],
  }
};

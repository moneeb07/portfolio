import { image } from "framer-motion/client";

export const projects = [
  {
    title: "InterviewAI",
    // category : "web development + GenAI",
    subtitle: "InterviewAi",
    image: "/images/interviewAi.png",
    tech: ["MERN Stack", "Judge0", "Python"],
    description: "Full-stack platform for technical hiring with voice, coding, and system design rounds. Integrated proctoring with plagiarism checks.",
    linkDemo: "https://interview-ai-client-v1.vercel.app/",
    linkGithub: "https://github.com/moneeb07/InterviewAICombined",
    status: "Completed",
  },
  {
    title: "Askify",
    // category : "web development + GenAI",
    subtitle: "Askify",
    image: "/images/askify.png",
    tech: [ "Fast-Api" , "LangChain" ,"Pinecone","Next.js","Supabase"],
    description: "This is a full-stack document intelligence platform. Users upload a document and it is automatically chunked, embedded, and indexed into Pinecone."+ 
                  "From that point, users can ask natural language questions and receive real-time answers streamed token by token via Server-Sent Events."+
                 "Every answer includes the exact source chunks from the document it was derived from, complete with relevance scores, so users can verify what the AI used to generate the response." + 
                 " This is not a wrapper around a generic chatbot. It is a purpose-built RAG system with a transparent and auditable reasoning chain.",
    linkDemo: "https://askify-v1.vercel.app/",
    linkGithub: "https://github.com/moneeb07/Askify",
    status: "Completed",
  },
  {
    title: "Spm-Agent",
    // category : "web development + GenAI",
    subtitle: "Spm-Agent",
    image: "/images/spm-agent.png",
    tech: ["Fast-Api", "Python", "LangChain", "Aws-Fargate", "Docker", "Next-js", "Supabase"],
    description: "Built an AI-powered platform that converts project ideas and deadlines into structured, actionable roadmaps. Enables users to refine plans through conversational AI and receive automated email reminders for deadlines to stay productive and on track.",
    linkDemo: "https://spm-agent.vercel.app/",
    linkGithub: "https://github.com/moneeb07/spm_agent",
    status: "In Progress",
  },
  {
    title: "Kisan Dost",
    // category : "Ai/Ml",
    subtitle: "Crop Yield Prediction System",
    image: "/images/kissan-dost.png",
    tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
    description: "Developed supervised regression models with Random Forest achieving R² = 0.9679. Deployed a live web application for real-time yield prediction.",
    linkDemo: "https://kissan-dost-ekjs3enydkymoze3lgkdzd.streamlit.app/",
    linkGithub: "https://github.com/moneeb07/Kissan-Dost",
    status: "Completed",
  },

  {
    title: "Reinforcement Learning Escape Room",
    // category : "Ai/Ml",
    tech: ["Python", "PyTorch", "Gymnasium", "NumPy"],
    description: "Implemented an RL environment where an agent navigates to collect a key while avoiding adversarial bullets and ghosts using Q-learning.",
    linkDemo: "",
    linkGithub: "https://github.com/moneeb07/Escape-game-rl",
    image: "/images/escape-room.png",
    status: "Completed",
  },
  {
    title: "Class Management System",
    subtitle: "LMS",
    // category : "web development",
    image: "/images/cms.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "LMS with JWT authentication, RBAC for faculty/students, and RESTful APIs for assignment management and file uploads.",
    linkDemo: "https://class-management-with-chat.vercel.app/",
    linkGithub: "https://github.com/moneeb07/Class-Management-with-Chat",
    status: "Completed",
  },
];
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - July 2023",
    role: "Software Engineering Intern",
    company: "Razorpay.",
    description: `Developed and implemented a Wallet Service Management Module for a web application, enabling secure and efficient management of user wallets. Built RESTful APIs to allow users to create wallets, ensuring smooth integration with front-end components. Engineered wallet functionalities such as adding funds, withdrawing money, and balance management, adhering to best practices for transaction safety and reliability. Integrated a transaction history feature, allowing users to track all deposits, withdrawals, and transfers with detailed time-stamped records.`,
    technologies: ["Golang", "MySql", "Razorpay API","Git & Github"],
  }
];

export const PROJECTS = [
  {
    title: "Medico",
    image: project1,
    description:
      "A fully functional patient-doctor appointment booking  application allowing patients to directly book doctors.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    url:'https://fastidious-donut-c2efa3.netlify.app/',
  },
  {
    title: "Complaint center",
    image: project2,
    description:
      "A College Problem-Solving Platform to address 10+ common issues faced by students, such as internet, sanitation, mess, and electricity concerns",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Context API"],
    url:'',
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion",],
    url:'',
  },
  
];

export const CONTACT = {
  address: "Pupri , India ",
  phoneNo: "+91 9358550486 ",
  email: "md.tauhid.iit@gmail.com",
};

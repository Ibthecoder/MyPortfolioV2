import {
  htmllogo,
  bootstraplogo,
  tailwindcsslogo,
  springbootlogo,
  javalogo,
  reactlogo,
  csslogo,
  jslogo,
  gitlogo,
  githublogo,
  mysqllogo,
  oladipupoibrahimv1,
  jeedProject,
  goharabbasproject,
} from "../assets/images/image";

export const MenuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Project", path: "project" },
  { name: "Contact", path: "contact" },
];

export const SkillsItems = [
  {
    skillsImg: htmllogo,
    skilsTittl: "HTML",
    skillsWriteup:
      "I create clean, semantic, and accessible web pages, ensuring a strong foundation for seamless user experiences.",
  },

  {
    skillsImg: csslogo,
    skilsTittl: "CSS",
    skillsWriteup:
      "I design visually appealing and responsive web pages, ensuring a seamless user experience across all devices.",
  },

  {
    skillsImg: jslogo,
    skilsTittl: "JAVASCRIPT",
    skillsWriteup:
      "I create interactive and dynamic web pages using JavaScript, enhancing user engagement and functionality.",
  },

  {
    skillsImg: javalogo,
    skilsTittl: "JAVA",
    skillsWriteup:
      "I develop robust and scalable applications using Java, ensuring efficient and secure solutions.",
  },

  {
    skillsImg: bootstraplogo,
    skilsTittl: "BOOTSTRAP",
    skillsWriteup:
      "I use Bootstrap to create responsive and mobile-friendly web pages, ensuring a seamless user experience across all devices.",
  },

  {
    skillsImg: tailwindcsslogo,
    skilsTittl: "TAILWINDCSS",
    skillsWriteup:
      "I use Tailwind CSS to create responsive and mobile-friendly web pages, ensuring a seamless user experience across all devices.",
  },

  {
    skillsImg: reactlogo,
    skilsTittl: "REACT",
    skillsWriteup:
      "I use React to create responsive and mobile-friendly web pages, ensuring a seamless user experience across all devices.",
  },

  {
    skillsImg: springbootlogo,
    skilsTittl: "SPRINGBOOT",
    skillsWriteup:
      "I use Spring Boot to develop robust and efficient back-end systems. My experience includes building RESTful APIs, integrating databases, and ensuring secure and scalable server-side solutions.",
  },

  {
    skillsImg: gitlogo,
    skilsTittl: "GIT",
  },

  {
    skillsImg: githublogo,
    skilsTittl: "GITHUB",
  },

  {
    skillsImg: mysqllogo,
    skilsTittl: "MYSQL",
  },
];

export const myProjectList = [
  {
    projectName: " Gohar Abbas Technical Services Company ",
    projectLink: "https://gohartechservices.com/",
    skillsForTheProject: "TailWindcss,React",
    whatTheProjectSolve:
      "A responsive website built for a Dubai-based technical services company offering AC installation, painting, electrical work, and more for residential and commercial spaces",
    image: goharabbasproject,
    projectGithub: "https://github.com/Ibthecoder/Hotel-project",
  },

  {
    projectName: "Azure Lodge",
    projectLink: "https://azure-lodge.vercel.app/",
    skillsForTheProject: "HTML,CSS,JAVASCRIPT",
    whatTheProjectSolve:
      "Azure Lodge is a user-friendly platform that simplifies lodging by providing clear details, quality images, and a seamless booking experience for travelers",
    image: "https://res.cloudinary.com/ddd6uszk3/image/upload/v1759561604/Azure-lodge-project_o9fvrs.png",
    projectGithub: "https://github.com/Ibthecoder/Hotel-project",
  },

  {
    projectName: "Jeed Logistics",
    projectLink: "https://www.jeed-logistics.com/",
    skillsForTheProject: "TailWindcss,React",
    whatTheProjectSolve:
      "A Responsive website built for a client to bring their vision to life a consulting firm specializing in fleet and real estate management.",
    image: jeedProject,
  },

  {
    projectName: "oladipupo ibrahim V1",
    projectLink: "https://oladipupoibrahim.vercel.app/",
    skillsForTheProject: "HTML,CSS,JAVASCRIPT",
    image: oladipupoibrahimv1,
  },
];

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "James Nguyen",
  description: "James Nguyen's Portfolio",
  og: {
    title: "James's Portfolio",
    type: "website",
    url: "http://jamesnguyen.tech/",
  },
};

//Home Page
const greeting = {
  title: "James Nguyen",
  logo_name: "James Nguyen",
  subTitle:
    "Hello! I'm a former Software Engineer at Varian and a Computer Science Major graduating in December 2021. Check out my experience and skills below!",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jamessnguyenn",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/james-h-nguyen/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nguyen.james615@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "San Jose State University",
      subtitle: "B.S Computer Science, 3.91 GPA",
      logo_path: "sjsu_logo.jpg",
      alt_name: "SJSU Logo",
      duration: "December 2021",
      descriptions: [
        "Organizations: Society of Asian Scientists & Engineers, Vietnamese Student Association, Circle K",
        "Achievements: Dean's Scholar, President's Scholar",
      ],
      organizations: "",
      website_link: "https://www.sjsu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Tourtellini",
      subtitle: "Android Application to find your way through the community",
      logo_path: "tourtellini-logo.jpg",
      certificate_link: "https://devpost.com/software/project-punctual",
      color_code: "#000000",
    },
    {
      title: "Edufy.space",
      subtitle: "A productivity platform to edge your education",
      logo_path: "edufy-logo.jpg",
      certificate_link: "https://devpost.com/software/eudfy-education-for-you",
      color_code: "#437fc7",
    },
    {
      title: "Spotify Party Player",
      subtitle: "Music Queue utilizing the Spotify API to party with...",
      logo_path: "spotify-logo.png",
      certificate_link: "https://github.com/jamessnguyenn/Spotify-Party-Player",
      color_code: "#0C9D5899",
    },
    {
      title: "Success Tracker",
      subtitle: "Resume tracker to track your way to success",
      logo_path: "success-tracker.jpg",
      certificate_link: "https://github.com/jamessnguyenn/Success-Tracker",
      color_code: "#EEFBFB",
    },

    {
      title: "Stock Case",
      subtitle: "Android Application to view and store stocks in your case",
      logo_path: "stock-case.png",
      certificate_link: "https://github.com/jamessnguyenn/Stock-Case",
      color_code: "#AAAAAA",
    },
    {
      title: "Tic Tac Toe Bot",
      subtitle:
        "Play head to head with a Tic Tac Toe Bot and view past game histories",
      logo_path: "tic-tac-toe.jpg",
      certificate_link: "https://github.com/jamessnguyenn/Tic-Tac-Toe-Bot",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiences",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Varian Medical Systems",
          company_url: "https://www.varian.com/",
          logo_path: "varian_logo.jpg",
          duration: "MAY 2021 - AUG 2021",
          location: "Palo Alto, California",
          description:
            "•	Developed and executed Python automation test scripts for the TrueBeam radiotherapy treatment application which reduced 86+ hours of manual testing per release cycle/n•	Analyzed and verified 20+ control safety requirements through UI automation of end-to-end workflows and test plans devised using Quality Center/n•	Collaborated with team members by contributing to daily SCRUM meetings, participating in code reviews, and utilizing Azure DevOps Server for version control/n•	Resolved bugs and contributed code to the internal testing framework that is shared by multiple teams",
          color: "#0879bf",
        },
        {
          title: "Software Quality Assurance Intern",
          company: "NETGEAR",
          company_url: "https://www.netgear.com/",
          logo_path: "netgear_logo.png",
          duration: "NOV 2020 - MAY 2021",
          location: "San Jose, California",
          description:
            "• Perform end to end testing on Nighthawk and Orbi mobile applications by verifying integration of cloud account features, connection of routers, and implementation of software subscription services /n • Design and execute test plans to identify 50+ bugs and ensure new features are aligning with the acceptance criteria before application releases /n • Coordinate with product development engineers to diagnose product failures by practicing Agile lifecycle methodologies and managing SQA tickets through JIRA/n• Collaborate with the Software QA team by delivering daily status updates and training new interns",
          color: "#0879bf",
        },
        {
          title: "Industrial Chair",
          company:
            "Society of Asian Scientist and Engineers (SASE) - San Jose University Chapter",
          company_url: "https://sase-sjsu.weebly.com/",
          logo_path: "sase_logo.jpg",
          duration: "AUG 2020 - MAY 2021",
          location: "San Jose, California",
          description:
            "• Collaborate with various companies to devise networking opportunities for 30+ members through events such as resume workshops and career panels/n• Increase membership retention by 300% through the improvement of the mentorship process and integration of a “kick-starter” program that allow members to participate in a semester-long technical project",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect!",
    profile_image_path: "lets-chat.svg",
    description:
      "Thanks for getting to know me! I love meeting new people so feel free to reach out about anything.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

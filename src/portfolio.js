/* Change this file to get your personal Porfolio */

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
  seo,
  greeting,
  socialMediaLinks,
  degrees,
  certifications,
  experience,
  contactPageData,
};

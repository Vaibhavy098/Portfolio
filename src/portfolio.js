/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vaibhav Yadav",
  title: "Hi all, I'm Vaibhav",
  subTitle: emoji(
    "B.Tech CSE student passionate about software development and problem-solving."
  ),
  resumeLink:
    "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vaibhavy098",
  linkedin: "https://www.linkedin.com/in/vaibhavyadav098/",
  gmail: "vaibhavyadav0988@gmail.com",
  medium: "https://medium.com/@vaibhavyadav0988",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech-enthusiastic developer exploring software engineering, web development, and real-world problem solving.",
  skills: [
    emoji(
      "⚡ Strong foundation in frontend development using HTML5, CSS3, JavaScript, and responsive design principles"
    ),
    emoji("⚡ Solid understanding of Data Structures and Algorithms with hands-on problem solving in C++"),
    emoji(
      "⚡ Familiar with object-oriented programming concepts and competitive coding practices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pranveer Singh Institute of Technology",
      logo: require("./assets/images/psitLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering with CGPA - 8.48",
      duration: "December 2022 - July 2026",
      desc: "Undergraduate student with a strong focus on software development, data structures, and problem-solving.",
      descBullets: [
        "Studying core computer science subjects such as Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks",
        "Actively building academic and personal projects to apply theoretical concepts in real-world scenarios",
        "Participated in coding practice and technical skill development through online platforms and coursework"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development (HTML, CSS, JavaScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming & DSA (C++, Python)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Development (Node.js, Express.js)",
      progressPercentage: "60%"
    },
    {
      Stack: "Version Control & Tools (Git, GitHub, VS Code)",
      progressPercentage: "70%"
    }
  ],
// Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  displayCodersrank: true 
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Science & Visualization Intern",
      company: "Infosys Springboard",
      companylogo: require("./assets/images/infosyslogo.avif"),
      date: "2025",
      desc: "Completed a structured internship focused on data analysis, visualization, and problem-solving using programming tools.",
      descBullets: [
        "Worked with Python and PowerBi for data cleaning, analysis, and basic data processing tasks",
        "Created data visualizations to extract insights and present findings clearly",
        "Applied logical thinking and problem-solving techniques to real-world datasets",
        "Strengthened programming fundamentals and understanding of data-driven applications",
        "Gained experience working with structured learning modules and project-based tasks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
const bigProjects = {
  title: "Projects",
  subtitle: "Academic and personal projects focused on software development and applied problem solving",
  projects: [
    {
      image: require("./assets/images/asdLogo.jpg"), // add a simple AI/ML icon
      projectName: "AI-Based Autism Spectrum Disorder (ASD) Detection",
      projectDesc:
        "An academic project focused on detecting Autism Spectrum Disorder using machine learning and deep learning techniques on video-based datasets. The project involved data preprocessing, feature extraction, and model evaluation.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Vaibhavy098/autism-spectrum-disorder-detection"
        }
      ]
    },
    {
      image: require("./assets/images/chatLogo.avif"),
      projectName: "Real-Time Chat Application",
      projectDesc:
        "A real-time chat application developed using Node.js and Express.js, enabling instant messaging with basic user interaction and server-side message handling.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Vaibhavy098/Convox---A-real-time-chat-application"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications and milestones that reflect continuous learning and consistent problem-solving",

  achievementsCards: [
    {
      title: "Full Stack Web Development Certification",
      subtitle:
        "Completed a comprehensive full stack web development course covering frontend, backend, and basic deployment concepts.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Vaibhavy098/Certifications/blob/main/WebDev-Certificate.pdf" // add Udemy certificate link if available
        }
      ]
    },
    {
      title: "LeetCode 500 Days Badge",
      subtitle:
        "Earned the 500 Days Badge on LeetCode by solving coding problems consistently and strengthening data structures and algorithms skills.",
      image: require("./assets/images/leetcodeLogo.webp"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/Vaibhavyadav098/" // replace with your profile link
        }
      ]
    }
  ],
  display: true
};


// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing what I learn while exploring computer science fundamentals and software engineering concepts",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@vaibhavyadav0988/what-you-must-know-before-learning-system-design-ac35fb6a60dc",
      title: "Prerequisite Knowledge Before Learning System Design",
      description:
        "A beginner-friendly guide explaining the foundational concepts and skills required before diving into system design, including data structures, databases, networking, and operating systems."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9151544696",
  email_address: "vaibhavyadav0988@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

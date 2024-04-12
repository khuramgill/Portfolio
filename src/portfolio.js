



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
  username: "Khuram Iqbal",
  title: "Hi all, I'm Khuram",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and desktop applications with C# / C++ / Python / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1c7cv6Z5MWOnqXBTQ34GVT9PxI2GV3lrT/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khuramgill",
  linkedin: "https://www.linkedin.com/in/khuram-iqbal",
  gmail: "khuramiqbalofficial@gmail.com",
  gitlab: "https://gitlab.com/khuramgill",
  medium: "https://medium.com/@khuramiqbalofficial",
  leetcode: "https://leetcode.com/khuramgill/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Desktop/Web DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and Desktop applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/uetlogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "December 2022 - Present",
      desc: "Teaching Assistant @UET,Lhr Sep 2023-Present.",
      descBullets: [
        "Guided and supported students as a Teaching Assistant at UET Lahore, facilitating an interactive learning environment.",
        "Assisted in lesson planning, student engagement, and addressing academic queries to enhance the educational experience."
      ]
    },
    {
      schoolName: "GOVERNMENT ISLAMIA GRADUATE COLLEGE CIVIL LINES, LAHORE",
      logo: require("./assets/images/giccl.png"),
      subHeader: "Intermediate",
      duration: "September 2020 - July 2022",
      desc: "Ranked top 10% in the program.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "87%"
    },
    {
      Stack: "Programming",
      progressPercentage: "74%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Youth Lead @ All Nations Bible Church Lahore",
      subtitle:
        "Expertly organize diverse religious events, fostering community engagement and spiritual growth.",
      image: require("./assets/images/youth.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1c7cv6Z5MWOnqXBTQ34GVT9PxI2GV3lrT/view"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1c7cv6Z5MWOnqXBTQ34GVT9PxI2GV3lrT/view"
        },
      ]
    },
    {
      title: "Softec'23",
      subtitle:
        "Top 15 rank at Softec’23, competing against 200+ teams.",
      image: require("./assets/images/softec.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Check Out on LinkedIn",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Other Certifications",
      subtitle: "Completed Certifcation from Various Platforms like Hackerrank, Udemy, etc.",
      image: require("./assets/images/social.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.linkedin.com/in/khuram-iqbal/details/certifications/"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@khuramiqbalofficial/the-impact-of-daily-leetcode-practice-on-personal-development-e98738c6379f",
      title: "The Impact of Daily LeetCode Practice on Personal Development.",
      description:
        "In the realm of programming and software development, the importance of continuous learning and skill enhancement cannot be overstated. One popular avenue for honing coding skills is engaging in daily LeetCode practice. In this blog post, we explore the significance of daily LeetCode challenges and how they contribute to personal development."
    },
    {
      url: "https://medium.com/@khuramiqbalofficial/beyond-limits-the-art-and-science-of-scalability-in-modern-technology-bd86af4760ab",
      title: "Beyond Limits: The Art and Science of Scalability in Modern Technology",
      description:
        "Scalability refers to the ability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Coming Soon",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-311-4592532",
  email_address: "khuramiqbalofficial@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};

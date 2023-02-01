import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  // MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/zion.jpg';
import porfolioImage1 from '../images/portfolio/rss.jpg';
import porfolioImage2 from '../images/portfolio/fish_bot.jpg';
import porfolioImage3 from '../images/portfolio/led_long_photo.jpg';
import porfolioImage4 from '../images/portfolio/broomba.jpg';
import porfolioImage5 from '../images/portfolio/tiger.jpg';
import porfolioImage6 from '../images/portfolio/shark_sensor.jpg';
import porfolioImage7 from '../images/portfolio/led_sphere.png';
import porfolioImage8 from '../images/portfolio/led_s2.jpg';
import porfolioImage9 from '../images/portfolio/first.jpg';
import porfolioImage10 from '../images/portfolio/led2.jpg';
import porfolioImage11 from '../images/portfolio/ThreeGloveCrop.jpg';
import profilepic from '../images/profile.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Irene Terpstra',
  description: "Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Irene Terpstra`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">senoir at MIT</strong> studying <strong className="text-stone-100">Electrical Engineering and Computer Science</strong>. 
        I am interested in <strong className="text-stone-100">robotics</strong> and 
        using <strong className="text-stone-100">machine learning</strong> for <strong className="text-stone-100">autonomous vehicle control.</strong> 
        
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I love making fun personal projects, climbing, dancing, and photography.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/Irene Terpstra Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I am experienced in designing and programming autonomous vehicles, developing machine learning projects, and teaching STEM.
  I am excited to be involved with projects that let me explore using machine learning for robotics systems and 
  autonomous vehicle control.

  In my past projects, I have worked on developing automatic sensor calibration for an autonomous marine vessel 
  as well as developed path planning algorithms for autonomous vessels in dynamic environments. I also have a lot 
  of experience with reinforcement learning and am currently working on a project at MIT's Seethapathi Motor Control 
  Group developing a reinforcement learning algorithm to model locomotor adaption in novel walking environments. 
  Throughout my work in implementing autonomy, I have seen the problems that arise when deploying the algorithms 
  in the real world. As a result, I am very interested in researching how to create more robust and 
  interpretable autonomy pipelines.`,
  
  
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Interests', text: 'Climbing, Photography, Dance', Icon: SparklesIcon},
    {label: 'Education', text: 'MIT', Icon: AcademicCapIcon},
    // {label: 'Skills', text: 'Python, C++, R, Java, React, JavaScript, ROS2, MOOS-IvP, Linux, Arduino, Git, Machine Learning', Icon: FlagIcon},

    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

// /**
//  * Skills section
//  */

export const skills: SkillGroup[] = [
  {
    name: '',
    skills: [
      {
        name: 'Python, C++, R, Java, React, JavaScript, ROS2, MOOS-IvP, Linux, Arduino, Git, Machine Learning',
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Robotics Science and Systems',
    description: '',
    url: 'https://rss2022-15.github.io/website/labs/',
    image: porfolioImage1,
  },
  {
    title: 'Robotic Fish',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage2,
  },
  {
    title: 'LED Long Exposure Photography',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage3,
  },
  {
    title: 'Broomba',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage4,
  },
  {
    title: 'Digital Art',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage5,
  },
  {
    title: 'Electrochemical Sensor',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage6,
  },
  {
    title: 'LED Sphere',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage7,
  },
  {
    title: 'LED Sphere',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage8,
  },
  {
    title: 'FIRST World Championship',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage9,
  },
  {
    title: 'Double Pendulum',
    description: 'Long Exposure Photography.',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage10,
  },
  {
    title: 'LED Glove',
    description: '',
    url: 'https://photos.app.goo.gl/xbDPpeeBZeayaEhh8',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2023',
    location: 'Massachusetts Institute of Technology',
    title: 'Candidate for Bachelor of Science in Electrical Engineering and Computer Science',
    content: <p>Relevant Coursework: Quantitative Methods for Natural Language Processing, 
      Computational Photography, Robotics Science and Systems, 
      Artificial Intelligence, Unmanned Marine Vehicle Autonomy, Signal Processing, 
      Introduction to Machine Learning, Introduction to Algorithms</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'MIT Seethapathi Motor Control Group',
    title: 'Undergraduate Research Assistant',
    content: (
      <p>
        Developing reinforcement learning algorithm to model locomotor adaption in novel walking environments.
      </p>
    ),
  },
  {
    date: 'June 2022 - August 2022',
    location: 'Sea Machines Robotics',
    title: 'Autonomy Intern',
    content: (
      <p>
        Wrote a collision detection algorithm using C++ in ROS2. The algorithm performed significantly faster than its
        predecessor and was designed to be modular. 
        Implemented an RRT* path planner that could be incorporated into the existing autonomy stack.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ireneterpstra'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/irene-terpstra-888b631b4/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

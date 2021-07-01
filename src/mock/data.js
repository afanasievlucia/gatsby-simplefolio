import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Lucia',
  subtitle: 'I am the Unknown Developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_8437.jpg',
  paragraphOne: 'I am a beginner web developer.',
  paragraphTwo:
    'I am currently taking a web development course, which helps me to progress in my knowledge and i hope to start a career in the IT field.',
  paragraphThree:
    'Web development is a vast field, which always challenges me to look for solutions and move forward in my knowledge.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Chloe-project.jpg',
    title: 'Chloe - project',
    info: 'Web site "Chloe" is a project that allowed strengthening knowledges of HTML and CSS operation.',
    info2: 'This project is made using the asked parameters from Figma.',
    url: '',
    repo: 'https://github.com/afanasievlucia/Chloe-project.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Erickson-project4.jpg',
    title: 'Erickson - project',
    info: 'Erickson web site is a project to improve the knowledges of operation with bootstrap.',
    info2:
      'This project assumes that i am able to reproduce the basic HTML and CSS with asked parameters from Figma prototype web-page.',
    url: '',
    repo: 'https://github.com/afanasievlucia/Erickson-project.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tea-cozy-project.jpg',
    title: 'Tea Cozy - project',
    info: 'In this project, i created a fictional tea shop website on my own computer using the SCSS.',
    info2:
      'This project assumes that i am able to reproduce the basic HTML and CSS with asked parameters. Here i used and what i have learned on flexbox topic.',
    url: '',
    repo: 'https://github.com/afanasievlucia/Refactor-Tea-Cozy.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wanderlust-project.jpg',
    title: 'Wanderlust - project',
    info: 'In this project, i used fetch, async, and await to request information from an external API and to create a travel website.',
    info2: '',
    url: '',
    repo: 'https://github.com/afanasievlucia/Wanderlust-weathermap.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Github-page',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    /* {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/afanasievlucia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const myProjects = [
    {
      title: 'Todo-Application',
      host:true,
      desc: 'I have developed a robust Todo application leveraging the power of React.js and Node.js. This full-stack solutionseamlessly combines a dynamic and intuitive front-end, built with React, with a scalable and efficientback-end powered by Node.js.',
      subdesc:
        ' The application allows users to effortlessly manage their tasks, offering featuressuch as task creation, deletion, and status updates. The use of React ensures a responsive and interactive userinterface, providing a smooth and engaging experience',
      href: 'https://to-doapp-front-end.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/express.png',
        },
      ],
    },
    {
      title: 'LetsTalk - Real-Time Chart application',
      host:false,
      desc: 'reated a dynamic real-time chat application employing Socket.IO for efficient bidirectional communicationbetween the server and clients. Implemented a responsive and intuitive user interface using React alongside Chakra UI components, ensuring a seamless and visually appealing user experience',
      subdesc:
      "face using React alongside Chakra UI components, ensuring a seamless and visually appealing user experience.Utilized Express.js for the backend server, Incorporated features such asreal-time messaging, user authentication, and message persistence, enhancing user engagement and satisfaction.",
      href: 'https://chat-app-clint.vercel.app/chart',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: 'js.png',
        },
        {
          id: 4,
          name: 'Mongo DB',
          path: 'mongodb.png',
        },
      ],
    },
    {
      title: ' Course HUB - A learning platform',
      host:false,
      desc: 'Developed an online learning platform enabling students to purchase and self-study courses. Utilized Node.js and Express for the backend, React with React Router for the frontend, Redux for state management',
      subdesc:
        'And integrated Tailwind CSS and Chakra UI for responsive design,integrated Tailwind CSS and Chakra UI for responsive design,Utilized Node.js and Express for the backend, React with React Router for the frontend, Redux for state management',
      href: 'https://cource-hub-clint.vercel.app',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'postger',
          path: '/postger.png',
        },
        {
          id: 4,
          name: 'express',
          path: '/express.png',
        },
      ],
    },
    {
      title: ' Movie streaming application',
      host:false,
      desc: 'Experienced React.js developer with a passion for creating immersive user experiences. Proficient in utilizing third-party APIs, with specific expertise in integrating TMDB (The Movie Database) API for building movie streaming applications',
      subdesc:
        'Proven ability to work collaboratively in agile environments to deliverhigh-quality, scalable solutions. Excited to leverage skills and knowledge to contribute to innovative projects in thetech industry.',
      href: 'https://github.com/pRakesh15/youtube_clone',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/js.png',
        },
        {
          id: 4,
          name: 'mui',
          path: '/mui.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
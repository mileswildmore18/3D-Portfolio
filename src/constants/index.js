// Add products to the Navbar
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];
// Add client reviews
export const clientReviews = [
    {
        id: 1,
        name: 'Nicholas Cawein',
        position: 'CEO at Cloud Nexus IT Solution',
        img: 'assets/Nicholas.jpg',
        review:
            'Working with Miles was a fantastic experience. He was a pleasure to work with. Added content for our website to make it more user-friendly. Has potential to grow. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Maximo Del Valle',
        position: 'Senior Web Developer at Cloud Nexus IT Solution',
        img: 'assets/Maximo.jpg',
        review:
            'Miles is a hard worker. He’s a true professional! Fantastic to work with.',
    }
];

// Add projects
export const myProjects = [
    {
        title: 'Apple',
        desc: 'This is the Apple website showing the features of an Apple iPhone and new products out. Built with React, Tailwind, Next.js and Framer Motion.',
        subdesc: 'https://animationmiles.netlify.app/',
        href: 'https://animationmiles.netlify.app/',
        texture: '/textures/project/smallHero.mp4',
        logo: '/assets/apple.png',
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
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Brainwave',
        desc: 'This is a website where you can explore the possibilities of AI Chatting as well as seeing some amazing animation of the website. Built with React, Tailwind, Next.js and Framer Motion.',
        subdesc: 'https://milesbrainwave.netlify.app/',
        href: 'https://milesbrainwave.netlify.app/',
        texture: '/textures/project/frame.mp4',
        logo: '/assets/ai.png',
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
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Xora',
        desc: 'A new video editing software that is easy to use, quick to learn, and very powerful to edit videos for AI. Work smarter, and not harder by bringing your productivity to the next level!',
        subdesc:
            'https://xoramiles.netlify.app/',
        href: 'https://xoramiles.netlify.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/xora.svg',
        logoStyle: {
            backgroundColor: '#000000',
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
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    // {
    //     title: 'Horizon - Online Banking Platform',
    //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //     subdesc:
    //         'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //     texture: '/textures/project/project4.mp4',
    //     logo: '/assets/project-logo4.png',
    //     logoStyle: {
    //         backgroundColor: '#0E1F38',
    //         border: '0.2px solid #0E2D58',
    //         boxShadow: '0px 0px 60px 0px #2F67B64D',
    //     },
    //     spotlight: '/assets/spotlight4.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

// Calculate sizes of the 3D objects
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        // Add sizes
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
// Add work experience
export const workExperiences = [

    {
        id: 1,
        name: 'Independent',
        pos: 'FrontEnd Web Developer',
        duration: 'June 2024 - present',
        title: "Building websites from scratch to showcase my experience and show that I have potential to grow after graduating from UCF Coding Bootcamp",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'Cloud Nexus IT Solution',
        pos: 'Entry Front End Web Developer Internship',
        duration: 'August 2024 - January 2025',
        title: "Building a new website off the ground based on the client's requirements and design specifications. This involved creating the website's structure, layout, and content, ensuring that it met the client's needs and met the client's requirements.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
];
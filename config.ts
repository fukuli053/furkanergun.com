import moment from "moment";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiGraphql,
    SiSwift,
    SiNodedotjs, SiLaravel, SiAmazonaws, SiSymfony, SiKubernetes, SiDocker, SiRedis
} from 'react-icons/si';

const meta = {
    title: "Furkan Ergün",
    description: "Full Stack developer with experience in Mobile, Backend, Frontend and DevOps development",
    url: "https://furkanergun.com",
    author: {
        email: "ergunfurkan@outlook.com.tr",
        name: "Furkan Ergün",
    },
    social: {
        instagram: "https://instagram.com/_furkanergun",
        twitter: "https://twitter.com/fuergun",
        github: "https://github.com/fukuli053",
        youtube: "https://www.youtube.com/channel/UC7503DjTOmyai-043n1jXOA",
    },
    experiences: [
        {
            company: "Trexo Innovation",
            companyUrl: "https://www.trexoin.com/",
            companyLogoUrl: "https://pbs.twimg.com/profile_images/809339708870377472/L7fmXjXT_400x400.jpg",
            positions: [
                {
                    title: "Mobile Developer",
                    dates: {
                        startDate: moment("20 September 2021 00:00 +1000"),
                        endDate: null,
                    },
                    description: [
                        `Research and recommend new trends, mobile tools, and applications for development of iOS and Android whilst ensuring that projects are delivered on-time and within budget.`,
                        `Successfully developed and delivered project using agile practices.`,
                        `Deployed innovative technologies by using BLE (Bluetooth Low Energy), React Native, Swift and relevant modern testing approach to mobile solutions.`,
                        `Synchronization between mobile application and devices is provided via bluetooth.`,
                        `Developed bluetooth com library to enable communication between mobile apps and the device.`,
                        'Tested and deployed with TestFlight',
                        'Deliver technical results to meet business objectives in a flexible, collaborative, and rapidly changing environment.'
                    ],
                }
            ],

        },
        {
            company: "Acegen Software",
            companyUrl: "https://www.acegenyazilim.com/",
            companyLogoUrl: "https://media-exp2.licdn.com/dms/image/C4D0BAQGXOR2YylHuxA/company-logo_100_100/0/1597928250343?e=1663804800&v=beta&t=eFtFACG_nHxeKOVz8k8-QAubIZhonVMMMEPkdARpnhw",
            positions: [
                {
                    title: "Full Stack Web Developer",
                    dates: {
                        startDate: moment("20 September 2021 00:00 +1000"),
                        endDate: moment("20 May 2022 00:00 +1000"),
                    },
                    description: [
                        `Here at Acegen Software, we specialize in building web-based and mobile apps solutions. We also provide software consultancy services to various companies.`,
                        `Developed custom web-based and mobile applications for Acegen Software.`,
                        `Analyzed work-flow of the company and developed online task management software.`,
                        `ERP systems have been developed for the customers.`,
                        `The existing projects of the clients for whom consultancy services were provided were subjected to security updates, their errors were corrected and improvements were made.`,
                        'What we used: AWS, Docker, Javascript, PHP, Laravel, MySQL, Swift, React Native, React, jQuery.',
                    ],
                }
            ],

        },
        {
            company: "Baykar Technologies",
            companyUrl: "https://baykartech.com/en/",
            companyLogoUrl: "https://www.yerlituket.com/images/brand/baykar.png",
            positions: [
                {
                    title: "Image Processing and Machine Interaction Intern",
                    dates: {
                        startDate: moment("2 June 2021 00:00 +1000"),
                        endDate: moment("30 September 2021 00:00 +1000"),
                    },
                    description: [
                        `Our development and people-focused culture plays a leading role in the success of Baykar's defense technologies, which are included in the inventory of the Turkish Armed Forces and exported abroad. In our Baykar R & D Center registered by the Ministry of Industry and Technology, we focus on designing advanced transformative technologies for the aviation arena.`,
                        `Developed and tested the Unmanned Aerial Vehicles interface using C# and WPF.`,
                        `Teknofest UAV image analysis software has been developed and tested with OpenCV technology, using object tracking with C++ and developed interface with C# WPF.`,
                        `Using C#, WPF and FFmpeg library, a project that broadcasts the local file live over UDP and manages the broadcast has been developed.`,
                    ],
                },
                {
                    title: "Image Processing and Machine Interaction Intern",
                    dates: {
                        startDate: moment("2 July 2020 00:00 +1000"),
                        endDate: moment("30 September 2020 00:00 +1000"),
                    },
                    description: [],
                }
            ],
        },
        {
            company: "Sakarya University",
            companyUrl: "https://sakarya.edu.tr",
            companyLogoUrl: "https://media-exp2.licdn.com/dms/image/C4D0BAQH07GlzHnWJog/company-logo_200_200/0/1580731841381?e=1663804800&v=beta&t=_oqodVlZUTBIRrEx8eK24Y_bFbyPoxIvp6quZ4hmbjE",
            positions: [
                {
                    title: "Software Developer Part Time",
                    dates: {
                        startDate: moment("1 October 2019 00:00 +1000"),
                        endDate: moment("20 August 2020 00:00 +1000"),
                    },
                    description: [
                        `Sakarya University Rectorship Software Team`,
                        `Developed custom web-based applications for Sakarya University.`,
                        `Analyzed work-flow of the rectorship and developed online task management software.`,
                        `Prepared Sakarya University 50th Year special webs.ite`,
                        `Created user friendly and stylish client side web pages using various Javascript libraries.`,
                        'Developed APIs for website.',
                        'What I used: PHP, MySQL, CSS, Javascript, jQuery, React, Laravel, Docker'
                    ],
                }
            ],

        },
        {
            company: "90Pixel",
            companyUrl: "https://90pixel.com/",
            companyLogoUrl: "https://media-exp1.licdn.com/dms/image/C560BAQFzOux9MoXb-w/company-logo_200_200/0/1519895463647?e=2147483647&v=beta&t=p-ElExtIBYVvmxrePjjBZl6Btwn3Z0Rk_hax5__-oak",
            positions: [
                {
                    title: "Summer Intern",
                    dates: {
                        startDate: moment("1 Jun 2020 00:00 +1000"),
                        endDate: moment("20 July 2020 00:00 +1000"),
                    },
                    description: [
                        `Developed a project (REST API) using Symfony, API Platform and Doctrine. One of the most used PHP libraries.`,
                        `Learned to dockerize projects with docker and use Nginx.`,
                    ],
                }
            ],

        }
    ],
    stacks: [
        {
            Icon: SiSwift,
        },
        {
            Icon: SiNodedotjs,
        },
        {
            Icon: SiTypescript,
        },
        {
            Icon: SiReact,
        },
        {
            Icon: SiNextdotjs,
        },
        {
            Icon: SiGraphql,
        },
        {
            Icon: SiRedis,
        },
        {
            Icon: SiLaravel,
        },
        {
            Icon: SiAmazonaws,
        },
        {
            Icon: SiSymfony,
        },
        {
            Icon: SiKubernetes,
        },
        {
            Icon: SiDocker,
        },
    ]
};

export default meta;

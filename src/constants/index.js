
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { customer1 } from "../assets/images";
import { Upvote, Funny, Love, Surprised, Angry, Sad } from "../assets/images";

export const Emojis = [
    {
        imgURL: Upvote,
        clicked: 0,
        name: "Upvote",
    },
    {
        imgURL: Funny,
        clicked: 0,
        name: "Funny",
    },
    {
        imgURL: Love,
        clicked: 0,
        name: "Love",
    },
    {
        imgURL: Surprised,
        clicked: 0,
        name: "Surprised",
    },
    {
        imgURL: Angry,
        clicked: 0,
        name: "Angry",
    },
    {
        imgURL: Sad,
        clicked: 0,
        name: "Sad",
    },
]

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "/contactUS", label: "Contact Us" },
];


export const statistics = [
    { value: '1k+', label: 'Courses' },
    { value: '500+', label: 'Books' },
    { value: '250k+', label: 'Learners' },
];

export const courses = [
    {
        imgURL: "#2c80bc",
        name: "Grammer",
        price: "$200.20",
    },
    {
        imgURL: "#e00d12",
        name: "Conjugation",
        price: "$210.20",
    },
    {
        imgURL: "#a1f724",
        name: "Orthography",
        price: "$220.20",
    },
    {
        imgURL: "#ff9623",
        name: "Writing",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Interactive Learning",
        subtext: "Engage in dynamic lessons with our interactive e-learning platform."
    },
    {
        imgURL: shieldTick,
        label: "Certified Instructors",
        subtext: "Learn from expert educators with our e-learning English courses."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
export const answers = ()=>
{
    const data = [
        {
            letter: "A",
            right: "No",
            text: "Engage in dynamic lessons with our interactive e-learning platform.",
        },
        {
            letter: "B",
            right: "Yes",
            text: "Engage in dynamic lessons with our interactive e-learning platform.",
        },
        {
            letter: "C",
            right: "No",
            text: "Engage in dynamic lessons with our interactive e-learning platform.",
        },
        {
            letter: "D",
            right: "No",
            text: "Engage in dynamic lessons with our interactive e-learning platform.",
            explanation: "this explanation explains why the right answer is the right answer!!!"
        }];
    return [data]
}
 

export const menuItems = [
    {
        text: 'Dashboard',
        icon: 'bx bxs-dashboard',
        to: '/admin'
    },
    {
        text: 'Courses',
        icon: 'bx bx-book-add',
        to: '/admin/courses'
    },
    {
        text: 'Analytics',
        icon: 'bx bx-line-chart',
        to: '/admin/analytics'
    },
    {
        text: 'QCMs',
        icon: 'bx bx-message-square-dots',
        to: '/admin/qcms'
    },
    {
        text: 'Users',
        icon: 'bx bx-group',
        to: '/admin/users'
    },
    {
        text: '+ Teacher',
        icon: 'bx bxs-graduation',
        to: '/admin/settings'
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Mejjout Brahim',
        rating: 4.8,
        feedback: "The depth of content and the quality of instruction surpassed my expectations. Highly recommended for language enthusiasts!"
    },
    {
        imgURL: customer1,
        customerName: 'Elmetlini Abdelhaq',
        rating: 4.7,
        feedback: "This platform exceeded my language learning needs. I'll certainly be returning for more lessons!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Grammar", link: "/" },
            { name: "Conjugation", link: "/" },
            { name: "Writing", link: "/" },
            { name: "Listening", link: "/" },
            { name: "Orthography", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "abdelhaq.elmetlini@ump.ac.ma", link: "mailto:customer@elearning.com" },
            { name: "+2120712904309", link: "tel:+2120712904309" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const getData =  async () => {
    
    const data = [
    {
      username: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      age: 27,
      status: "Active",
      role: "Admin",
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    }
  ]
  return [...data]
};
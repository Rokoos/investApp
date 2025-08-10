import photo1 from "../assets/images/books.jpg";
import photo2 from "../assets/images/hoursManager.jpg";
import photo3 from "../assets/images/keyboards.jpg";
import photo4 from "../assets/images/money.jpg";
import photo5 from "../assets/images/fixer.jpg";
import photo6 from "../assets/images/guardian.jpg";

export const navLinks = [
  { href: "/profile", label: "Profile", loggedIn: true },
  { href: "/add-project", label: "Add Project", loggedIn: true },
  { href: "/signup", label: "Sign Up", loggedIn: false },
  { href: "/signin", label: "Sign In", loggedIn: false },
];

export const demoProjects = [
  {
    _id: "1",
    appName: "Books",
    creator: { _id: "123456789", name: "Santiago", surname: " De Compostella" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "",
    linkYT: "",
    tags: ["#planes", "#aviation", "#books"],
    photo: photo1,
    createdAt: new Date(),
  },
  {
    _id: "2",
    appName: "Hours Manager",
    creator: { _id: "098765432", name: "Luis", surname: "Fernandez" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "",
    linkYT: "",
    tags: ["#work", "#manager"],
    photo: photo2,
    createdAt: new Date(),
  },
  {
    _id: "3",
    appName: "Keyboards Shop",
    creator: { _id: "098765432", name: "Luis", surname: "Fernandez" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "",
    linkYT: "",
    tags: ["#music", "#keyboards"],
    photo: photo3,
    createdAt: new Date(),
  },
  {
    _id: "4",
    appName: "My Wasted Money",
    creator: {
      _id: "6806b25e3bbff7bcb044fdd5",
      name: "Marcin",
      surname: "Widomski",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "",
    linkYT: "",
    tags: ["#money", "#budget"],
    photo: photo4,
    createdAt: new Date(),
  },
  {
    _id: "5",
    appName: "Fixer",
    creator: { _id: "123456789", name: "Santiago", surname: " De Compostella" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "https://fixstuff.netlify.app/",
    linkYT: "",
    tags: ["#fixing", "#repairs"],
    photo: photo5,
    createdAt: new Date(),
  },
  {
    _id: "6",
    appName: "Guardian",
    creator: { _id: "123456789", name: "Santiago", surname: " De Compostella" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    link: "https://guardian123.netlify.app/",
    linkYT: "",
    tags: ["#babysitter", "#care", "#disabled"],
    photo: photo6,
    createdAt: new Date(),
  },
];

export const demoUser = {
  _id: "6806b25e3bbff7bcb044fdd5",
  name: "Marcin",
  surname: "Widomski",
  role: "creator",
  aboutMe:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem corrupti. Suscipit deserunt impedit alias consequatur officiis maiores, id ipsam laborum quisquam ab optio tempore sint beatae, iste blanditiis aspernatur.",
  mobile: "+48 222 333 444",
  projects: ["4"],
  reviews: [],
  link: "",
};

export const users = [
  {
    _id: "123456789",
    name: "Santiago",
    surname: " De Compostella",
    role: "creator",
    aboutMe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem corrupti. Suscipit deserunt impedit alias consequatur officiis maiores, id ipsam laborum quisquam ab optio tempore sint beatae, iste blanditiis aspernatur.",
    mobile: "+48 222 333 444",
    projects: ["1", "5", "6"],
    reviews: [],
    link: "",
  },
  {
    _id: "098765432",
    name: "Luis",
    surname: "Fernandez",
    role: "creator",
    aboutMe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem corrupti. Suscipit deserunt impedit alias consequatur officiis maiores, id ipsam laborum quisquam ab optio tempore sint beatae, iste blanditiis aspernatur.",
    mobile: "+48 222 333 444",
    projects: ["2", "3"],
    reviews: [],
    link: "",
  },
];

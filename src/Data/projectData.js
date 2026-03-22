import CommunionImg from "../assets/CommunionHubImg.png";
import EcommerceImg from "../assets/EcommerceAppImg.png";
import cafeImg from "../assets/cafeImg.png";
import MovieImg from '../assets/movieImg.png'

const projectData = [
 {
  id: 1,
  name: "Movies",
  image: MovieImg,
  link: "https://movie-app-pj9k.vercel.app/",
  description: "A modern movie discovery platform built with Next.js and MongoDB. Users can search movies, explore detailed information like ratings and release dates, and manage their favorite movies. The application includes secure user authentication using JWT and is optimized for SEO to improve search visibility.",
  techStack: ["Next.js", "MongoDB", "JWT Authentication", "Tailwind CSS", "API Integration"],
},
 {
  id: 2,
  name: "Cafes",
  image: cafeImg,
  link: "https://cafe-corner-ten.vercel.app/",
  description: "A modern cafe discovery website built with React that allows users to find nearby cafes using the Geolocation API. Users can search and filter cafes easily, while cafe data is fetched from a public API. The project focuses on clean UI, responsive design, and a smooth browsing experience.",
  techStack: ["React", "CSS", "Vite", "Geolocation API", "Public API", "Responsive Design"],
},
  {
    id: 3,
    name: "E-commerce",
    image: EcommerceImg,
    link: "https://product-selling-application.netlify.app/",
    description: "A functional e-commerce frontend with product listings, category filtering, and a cart system. Designed for speed and ease of use.",
    techStack: ["React", "Netlify", "Product API", "State Management"],
  },
];

export default projectData;

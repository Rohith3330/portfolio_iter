import {
    mobile,
    backend,
    web,
    javascript,
    reactjs,
    tailwind,
    mongodb,
    git,
    IST,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    py,
    firebase,
    flutter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "AI Model Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: py,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "ML Intern",
      company_name: "iSpatial Techno Solutions",
      icon: IST,
      iconBg: "#383E56",
      date: "September 2022 - February 2023",
      points: [
        "Worked on a Deep Learning framework for object tracking using YOLOV5 and STRONG-SORT by utilizing Kalman filter",
        "Devoleped an OCR frame work along with object detection for detecting street names in road signs from Google Maps API",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Map Translations",
      description:
        "Android application that allows users to  to transform satellite imagery to map imagery and vice versa, providing a convenient and efficient solution for automation needs.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rohith3330/Map_translations",
    },
    {
      name: "Pokedex",
      description:
        "Web application that enables users to utilze as a game tool to identify and collect different Pokemon using deep learning techniques ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rohith3330/mern_pokedex_final",
    },
    // {
    //   name: "Hindi OCR",
    //   description:
    //     " a web application that allows users to extract and detect Hindi handwritten text from a picture and transforms to editable digital text",
    //   tags: [
    //     {
    //       name: "openCV",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "flask",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/Rohith3330/Hindi_OCR",
    // },
  ];
  
  export { services, technologies, experiences, projects };
  
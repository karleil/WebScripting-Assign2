import React from "react";
import AOS from 'aos'
AOS.init();


export default function Toolkit() {
    
    const toolkitData = [
        {
            "id": 1,
            "title": "Adobe After Effects",
            "img": "./toolkit/ae.svg"
          },
        {
            "id": 2,
            "title": "Adobe Premiere",
            "img": "./toolkit/pr.svg"
          },
        {
            "id": 3,
            "title": "Adobe Illustrator",
            "img": "./toolkit/ai.svg"
          },
        {
            "id": 4,
            "title": "Adobe Photoshop",
            "img": "./toolkit/ps.svg"
          },
        {
            "id": 5,
            "title": "Figma",
            "img": "./toolkit/figma.svg"
          },
        {
            "id": 6,
            "title": "HTML 5",
            "img": "./toolkit/html.svg"
          },
        {
            "id": 7,
            "title": "CSS 3",
            "img": "./toolkit/css.svg"
          },
        {
            "id": 8,
            "title": "REACT JS",
            "img": "./toolkit/react.svg"
          },
        {
            "id": 9,
            "title": "Tailwind CSS",
            "img": "./toolkit/tailwind.svg"
          },
          
    ]
    
    return (
      <div  className="pt-16 pb-12">
          <h1
              className="text-center font-bold text-4xl md:text-5xl text-white pb-12"
              style={{ textShadow: "1px 2px 5px #00ffff" }}
          >
              TOOLKIT
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-8 sm:px-16 lg:px-40 text-center">
              {toolkitData.map((toolkit) => (
                  <div
                      key={toolkit.id}
                      className="flex flex-col items-center text-white" data-aos="fade-up"
                  >
                      <img
                          src={toolkit.img}
                          alt={toolkit.title}
                          className="w-20 pb-2"
                      />
                      <h1 className="text-lg md:text-xl pb-5">{toolkit.title}</h1>
                  </div>
              ))}
          </div>
      </div>
  );
  
}
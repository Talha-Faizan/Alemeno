import React, { useState } from "react";

const Courses = () => {
  const [Data, setData] = useState([
    {
      name: "Web Development",
      description: "Learn web development with HTML, CSS, and JavaScript",
      price: "$99.99",
      instructor: "John Doe",
      duration: "6 months",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      name: "Data Science",
      description: "Master data analysis and machine learning",
      price: "$129.99",
      instructor: "Jane Smith",
      duration: "8 months",
      image: "https://static.vecteezy.com/system/resources/thumbnails/013/030/138/small/big-data-science-analysis-information-technology-concept-server-room-background-photo.jpg",
    },
    {
      name: "Graphic Design",
      description: "Create stunning visuals and designs",
      price: "$89.99",
      instructor: "Alice Johnson",
      duration: "4 months",
      image: "https://i.ytimg.com/vi/GQS7wPujL2k/maxresdefault.jpg",
    },
    {
      name: "Digital Marketing",
      description: "Learn the art of online marketing",
      price: "$79.99",
      instructor: "Bob Brown",
      duration: "5 months",
      image: "https://t4.ftcdn.net/jpg/02/52/76/09/360_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg",
    },
    {
      name: "Cybersecurity",
      description: "Protect systems and networks from cyber threats",
      price: "$149.99",
      instructor: "Charlie White",
      duration: "7 months",
      image: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
    },
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h1 className="font-bold text text-2xl uppercase mb-10 mt-10">
        Courses We Offer
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {Data.map((course, index) => (
          <div key={index} className="bg-[#ced4da] w-full sm:w-80 md:w-96 rounded-2xl mb-10 p-2 mx-2">
            <div className="h-48 w-full">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src= {course.image}
                alt="full stack web dev"
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-lg">{course.name}</h2>
              <p>{course.description}</p>
              <p>Price: {course.price}</p>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <button className="px-10 py-3 bg-red-500 rounded-full font-bold mt-5">
                Learn More....
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
import React, { useState } from "react";

const courses = [
  { id: 1, name: "Andrew Tider", instructor: "Andrew Tider", dueDate: "1/15/2023", progress: 60, image: "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid" },
  { id: 2, name: "Alicia Keys", instructor: "Alicia Keys", dueDate: "1/25/2023", progress: 40, image: "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid" },
  { id: 3, name: "Denise Graves", instructor: "Denise Graves", dueDate: "2/10/2023", progress: 20, image: "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid" },
];

const Description = () => {
  const [progress, setProgress] = useState(40);

  return (
    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg w-full font-sans px-20">
      <h1 className="text-4xl font-bold mb-6">Hi, Jessica!</h1>
      <h2 className="text-2xl font-semibold mb-4">Your courses</h2>
      <div className="rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600 font-semibold text-sm">
              <th className="p-4">Course</th>
              <th>Instructor</th>
              <th>Due date</th>
              <th>Progress</th>
              <th className="text-right pr-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {courses.map((course) => (
              <tr key={course.id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3 text-sm font-medium">
                  <img src={course.image} alt="profile" className="w-10 h-10 rounded-full" />
                  {course.name}
                </td>
                <td className="text-sm">{course.instructor}</td>
                <td className="text-sm">{course.dueDate}</td>
                <td className="text-sm">
                  <div className="relative w-28 bg-gray-200 h-2 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-black rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs ml-2 text-gray-600">{course.progress}%</span>
                </td>
                <td className="text-right pr-6">
                  <button className="text-blue-500 bg font-medium text-sm">Mark as completed</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Your progress</h2>
        <p className="text-sm mb-1 font-medium text-gray-700">{progress}% of your courses completed</p>
        <div className="relative w-full bg-gray-200 h-2 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-black rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Keep up the good work! You’re on track to complete 100% of your courses by December 31, 2023.</p>
      </div>
    </div>
  );
};

export default Description;

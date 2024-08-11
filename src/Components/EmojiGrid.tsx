"use client";
import React from "react";

const departments = [
  { name: "Комплексный подход", icon: "👨‍💼" },
  { name: "Ответственность", icon: "📊" },
  { name: "Большой проект", icon: "💼" },
  { name: "Надежность", icon: "🚚" },
  { name: "Квалификация специалистов", icon: "🛒" },
  { name: "Опыт", icon: "🏭" },
  { name: "Для технического отдела", icon: "🔧" },
  { name: "Для склада", icon: "📦" },
];

const EmojiGrid = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-800 mt-10 mb-10 sm:text-3xl md:text-4xl">
        ПОЧЕМУ ВЫБИРАЮТ НАС
      </h2>
      <div className="grid grid-cols-4 gap-6 p-4 mx-auto max-w-screen-xl mt-10 mb-20">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl mb-3 text-blue-600">{dept.icon}</div>
            <div className="text-lg font-semibold text-gray-700">
              {dept.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmojiGrid;

"use client";
import React from "react";

const stats = [
  { value: "1,000+", label: "Успешных Проектов" },
  { value: "12+", label: "Лето Работы" },
  { value: "200+", label: "Постоянных клиентов" },
  { value: "20+", label: "Сотрудников" },
];

const ProudNumbersBar = () => {
  return (
    <div className="bg-[#04395e]  text-white py-10 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudNumbersBar;

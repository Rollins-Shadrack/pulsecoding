"use client";
import Container from "@/components/Container";
import { CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import data from "@/constants/data.json";
const ClassSchedule = () => {
  const { classScheduleSection } = data.coursespage;
  const [day, setDay] = useState(Object.keys(classScheduleSection)[0]);
  let daysOfWeek;

  const handleDayClick = (day) => {
    setDay(day);
  };

  const selectedDay = classScheduleSection[day];
  day === "Starting Monday" ? (daysOfWeek = ["Mon", "Wed", "Sat"]) : (daysOfWeek = ["Tue", "Thur", "Sun"]);

  return (
    <div className="py-5" id="schedule">
      <div>
        <div className="flex h-64 md:h-80 lg:h-96">
          <div className="rotate-180 " style={{ writingMode: "vertical-rl" }}>
            <div className="text-center">
              <CardTitle className="whitespace-nowrap text-center">Class Schedule</CardTitle>
              <div className="flex items-center justify-between border-l  whitespace-nowrap text-xs md:text-base cursor-pointer">
                {Object.keys(classScheduleSection).map((days, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleDayClick(days)}
                    className={`uppercase mx-auto font-semibold ${days === day && "border-l-2 border-black"}`}>
                    {days}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-10/12 h-full">
            <div className="flex justify-between text-xs md:text-base">
              {daysOfWeek.map((day, idx) => (
                <div key={idx} className="font-semibold mx-auto">
                  {day}
                </div>
              ))}
            </div>

            {Object.entries(selectedDay).map(([time, days]) => (
              <div key={time} className="flex flex-col">
                <div className="flex items-center justify-between px-3  lg:text-lg text-xs  whitespace-nowrap">
                  <p className="font-semibold">{time}</p>
                </div>
                <div className="flex justify-between text-xs md:text-base">
                  {daysOfWeek.map((day, idx) => (
                    <div key={idx} className="font-semibold mx-auto mb-10">
                      {Object.keys(days[day]).length > 0 && (
                        <div className="border p-2  flex lg:space-x-8 space-x-2 justify-between pb-5 rounded-lg">
                          <div className="text-sm">
                            <h1>{days[day].title}</h1>
                            <h1 className="text-gray-400 text-xs">{days[day].is}</h1>
                          </div>
                          <h1 className="text-xs whitespace-nowrap">{days[day].duration}</h1>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;

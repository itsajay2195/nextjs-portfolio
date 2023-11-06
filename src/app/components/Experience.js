"use client";
import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const timelineData = [
  {
    date: "06/2023 – Present",
    designation: "Software Engineer(React Native)",
    location: "Banglore,India.(Remote)",
    title: "Sensehawk",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "04/2022 – 04/2023",
    designation: "SDE-2(React Native)",
    location: "Chennai, Tamil Nadu,India.",
    title: "Pickyourtrail",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "07/2019 – 04/2022",
    location: "Chennai, Tamil Nadu,India.",
    title: "Happyfox Technologies LLP",
    designation: "React Native Engineer",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    date: "10/2017 – 5/2019",
    location: "Dubai, UAE.",
    designation: "Software Engineer",
    title: "TPConnects Technologies LLP",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Experience() {
  return (
    <div id={"experience"}>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="flex ">
        <Timeline lineColor={"#52525b"}>
          {timelineData.map((timeline, index) => (
            <TimelineItem
              key={index}
              dateText={timeline.date}
              dateInnerStyle={{
                background: "#9ca3af",
                color: "black",
              }}
              bodyContainerStyle={{
                background: "#212121",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ color: "white" }}>{timeline.title}</h3>
              <h3 style={{ color: "grey", fontSize: "12px" }}>
                {timeline.location}
              </h3>
              <p className="text-blue-500 text-small font-normal mt-2">
                {timeline.designation}
              </p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;

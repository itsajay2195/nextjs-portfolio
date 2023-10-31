import React from "react";

function Experience() {
  const cardsData = [
    {
      name: "Software Engineer at Sensehawk",
      image:
        "https://yt3.googleusercontent.com/ytc/APkrFKaG3nkBKSpuM9ltcHtr4Ku7uXRfu1XSpESJ1oru=s176-c-k-c0x00ffffff-no-rj",
      description: [
        "Spearheaded the development of a cutting-edge mobile application from inception, ensuring seamless user experiences and high-performance functionalities.",
        "Demonstrated expertise in code optimization, enhancing app speed and responsiveness, leading to a 30% improvement in overall performance metrics",
        "Engineered robust and scalable codebase, adhering to best practices and industry standards, resulting in a highly maintainable application architecture",
        "Actively participated in code reviews, providing constructive feedback and implementing high-impact changes, fostering a culture of excellence and continuous improvement within the development team",
      ],
    },

    {
      name: "SDE-2 at Pickyourtrail",
      image:
        "https://yt3.ggpht.com/z9q0dle4hY21G8q_z2My-4NRx_6cTIuf_fdPdEyXvHvt7p3uFw4FFW5sczv3_gNiZo4Tcdb0gA=s176-c-k-c0x00ffffff-no-rj-mo",
      description: [
        "Pioneered the post-booking module of the Pickyourtrail app using Fastlane, demonstrating proactive problem-solving and flexibility across Android and iOS platforms.",
        "Led app optimization, enhancing speed and responsiveness by identifying bottlenecks and elegantly solving complex dataset rendering challenges",
        "Achieved a 50% performance surge and 35% faster app load times by integrating industry best practices with a proactive approach to React components.",
        "Provided technical mentorship to junior developers, harnessing my expertise and adaptability to enhance coding skills and project efficiency.",
        "Ensured a top-tier product launch through meticulous TestFlight and Android Beta Channel beta testing, paired with proactive React-Native performance optimization.",
      ],
    },
    {
      name: "React Native Developer at Happyfox",
      image:
        "https://yt3.googleusercontent.com/ytc/APkrFKbTsuOFdL-hLG5J2Z7iPzIofuDEKKCOIVCtUhVc=s176-c-k-c0x00ffffff-no-rj",
      title: "Frontend Developer at Chance",
      description: [
        "Implemented dynamic lazy loading methodologies to significantly improve the app's scrolling performance and reduce data consumption.",
        "Developed a premium-grade application from scratch, creating intuitive UI designs across diverse layouts using React-Native components",
        "Conceptualized and implemented various pivotal components, including bottom tab bars, sign-in/out functionalities, forms, and navigation",
        "Upheld code excellence by executing unit test cases for essential helper functions.",
        "Restructured class components into agile functional equivalents, enhancing performance and simplifying maintenance.",
        "Utilized async-storage for data persistence, harnessed Redux for efficient state management, and integrated Axios and fetch for robust HTTP requests.",
      ],
    },
    {
      name: "Software Engineer at TPconnects",
      image:
        "https://yt3.googleusercontent.com/m2mGehGoUUQSsbX_VD3Oa9FbPZEkeSdND4d7B1WdQEz2ptgo74kZXpaf_VDI87jscQAodm3n=s176-c-k-c0x00ffffff-no-rj",
      description: [
        "Contributed to the development of a Passenger Service System (PSS) for the travel industry, focusing on backend services and API integrations.",
        "Be consistent and flexible, always one line of code at a time",
        "Created Atoms and molecules that could re-used across the app for development",
        "Improved the test coverage by adding unit tests to the components and helpers",
        "Involved in Automating the test cases uing Java and Selenium",
        "Involved in Automating the test cases uing Java and Appium",
      ],
    },
    ,
  ];
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {cardsData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4 my-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4 h-14">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc mb-2 mt-4">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;

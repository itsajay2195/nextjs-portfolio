import React from "react";

function Experience() {
  const cardsData = [
    {
      name: "React Native Developer at Happyfox",
      image:
        "https://yt3.googleusercontent.com/ytc/APkrFKbTsuOFdL-hLG5J2Z7iPzIofuDEKKCOIVCtUhVc=s176-c-k-c0x00ffffff-no-rj",
      title: "Frontend Developer at Chance",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "SDE-2 at Pickyourtrail",
      image:
        "https://yt3.ggpht.com/z9q0dle4hY21G8q_z2My-4NRx_6cTIuf_fdPdEyXvHvt7p3uFw4FFW5sczv3_gNiZo4Tcdb0gA=s176-c-k-c0x00ffffff-no-rj-mo",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Software Engineer at TPconnects",
      image:
        "https://yt3.googleusercontent.com/m2mGehGoUUQSsbX_VD3Oa9FbPZEkeSdND4d7B1WdQEz2ptgo74kZXpaf_VDI87jscQAodm3n=s176-c-k-c0x00ffffff-no-rj",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {cardsData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
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

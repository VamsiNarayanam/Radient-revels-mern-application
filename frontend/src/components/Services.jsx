import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/Birthday.jpg",
      title: "BIRTHDAY PLAN",
    },
    {
      id: 2,
      url: "/aniversary.jpeg",
      title: "ANNIVERSARY PLAN",
    },
    {
      id: 3,
      url: "/Campingtrip.jpg",
      title: "CAMPING TRIP PLAN",
    },
    {
      id: 4,
      url: "/Gaming.webp",
      title: "GAMING NIGHT PLAN",
    },
    {
      id: 5,
      url: "/Party.jpeg",
      title: "PARTY PLAN",
    },
    {
      id: 6,
      url: "/Wedding.webp",
      title: "WEDDING PLAN",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

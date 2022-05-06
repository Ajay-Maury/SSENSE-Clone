import React from "react";
import SmallArticle from "./SmallArticle";

const SmallArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1638302729/sfikmhm76xmdw3pz2trz.jpg",
      heading:
        "American Beauty: In The Herman Miller Archives With Amy Auscherman",
      category: "Culture",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1645025237/r0qi6tdp7lhjfjefevni.jpg",
      heading: "The Sean Brown Remix",
      category: "Culture",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1638307317/td5r8hhiwlfnktzy2y9w.jpg",
      heading: "The Oral History of Apartamento",
      category: "Culture",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1638385892/xlxo7ygruwzki2spmzxl.jpg",
      heading: "Cataloging A Dream House",
      category: "Culture",
    },
  ];
  return (
    <div>
      <hr />
      {data.map((d) => (
        
          <SmallArticle key={d.id} img={d.img} heading={d.heading} category={d.category} />
       
      ))}
    </div>
  );
};

export default SmallArticleGallery;
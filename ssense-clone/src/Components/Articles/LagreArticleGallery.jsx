import React from "react";
import LargeArticle from "./LargeArticle";

const LagreArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1649709518/paunqpxrxn9bwnisqoou.jpg",
      heading: "Freshly Squeezed!",
      category: "Fashion",
      text: "Crushing on SS22’s new brands featuring Andrej Gronau, Lựu Đạn, and Chet Lo.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1649182413/h7vrai6tmvnuelj1g5d9.jpg",
      heading: "We11done’s Voluminous Vision of the Future",
      category: "Fashion",
      text: "We11done’s SS22 collection is driven by various desires—to take up more space; to indulge in pleasure and power; to boldly step from a complicated past into the future.",
    },
  ];
  return (
    <div>
      <div className="large-articles">
        {data.map((d) => (
          <LargeArticle
            img={d.img}
            heading={d.heading}
            category={d.category}
            text={d.text}
          />
        ))}
      </div>
    </div>
  );
};

export default LagreArticleGallery;

import React from "react";
import rating1 from "../assets/rating-1.svg";
import rating2 from "../assets/rating-2.svg";
import rating3 from "../assets/rating-3.svg";
import rating4 from "../assets/rating-4.svg";
import rating5 from "../assets/rating-5.svg";

function Rating() {
  const arrRating = [
    {
      rating: 1,
      img: rating1,
    },
    {
      rating: 2,
      img: rating2,
    },
    {
      rating: 3,
      img: rating3,
    },
    {
      rating: 4,
      img: rating4,
    },
    {
      rating: 5,
      img: rating5,
    },
  ];

  return (
    <div className="rating">
      <h1>Rating</h1>
      <ul>
        {arrRating.map((obj) => (
          <li key={obj.rating}>
            <input type="checkbox" />
            <img src={obj.img} alt="rating" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rating;

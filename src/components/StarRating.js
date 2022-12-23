import React from "react";
import { BsStarFill, BsStarHalf , BsStar } from "react-icons/bs";

export default function StarRating({ stars, reviews }) {
  console.log(stars, reviews);

  const rating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="text-warning" />
        ) : stars >= number ? (
          <BsStarHalf className="text-warning" />
        ) : (
          <BsStar className="text-warning" />
        )}
      </span>
    );
  });
  return (
    <>
      <div>
        {rating}
        <span className="ms-2 fw-bold">({reviews} Customers reviews)</span>
      </div>
    </>
  );
}

// Convert rating into stars
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

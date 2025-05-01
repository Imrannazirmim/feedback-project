import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackState = () => {
  const { feedback } = useContext(FeedbackContext);
  //calcute average rating
  const averageRating =
    feedback.reduce((acc, curIndex) => {
      return acc + curIndex.rating;
    }, 0) / feedback.length;

  const average = averageRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="flex flex-wrap gap-2 justify-between p-2 m-2 font-bold text-amber-600">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
};
export default FeedbackState;

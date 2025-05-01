import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem.jsx";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>Feedback Not Found</p>;
  }
  return (
    <div>
      <ul>
        {feedback.map((item) => (
          <FeedbackItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default FeedbackList;

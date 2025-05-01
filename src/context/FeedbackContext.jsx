import { createContext, useState } from "react";
import { feedbackData } from "../data/FeedbackData.js";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    const feedbackFilter = feedback.filter((item) => item.id !== id);
    setFeedback(feedbackFilter);
  };
  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleEditFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const handleUpdateFeedback = (id, newItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        handleAddFeedback,
        handleEditFeedback,
        handleUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

//this is context context global data state management system / tool

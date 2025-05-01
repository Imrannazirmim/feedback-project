import { useContext, useEffect, useState } from "react";
import Card from "./global/Card";
import SelectRating from "./SelectRating";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { handleAddFeedback, feedbackEdit, handleUpdateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState();

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        handleUpdateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        handleAddFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form className="bg-gray-200  p-4 " onSubmit={handleSubmitForm}>
        <h2 className="text-center font-semibold m-2">
          Your Services with us?
        </h2>
        <SelectRating select={(rating) => setRating(rating)} />
        <div className="flex">
          <input
            value={text}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-0"
            type="text"
            placeholder="write a review"
          />
          <button
            type="submit"
            disabled={btnDisabled}
            className={`border border-gray-300 p-2  rounded-r -ml-[3.3rem] ${
              text.trim().length <= 10 ? "bg-gray-200" : "bg-gray-500"
            }`}
          >
            Send
          </button>
        </div>
        <p>{message}</p>
      </form>
    </Card>
  );
};
export default FeedbackForm;

import Card from "./global/Card.jsx";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, handleEditFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <li
        key={item.id}
        className="w-[55vw] mx-auto flex flex-col gap-2 p-2 shadow bg-gray-200 m-2 rounded"
      >
        <div className="flex justify-between">
          <span className=" w-[25px] text-center rounded-full bg-amber-700 text-white font-bold">
            {item.rating}
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => deleteFeedback(item.id)}
              className="text-end  font-bold p-1 rounded-full text-white hover:bg-red-400 bg-red-500 "
            >
              <FaTimes />
            </button>
            <button
              onClick={() => handleEditFeedback(item)}
              className=" font-bold text-teal-700 "
            >
              <FaEdit size={23} />
            </button>
          </div>
        </div>
        <p>{item.text}</p>
      </li>
    </Card>
  );
};
export default FeedbackItem;

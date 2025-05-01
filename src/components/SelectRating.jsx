import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const SelectRating = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleRatingChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <ul className="flex gap-3 flex-wrap  m-2 items-center justify-center">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((num, index) => {
        return (
          <li className="relative" key={index}>
            <input
              type="radio"
              id={`num1${num}`}
              value={num}
              name="rating"
              onChange={handleRatingChange}
              checked={selected === num}
              //    className="absolute opacity-0 w-10 h-10 cursor-pointer"
              className="peer absolute opacity-0 w-10 h-10 cursor-pointer"
            />
            <label
              htmlFor={`num1`}
              className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer 
                      peer-checked:bg-blue-500 peer-checked:text-white transition"
            >
              {num}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectRating;

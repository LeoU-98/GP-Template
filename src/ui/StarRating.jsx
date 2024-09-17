import { StarIcon } from "@heroicons/react/24/solid";
import propTypes from "prop-types";

export default function StarRating({
  NumOfStars,
  style = "",
  starSize = "24px",
}) {
  return (
    <div className={`flex items-center ${style}`}>
      {Array.from({ length: NumOfStars }, (start, i) => (
        <StarIcon
          className="fill-yellow-600"
          key={i}
          style={{
            width: starSize,
            height: starSize,
          }}
        />
      ))}
    </div>
  );
}
StarRating.propTypes = {
  NumOfStars: propTypes.number,
  starSize: propTypes.string,
  style: propTypes.string,
};

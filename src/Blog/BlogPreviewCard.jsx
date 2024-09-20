import propTypes from "prop-types";

export default function BlogPreviewCard({ data }) {
  const { image, title, descryption, date } = data;

  return (
    <div className="mx-[5px] overflow-hidden rounded-md bg-white">
      <div className="w-full">
        <img src={image} className="w-full" alt="blog image" />
      </div>
      <div className="mx-auto px-4 pb-8 pt-4">
        <h3 className="line-clamp-1 text-xl font-bold">{title}</h3>
        <p className="mt-2 border-b-2 border-b-mercury-200 pb-5 text-gray-700">
          {descryption}
        </p>
        <div className="flex justify-between pt-4 text-gray-900">
          <span>{date}</span>
          <a href="#read" className="duration-300 hover:text-lima-500">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

BlogPreviewCard.propTypes = {
  data: propTypes.object,
};

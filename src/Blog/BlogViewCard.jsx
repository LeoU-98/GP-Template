import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import propTypes from "prop-types";

export default function BlogViewCard({ data }) {
  const {
    blogImage,
    blogAuthor,
    blogComments,
    blogDate,
    blogHeading,
    blogDesc,
  } = data;
  return (
    <article className="h-fit border-[1px] border-gray-300 bg-white">
      <div className="">
        <img src={blogImage} alt="blog image" className="w-full" />
      </div>
      <div className="p-7 py-5 pb-0">
        <BlogViewCardReview
          blogAuthor={blogAuthor}
          blogComments={blogComments}
          blogDate={blogDate}
        />
        <div className="py-4">
          <p className="mb-2 text-lg text-gray-900">{blogHeading}</p>
          <p className="text-gray-600">{blogDesc}</p>
        </div>
      </div>
    </article>
  );
}

function BlogViewCardReview({ blogAuthor, blogComments, blogDate }) {
  return (
    <ul className="flex items-center gap-4 fill-gray-700 text-xs text-gray-700 sm:text-sm">
      <li className="flex items-center justify-between gap-1">
        <UserIcon className="inline-block size-5" />
        <span>{blogAuthor}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <CalendarDaysIcon className="relative top-[-1px] inline-block size-5" />
        <span>{blogDate}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <ChatBubbleLeftRightIcon className="inline-block size-5" />
        <span>{`${blogComments} Comments`}</span>
      </li>
    </ul>
  );
}

BlogViewCardReview.propTypes = {
  blogAuthor: propTypes.object,
  blogComments: propTypes.number,
  blogDate: propTypes.string,
};

BlogViewCard.propTypes = {
  data: propTypes.object,
};

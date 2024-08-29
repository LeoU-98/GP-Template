import BreadCrumb from "../ui/BreadCrumb";
import propTypes from "prop-types";

import {
  UserIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

////////////////////////////////////
///        fake data

import { asideData, blogItemData } from "../utils/ProductsData";

function Blog() {
  return (
    <div className="container mx-auto mb-20">
      <BreadCrumb />
      {/* all posts  */}
      <div className="flex gap-4 bg-red-500">
        <BlogAside />
        <div className="grid basis-4/5 grid-cols-2 gap-4 bg-green-500">
          {blogItemData.map((el, key) => (
            <BlogItem data={el} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

function BlogItem({ data }) {
  const {
    blogImage,
    blogAuthor,
    blogComments,
    blogReviews,
    blogHeading,
    blogDesc,
    blogLink,
  } = data;

  return (
    <article className="h-fit bg-white">
      <div className="max-w-[550px]">
        <img src={blogImage} alt="blog image" className="w-full" />
      </div>
      <div className="p-7 py-5 pb-0">
        <BlogItemReview
          blogAuthor={blogAuthor}
          blogComments={blogComments}
          blogReviews={blogReviews}
        />
        <div className="border-b-[1px] border-gray-300 py-4">
          <a
            href={blogLink}
            className="mb-2 cursor-pointer text-lg text-gray-900 hover:text-lima-500"
          >
            {blogHeading}
          </a>
          <p className="text-gray-600">{blogDesc}</p>
        </div>
        <a
          className="block w-fit cursor-pointer py-4 text-gray-900 hover:text-lima-500"
          href={blogLink}
        >
          Read More
        </a>
      </div>
    </article>
  );
}

BlogItem.propTypes = {
  data: propTypes.object,
};

function BlogItemReview({ blogAuthor, blogComments, blogReviews }) {
  return (
    <ul className="flex items-center gap-2 fill-gray-700 text-sm text-gray-700">
      <li className="flex items-center justify-between gap-1">
        <UserIcon className="inline-block size-4" />
        <span>{blogAuthor}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <ChatBubbleLeftRightIcon className="inline-block size-4" />
        <span>{`${blogComments} Comments`}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <EyeIcon className="inline-block size-4" />
        <span>{blogReviews}</span>
      </li>
    </ul>
  );
}

BlogItemReview.propTypes = {
  blogAuthor: propTypes.object,
  blogComments: propTypes.number,
  blogReviews: propTypes.number,
};

function BlogAside() {
  return (
    <div className="flex basis-1/5 flex-col gap-4">
      {asideData.map((el, key) => (
        <BlogAsideSection data={el} key={key} />
      ))}
    </div>
  );
}

function BlogAsideSection({ data }) {
  const { sectionTitle, sectionItems } = data;

  return (
    <div className="border-[1px] border-gray-300 bg-white">
      <h2 className="border-b-[1px] border-gray-300 px-4 py-3 text-lg capitalize">
        {sectionTitle}
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {sectionItems.map((el, key) => (
          <BlogAsideSectionItem data={el} key={key} />
        ))}
      </ul>
    </div>
  );
}

function BlogAsideSectionItem({ data }) {
  const { itemImage, itemTitle, itemDate, itemLink } = data;
  return (
    <li className="flex">
      <img src={itemImage} alt="post image" className="size-16" />
      <div className="ml-3">
        <a
          href={itemLink}
          className="block cursor-pointer text-sm text-gray-900 hover:text-lima-500"
        >
          {itemTitle}
        </a>
        <span className="block text-sm">{itemDate}</span>
      </div>
    </li>
  );
}

BlogAsideSectionItem.propTypes = {
  data: propTypes.object,
};
BlogAsideSection.propTypes = {
  data: propTypes.object,
};

import BreadCrumb from "../ui/BreadCrumb";
import propTypes from "prop-types";

import {
  UserIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

////////////////////////////////////
///        fake data

import { asideData, blogItemData } from "../utils/StaticData";

import { useState } from "react";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Blog() {
  return (
    <div className="container mx-auto mb-20">
      <BreadCrumb />
      {/* all posts  */}
      <div className="flex flex-col-reverse gap-4 xl:flex-row">
        <BlogAside />
        <div className="mx-4 grid basis-3/4 grid-cols-1 gap-4 lg:grid-cols-2 xl:mx-0 2xl:basis-4/5">
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
      <div className="">
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

function BlogItemReview({ blogAuthor, blogComments, blogReviews }) {
  return (
    <ul className="flex items-center gap-2 fill-gray-700 text-xs text-gray-700 sm:text-sm">
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

////////////////////////////////////
///        Blog Aside

function BlogAside() {
  return (
    <>
      <div className="hidden basis-1/4 flex-col gap-4 xl:flex 2xl:basis-1/5">
        {asideData.map((el, key) => (
          <BlogAsideSection data={el} key={key} />
        ))}
      </div>
      <div className="mx-4 flex flex-col gap-4 xl:hidden">
        {asideData.map((el, key) => (
          <MobileDropDown data={el} key={key} />
        ))}
      </div>
    </>
  );
}

function BlogAsideSection({ data }) {
  const { sectionTitle, sectionItems } = data;

  return (
    <div className="border-[1px] border-gray-300 bg-white">
      <h2 className="border-b-[1px] border-gray-300 px-4 py-3 uppercase">
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

function MobileDropDown({ data }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { sectionTitle, sectionItems } = data;
  const renderItems = sectionItems.map((el, key) => (
    <BlogAsideSectionItem data={el} key={key} dropdown={true} />
  ));

  return (
    <div className="border-[1px] border-gray-300 bg-white">
      <Menu>
        <MenuHandler>
          <div className="border-b-[1px] border-gray-300">
            <ListItem
              className="flex items-center justify-between gap-2 rounded-none bg-transparent p-2 font-medium text-gray-900 transition-none hover:bg-transparent focus:bg-transparent active:bg-transparent"
              selected={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <span className="uppercase">{sectionTitle}</span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform xl:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
      </Menu>
      <div className="xl:hidden">
        <Collapse open={isMobileMenuOpen} className="flex flex-col gap-3 px-3">
          {renderItems}
        </Collapse>
      </div>
    </div>
  );
}

function BlogAsideSectionItem({ data, dropdown }) {
  const { itemImage, itemTitle, itemDate, itemLink } = data;
  return (
    <li className={`flex ${dropdown ? "first:pt-3 last:pb-3" : ""}`}>
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

////////////////////////////////////
///        propTypes

BlogAsideSectionItem.propTypes = {
  data: propTypes.object,
  dropdown: propTypes.bool,
};
BlogAsideSection.propTypes = {
  data: propTypes.object,
};
MobileDropDown.propTypes = {
  data: propTypes.object,
};
BlogItemReview.propTypes = {
  blogAuthor: propTypes.object,
  blogComments: propTypes.number,
  blogReviews: propTypes.number,
};
BlogItem.propTypes = {
  data: propTypes.object,
};

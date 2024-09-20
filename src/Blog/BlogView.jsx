import BreadCrumb from "../ui/BreadCrumb";
import BlogAside from "./BlogAside";
import BlogViewCard from "./BlogViewCard";

import poster4 from "../images/blogitem/lorem-ipsum-dolor.jpg";

const viewedBlogData = [
  {
    blogImage: poster4,
    blogAuthor: "LeoU",
    blogDate: "04/21/2022 11:03:50",
    blogComments: 98,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
  },
];

function BlogView() {
  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-20 px-2">
        {/* all posts  */}
        <div className="flex flex-col-reverse gap-4 xl:flex-row">
          <BlogAside />
          <div className="basis-4/5">
            <BlogViewCard data={viewedBlogData[0]} />
          </div>
        </div>
      </main>
    </>
  );
}

export default BlogView;

import BreadCrumb from "../ui/BreadCrumb";
import BlogAside from "./BlogAside";
import { blogItemData } from "../utils/StaticData";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-20 px-2">
        {/* all posts  */}
        <div className="flex flex-col-reverse gap-4 xl:flex-row">
          <BlogAside />
          <div className="mx-4 grid basis-3/4 grid-cols-1 gap-4 lg:grid-cols-2 xl:mx-0 2xl:basis-4/5">
            {blogItemData.map((el, key) => (
              <BlogCard data={el} key={key} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;

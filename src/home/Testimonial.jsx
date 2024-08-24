import Slider from "react-slick";

import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/////////////////////////////
//     fake  data          //
/////////////////////////////
import profile1 from "../images/testimonial/sample-1.jpg";
import profile2 from "../images/testimonial/sample-2.jpg";
import profile3 from "../images/testimonial/sample-3.jpg";

const testimonialData = [
  {
    image: profile1,
    name: "sandra",
    role: "customer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile2,
    name: "scarlet",
    role: "engineer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile3,
    name: "mai",
    role: "farmer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

//////////////////////////////
SamplePrevArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
SampleNextArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-[40%] top-[95%] z-10 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:text-xs before:font-bold before:text-gray-900 before:content-['⟩'] hover:before:text-lima-500 sm:right-[45%] lg:right-[47%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-[40%] top-[95%] z-10 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:text-xs before:font-bold before:text-gray-900 before:content-['⟨'] hover:before:text-lima-500 sm:left-[45%] lg:left-[47%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

////////////////////////////////////////////

function Testimonial() {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "px-4 py-12  z-10  bg-white  rounded-lg -mt-20 lg:-mt-52 ",
  };
  return (
    <div className="px-2 lg:px-0">
      <Slider {...settings}>
        {testimonialData.map((el, key) => (
          <TestimonialItem data={el} key={key} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;

function TestimonialItem({ data }) {
  const { image, name, role, feedback } = data;

  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="overflow-hidden rounded-full">
        <img src={image} alt="profile pic" />
      </div>
      <span className="mt-2 block text-lg capitalize">{name}</span>
      <span className="mb-2 block text-sm capitalize">{role}</span>
      <p className="text-balance text-center">{feedback}</p>
    </div>
  );
}

TestimonialItem.propTypes = {
  data: propTypes.object,
};

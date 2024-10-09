import Slider from "react-slick";
import ImageZoom from "react-image-zooom";

export default function ProductImagePreview() {
  const baseUrl = "./images/itemMagnifier/";
  const settings = {
    customPaging: function (i) {
      return (
        <div className="size-12 cursor-pointer border-[1px] border-gray-300 hover:border-lima-500 sm:size-20 lg:size-16 xl:size-20">
          <img src={`${baseUrl}mm${i + 1}.jpg`} />
        </div>
      );
    },
    dots: true,
    dotsClass: "!flex items-center gap-2 mt-6 justify-center",
    className: "product-image-preview ",
    infinite: false,
    speed: 500,
    arrows: false,
    swipe: false,
  };

  return (
    <div className="w-full basis-1/2 px-1 lg:w-1/2 xl:w-2/5">
      <Slider {...settings}>
        <ImageZoom
          src={baseUrl + "mm1.jpg"}
          className="border-[1px] border-gray-300"
        />

        <ImageZoom
          src={baseUrl + "mm2.jpg"}
          className="border-[1px] border-gray-300"
        />

        <ImageZoom
          src={baseUrl + "mm3.jpg"}
          className="border-[1px] border-gray-300"
        />

        <ImageZoom
          src={baseUrl + "mm4.jpg"}
          className="border-[1px] border-gray-300"
        />

        <ImageZoom
          src={baseUrl + "mm5.jpg"}
          className="border-[1px] border-gray-300"
        />
      </Slider>
    </div>
  );
}

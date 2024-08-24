import propTypes from "prop-types";

////////////////
// fake data  //
////////////////

const featurePromoData = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 256 256"
      >
        <path d="M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z"></path>
      </svg>
    ),
    title: "free worldwide shipping",
    descryption: "On order over $150",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 256 256"
      >
        <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
      </svg>
    ),
    title: "money back guarantee",
    descryption: "cash on delivery",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 256 256"
      >
        <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
      </svg>
    ),
    title: "special gift card",
    descryption: "offer special bonuses with gift",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 256 256"
      >
        <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
      </svg>
    ),
    title: "best online support",
    descryption: "Call us 24/7 at 123-456-789",
  },
];

//////////////////////
// main Conponent   //
//////////////////////

function FeaturePromo() {
  return (
    <div className="grid-row-2 container mx-auto mt-20 grid grid-cols-2 gap-3 border-gray-300 px-2 md:flex md:justify-center md:border-b-2 md:pb-8 lg:gap-5 lg:px-0 lg:pb-16">
      {featurePromoData.map((el, key) => (
        <FeaturePromoItem data={el} key={key} />
      ))}
    </div>
  );
}

export default FeaturePromo;

FeaturePromoItem.propTypes = {
  data: propTypes.object,
};

function FeaturePromoItem({ data }) {
  const { svg, title, descryption } = data;
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-1 text-balance text-center capitalize">
      <div className="relative mb-2 size-12 rounded-full bg-white hover:bg-lima-400 md:size-16">
        {svg}
      </div>
      <h3 className="text-xs md:text-sm lg:text-lg xl:text-xl">
        {/* <h3 className="text-xs capitalize md:text-sm lg:text-lg xl:text-xl"> */}
        {title}
      </h3>
      <span className="mt-1 text-xs text-gray-700 lg:text-sm">
        {/* <span className="mt-1 text-balance text-center text-xs capitalize text-gray-700 lg:text-sm"> */}
        {descryption}
      </span>
    </div>
  );
}

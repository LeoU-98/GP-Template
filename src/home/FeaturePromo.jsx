import propTypes from "prop-types";
import { featurePromoData } from "../utils/StaticData";

function FeaturePromo() {
  return (
    <div className="grid-row-2 container mx-auto grid grid-cols-2 gap-3 border-gray-300 px-4 pt-16 md:flex md:justify-center md:border-b-2 md:pb-8 lg:gap-5 lg:pb-16">
      {featurePromoData.map((el, key) => (
        <FeaturePromoItem data={el} key={key} />
      ))}
    </div>
  );
}

export default FeaturePromo;

function FeaturePromoItem({ data }) {
  const { svg, title, descryption } = data;

  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-1 text-balance text-center capitalize">
      <div className="relative mb-2 flex size-12 items-center justify-center rounded-full bg-white duration-300 hover:bg-lima-400 hover:fill-white md:size-16">
        {svg}
      </div>
      <h3 className="text-xs md:text-sm lg:text-lg xl:text-xl">{title}</h3>
      <p className="mt-1 text-xs text-gray-700 lg:text-sm">{descryption}</p>
    </div>
  );
}

FeaturePromoItem.propTypes = {
  data: propTypes.object,
};

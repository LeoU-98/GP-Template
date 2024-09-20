import propTypes from "prop-types";

export default function FeatureLine({ data }) {
  const { featureIcon, featureDesc } = data;
  return (
    <li className="flex gap-1">
      <div className="relative top-[-1px]">{featureIcon}</div>
      <p className="text-sm">{featureDesc}</p>
    </li>
  );
}

FeatureLine.propTypes = {
  data: propTypes.object,
};

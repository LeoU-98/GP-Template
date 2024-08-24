import propTypes from "prop-types";

///////////////////////////////
//     Filter Data & Options //
///////////////////////////////

const filterData = [
  {
    title: "Categories",
    optionsList: [
      {
        optionTitle: "gloves",
      },
      {
        optionTitle: "hand trowel",
      },
      {
        optionTitle: "pruning shears",
      },
    ],
  },
  {
    title: "size",
    optionsList: [
      {
        optionTitle: "s",
      },
      {
        optionTitle: "m",
      },
      {
        optionTitle: "l",
      },
      {
        optionTitle: "XL",
      },
    ],
  },
  {
    title: "color",
    optionsList: [
      {
        optionTitle: "white",
      },
      {
        optionTitle: "black",
      },
    ],
  },
  {
    title: "composition",
    optionsList: [
      {
        optionTitle: "ceramic",
      },
      {
        optionTitle: "cotton",
      },
      {
        optionTitle: "matt paper",
      },
      {
        optionTitle: "polyester",
      },
      {
        optionTitle: "recycled cardboard",
      },
    ],
  },
  {
    title: "property",
    optionsList: [
      {
        optionTitle: "120 pages",
      },
      {
        optionTitle: "long sleeves",
      },
      {
        optionTitle: "removable cover",
      },
      {
        optionTitle: "short sleeves",
      },
    ],
  },
  {
    title: "dimension",
    optionsList: [
      {
        optionTitle: "40x60 cm",
      },
      {
        optionTitle: "60x90 cm",
      },
      {
        optionTitle: "80x120 cm",
      },
    ],
  },
  {
    title: "paper type",
    optionsList: [
      {
        optionTitle: "ruled",
      },
      {
        optionTitle: "plain",
      },
      {
        optionTitle: "squarred",
      },
      {
        optionTitle: "doted",
      },
    ],
  },
];

////////////////////////////////////

function FilterBy() {
  return (
    <div className="flex w-64 flex-col border-[1px] border-gray-300 bg-white pb-3">
      <h2 className="mb-5 border-b-[1px] border-gray-300 py-3 ps-3 text-sm font-semibold uppercase">
        filter by
      </h2>
      <div className="mt-1 flex flex-col gap-1">
        {filterData.map((el, key) => (
          <FilterSection data={el} key={key} />
        ))}
      </div>
    </div>
  );
}

export default FilterBy;

////////////////////////

FilterSection.propTypes = {
  data: propTypes.object,
};

function FilterSection({ data }) {
  const { title, optionsList } = data;

  return (
    <section className="px-3">
      <h3 className="font-semibold capitalize text-gray-800">{title}</h3>
      <ul className="">
        {optionsList.map((el, key) => (
          <FilterOption data={el} key={key} />
        ))}
      </ul>
    </section>
  );
}

FilterOption.propTypes = {
  data: propTypes.object,
};

function FilterOption({ data }) {
  const { optionTitle } = data;

  return (
    <li>
      <input className="hidden" type="checkbox" id={`check-${optionTitle}`} />
      <label
        className="flex h-8 cursor-pointer items-center rounded px-1"
        htmlFor={`check-${optionTitle}`}
      >
        <span className="checkbox-inner flex items-center justify-center rounded-full border-2 border-gray-300 text-transparent"></span>
        <span className="mx-2 select-none capitalize text-gray-900 hover:text-lima-500">
          {optionTitle}
        </span>
      </label>
    </li>
  );
}

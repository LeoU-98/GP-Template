import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";

Pagination.propTypes = {
  pageCount: propTypes.number,
  onPageChange: propTypes.func,
};

// export default function Pagination({ pageCount, onPageChange }) {
//   const [active, setActive] = React.useState(1);

//   const getItemProps = (index) => ({
//     className: `rounded-full bg-white text-gray-900 ${active === index ? "bg-lima-500 text-white" : ""}`,
//     // onClick: () => handlePageButtonClick(index),
//     onClick: () => setActive(index),
//   });

//   const next = () => {
//     if (active === pageCount) return;

//     setActive(active + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;

//     setActive(active - 1);
//   };

//   // Function to calculate page numbers
//   const pageNumbers = [];
//   for (let i = 1; i <= pageCount; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <>
//       {/* mobile pagination  */}
//       <div className="mx-auto mt-4 flex w-fit items-center gap-4 sm:hidden">
//         <IconButton
//           size="sm"
//           onClick={prev}
//           disabled={active === 1}
//           className="rounded-full bg-lima-500"
//         >
//           <ArrowLeftIcon strokeWidth={2} className="size-4" />
//         </IconButton>
//         <div className="font-normal">
//           Page <strong className="text-gray-900">{active}</strong> of
//           <strong className="text-gray-900"> {pageCount}</strong>
//         </div>
//         <IconButton
//           size="sm"
//           onClick={next}
//           disabled={active === 10}
//           className="rounded-full bg-lima-500"
//         >
//           <ArrowRightIcon strokeWidth={2} className="size-4" />
//         </IconButton>
//       </div>
//       {/* wider screen pagination  */}
//       <div className="mt-4 hidden items-center justify-center gap-4 border-[1px] border-gray-300 bg-white py-1 sm:flex">
//         <Button
//           variant="text"
//           className="flex items-center gap-2 rounded-full bg-white text-lima-500 hover:bg-lima-500 hover:text-white"
//           onClick={prev}
//           disabled={active === 1}
//         >
//           <ArrowLeftIcon strokeWidth={2} className="size-4" /> Prev
//         </Button>
//         <div className="flex items-center gap-2">
//           {pageNumbers.map((number, key) => (
//             <div key={key} onClick={() => onPageChange(active)}>
//               <IconButton {...getItemProps(2)}>{number}</IconButton>
//             </div>
//           ))}

//           {/* <IconButton {...getItemProps(1)}>1</IconButton>
//           <IconButton {...getItemProps(2)}>2</IconButton>
//           <IconButton {...getItemProps(3)}>3</IconButton>
//           <IconButton {...getItemProps(4)}>4</IconButton>
//           <IconButton {...getItemProps(5)}>5</IconButton> */}
//         </div>
//         <Button
//           variant="text"
//           className="flex items-center gap-2 rounded-full bg-white text-lima-500 hover:bg-lima-500 hover:text-white"
//           onClick={next}
//           disabled={active === 5}
//         >
//           Next
//           <ArrowRightIcon strokeWidth={2} className="size-4" />
//         </Button>
//       </div>
//     </>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

export default function Pagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    className: `rounded-full bg-white text-gray-900 ${active === index ? "bg-lima-500 text-white" : ""}`,
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <>
      {/* mobile pagination  */}
      <div className="mx-auto mt-4 flex w-fit items-center gap-4 sm:hidden">
        <IconButton
          size="sm"
          onClick={prev}
          disabled={active === 1}
          className="rounded-full bg-lima-500"
        >
          <ArrowLeftIcon strokeWidth={2} className="size-4" />
        </IconButton>
        <div className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of
          <strong className="text-gray-900"> 5</strong>
        </div>
        <IconButton
          size="sm"
          onClick={next}
          disabled={active === 10}
          className="rounded-full bg-lima-500"
        >
          <ArrowRightIcon strokeWidth={2} className="size-4" />
        </IconButton>
      </div>
      {/* wider screen pagination  */}
      <div className="mt-4 hidden items-center justify-center gap-4 border-[1px] border-gray-300 bg-white py-1 sm:flex">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full bg-white text-lima-500 hover:bg-lima-500 hover:text-white"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="size-4" /> Prev
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full bg-white text-lima-500 hover:bg-lima-500 hover:text-white"
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="size-4" />
        </Button>
      </div>
    </>
  );
}

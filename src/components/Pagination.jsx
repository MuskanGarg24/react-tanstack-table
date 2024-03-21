// Pagination.jsx component to render the pagination.
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const Pagination = ({ table }) => {
  console.log(table);
  return (
    <div className="flex justify-center space-x-2 my-9">
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <img src={rightArrow} alt="left" className="w-5 h-5" />
      </button>
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg"
        onClick={() => table.setPageIndex(0)}
      >
        1
      </button>
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg sm:block hidden"
        onClick={() => table.setPageIndex(1)}
      >
        2
      </button>
      <p className="mt-5">.....</p>
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg sm:block hidden"
        onClick={() => table.setPageIndex(table.getPageCount() - 2)}
      >
        9
      </button>
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        10
      </button>
      <button
        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <img src={leftArrow} alt="left" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;

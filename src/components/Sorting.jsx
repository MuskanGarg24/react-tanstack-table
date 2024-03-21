// Sorting component for the sidebar
import sortIcon from "../assets/sort.png";

const Sorting = ({ table, toggleSidebar }) => {
  // Function to clear sorting
  const clearSorting = () => {
    table.resetSorting();
    toggleSidebar();
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Sorting Options</h1>
      <div className="my-5">
        {table.getAllLeafColumns().map((column) => {
          return (
            <div
              key={column.id}
              className="border-2 border-gray-100 mb-3 p-3 rounded-lg"
            >
              <label className="flex justify-between">
                {column.columnDef.header}
                <img
                  src={sortIcon}
                  alt="sort"
                  className="w-4 h-4 cursor-pointer mt-1"
                  onClick={() => column.toggleSorting()}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full"
          onClick={clearSorting}
        >
          Clear Sorting
        </button>
      </div>
    </div>
  );
};

export default Sorting;

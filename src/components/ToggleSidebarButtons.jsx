// ToggleSidebarButtons component to render the toggle sidebar buttons and global search filter.

import eyeIcon from "../assets/eye.png";
import sortIcon from "../assets/sort.png";
import groupIcon from "../assets/group.png";
import filterIcon from "../assets/filter.png";

const ToggleSidebarButtons = ({
  toggleSidebar,
  globalFilter,
  setGlobalFilter,
}) => {
  return (
    <div className="sm:flex sm:justify-end space-x-7 sm:mb-12 mb-2">
      {/* Search filter input field */}
      <input
        type="text"
        value={globalFilter ?? ""}
        className="px-3 py-2 font-lg border-2 border-[#ababab] rounded-lg focus:outline-none sm:w-[20vw] w-full"
        placeholder="Search"
        onChange={(e) => setGlobalFilter(e.target.value)}
      />

      {/* Toggle sidebar buttons */}
      <div className="flex justify-center space-x-4 mt-9 sm:mt-2">
        <img
          src={eyeIcon}
          alt="eye"
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleSidebar("column visibility")}
        />
        <img
          src={sortIcon}
          alt="sort"
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleSidebar("Sorting")}
        />
        <img
          src={groupIcon}
          alt="group"
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleSidebar("Grouping")}
        />
        <img
          src={filterIcon}
          alt="filter"
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleSidebar("Filters")}
        />
      </div>
    </div>
  );
};

export default ToggleSidebarButtons;

import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getGroupedRowModel,
} from "@tanstack/react-table";
import Tdata from "../data/data";
import Sidebar from "./Sidebar";

const MainTable = () => {
  const [data, setData] = useState(Tdata);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [featureName, setFeatureName] = useState("");
  const [sorting, setSorting] = useState([]);
  const [grouping, setGrouping] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  useEffect(() => {
    setData(Tdata);
  }, []);

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "subcategory",
      header: "Subcategory",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "sale_price",
      header: "Sale Price",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      globalFilter,
      sorting,
      grouping,
      columnFilters,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onGroupingChange: setGrouping,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
  });

  const toggleSideBarVisibility = (name) => {
    setFeatureName(name);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="w-[90vw] mx-auto mt-14">
      <Sidebar
        open={sidebarOpen}
        toggleSidebar={toggleSideBarVisibility}
        table={table}
        featureName={featureName}
      />
      <div className="flex justify-end space-x-5">
        <input
          type="text"
          value={globalFilter ?? ""}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => toggleSideBarVisibility("column visibility")}
        >
          Show/Hide Columns
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => toggleSideBarVisibility("Sorting")}
        >
          Sorting
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => toggleSideBarVisibility("Grouping")}
        >
          Grouping
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => toggleSideBarVisibility("Filters")}
        >
          Filters
        </button>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} className="text-center">
                          {header.column.columnDef.header}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="text-center py-3">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* pagination from 1 to 10 */}
        <div className="flex justify-center space-x-2 mb-9">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => table.setPageIndex(0)}
          >
            1
          </button>
          {Array.from({ length: 8 }, (_, i) => i + 2).map((page) => (
            <button
              key={page}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTable;

// MainTable component to display the table and sidebar

import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getGroupedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
} from "@tanstack/react-table";
import Sidebar from "./Sidebar";
import ToggleSidebarButtons from "./ToggleSidebarButtons";
import Table from "./Table";
import Pagination from "./Pagination";
import dayjs from "dayjs";
import Tdata from "../data/data";

// Function to rank the item based on the value
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

// Function to rank the item based on the value
const dateBetweenFilterFn = (row, columnId, value) => {
  const date = row.getValue(columnId);
  const [start, end] = value;
  if ((start || end) && !date) return false;
  if (start && !end) {
    return new Date(date).getTime() >= new Date(start).getTime();
  } else if (!start && end) {
    return new Date(date).getTime() <= new Date(end).getTime();
  } else if (start && end) {
    return (
      new Date(date).getTime() >= new Date(start).getTime() &&
      new Date(date).getTime() <= new Date(end).getTime()
    );
  } else return true;
};

// Function to rank the item based on the value
dateBetweenFilterFn.autoRemove;

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
      cell: (props) => dayjs(props.getValue()).format("DD/MM/YYYY"),
      filterFn: "dateBetweenFilterFn",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (props) => dayjs(props.getValue()).format("DD/MM/YYYY"),
      filterFn: "dateBetweenFilterFn",
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
    filterFns: {
      fuzzy: fuzzyFilter,
      dateBetweenFilterFn: dateBetweenFilterFn,
    },
    globalFilterFn: fuzzyFilter,
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
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
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
      <ToggleSidebarButtons
        toggleSidebar={toggleSideBarVisibility}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table table={table} flexRender={flexRender} />
      <Pagination table={table} />
    </div>
  );
};

export default MainTable;

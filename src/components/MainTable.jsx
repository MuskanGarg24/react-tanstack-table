import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Tdata from "../data/data";

const MainTable = () => {
  const [data, setData] = useState(Tdata);

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
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-[90vw] mx-auto mt-36">
      <div className="px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default MainTable;

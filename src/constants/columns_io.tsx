import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ICard } from "@/interfaces/models/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IOHistory } from "@/interfaces/models/history";

export const columnsIO: ColumnDef<ICard | IOHistory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "uid",
    header: "Mã thẻ",
    cell: ({ row }) => <div className="capitalize">{row.getValue("uid")}</div>,
  },
  {
    accessorKey: "card_type",
    header: "Loại thẻ",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("card_type")}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Giờ vào/ra",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("created_at")}</div>
    ),
  },
  {
    accessorKey: "vehicle_type",
    header: "Loại xe",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("vehicle_type")}</div>
    ),
  },
  {
    accessorKey: "crop_url",
    header: "Biển số xe",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("crop_url")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
            <DropdownMenuItem>Xóa</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

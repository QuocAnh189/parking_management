import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ICard } from "@/interfaces/systems";

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
import { ECardType, EVehicleType } from "@/interfaces/models/card";
import dayjs from "dayjs";

export const columnsCard: ColumnDef<ICard | IOHistory | any>[] = [
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
      <div className="capitalize">
        {row.getValue("card_type") === ECardType.MONTH
          ? "Thẻ tháng"
          : "Thẻ ngày"}
      </div>
    ),
  },
  {
    accessorKey: "owner_name",
    header: "Tên chủ thẻ",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("owner_name")}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Ngày đăng ký",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("created_at")}</div>
    ),
  },
  {
    accessorKey: "vehicle_type",
    header: "Loại xe",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("vehicle_type") === EVehicleType.MOTORBIKE
          ? "Xe gắn máy"
          : "Xe ô tô"}
      </div>
    ),
  },
  {
    accessorKey: "license_plate",
    header: "Biển số xe",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("license_plate")}</div>
    ),
  },
  {
    accessorKey: "exp_date",
    header: "Ngày hết hạn",
    cell: ({ row }) => (
      <div className="capitalize">
        {dayjs(row.getValue("exp_date")).format("DD/MM/YYYY")}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      // const payment = row.original;

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

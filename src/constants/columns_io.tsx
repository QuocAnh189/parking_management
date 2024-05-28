import { ColumnDef } from "@tanstack/react-table";
import { ICard } from "@/interfaces/models/card";
import { IOHistory } from "@/interfaces/models/history";
import dayjs from "dayjs";

export const columnsIO: ColumnDef<ICard | IOHistory>[] = [
  {
    id: "uid",
    accessorKey: "uid",
    header: "Mã thẻ",
    cell: ({ row }) => <div className="capitalize">{row.getValue("uid")}</div>,
  },
  {
    id: "type",
    accessorKey: "type",
    header: "Trạng thái",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("type") === "IN" ? "Vào" : "Ra"}
      </div>
    ),
  },
  {
    accessorKey: "card_type",
    header: "Loại thẻ",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("card_type") === "MONTH" ? "Thẻ tháng" : "Thẻ ngày"}
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Giờ vào/ra",
    cell: ({ row }) => (
      <div className="capitalize">
        {dayjs(row.getValue("created_at")).format("DD/MM/YYYY hh:mm:ss A")}
      </div>
    ),
  },
  {
    accessorKey: "vehicle_type",
    header: "Loại xe",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("vehicle_type") === "MOTORBIKE"
          ? "Xe gắn máy"
          : "Xe ô tô"}
      </div>
    ),
  },
  {
    accessorKey: "crop_url",
    header: "Biển số xe",
    cell: ({ row }) => (
      <div className="capitalize w-20">
        <img loading="lazy" src={row.getValue("crop_url")} />
      </div>
    ),
  },
];

import dayjs from "dayjs";

export enum ECardType {
  MONTH = "MONTH",
  DAY = "DAY",
}

export enum EVehicleType {
  CAR = "CAR",
  MOTORBIKE = "MOTORBIKE",
}

export interface ICard {
  id?: string;
  card_type: ECardType;
  uid: string;
  owner_name?: string;
  created_at: any;
  vehicle_type: EVehicleType;
  license_plate?: string;
  exp_date?: any;
}

export const initCard = {
  uid: "",
  card_type: ECardType.MONTH,
  owner_name: "",
  created_at: dayjs(new Date()).format("YYYY-MM-DD").toString(),
  vehicle_type: EVehicleType.MOTORBIKE,
  license_plate: "",
  exp_date: "",
} as ICard;

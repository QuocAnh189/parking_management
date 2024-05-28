import { EVehicleType } from "./card";

export enum EInOut {
  IN = "IN",
  OUT = "OUT",
}
export interface IOHistory {
  id?: string;
  type: EInOut;
  uid: string;
  card_type: string;
  vehicle_type: EVehicleType;
  img_url: string;
  crop_url: string;
  created_at: any;
}

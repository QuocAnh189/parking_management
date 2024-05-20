import { EVehicleType } from "./card";

export interface IOHistory {
  id?: string;
  uid: string;
  card_type: string;
  vehicle_type: EVehicleType;
  img_url: string;
  crop_url: string;
  created_at: any;
}

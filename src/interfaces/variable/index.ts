import { ECardType, EVehicleType } from "../models/card";
import { IOHistory } from "../models/history";
import { IUser } from "../models/user";
import { ICard } from "../systems";
import { EInOut } from "../models/history";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: IUser;
  access: string;
  refresh: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface InOutPayload {}

export interface InOutResponse {
  card_type: ECardType;
  created_at: any;
  crop_url: string;
  img_url: string;
  type: EInOut;
  uid: string;
  vehicle_type: EVehicleType;
  plate_number: string;
}

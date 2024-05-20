import { IOHistory } from "../models/history";
import { IUser } from "../models/user";
import { ICard } from "../systems";

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
  message: string;
  card_info: ICard;
  crop_image: string;
  io: IOHistory;
}

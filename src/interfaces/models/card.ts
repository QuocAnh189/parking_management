export enum EVehicleType {
  CAR = "CAR",
  MOTORBIKE = "MOTORBIKE",
}

export interface ICard {
  id?: string;
  owner_name: string;
  vehicel_type: EVehicleType;
  license_plate: string;
  uid: string;
  exp_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface ILink {
  name: string;
  icon: any;
  path: string;
}

export interface ICard {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export interface User {
  _id: number;
  name: string;
}

export interface Partner {
  _id: string;
  name: string;
  reception: string;
  city: string;
  isInstitute: boolean;
}

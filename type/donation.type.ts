export interface DonationType {
  id: string;
  user_name: string;
  date?: Date;
  phone?: string;
  donation: number;
  message?: string;
  program: {
    id: string;
    name: string;
  };
}

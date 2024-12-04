export interface DonationType {
  id: string;
  user_name: string;
  date?: Date;
  phone?: string;
  donation: number;
  message?: string;
  created_at: Date;
  program: {
    id: string;
    name: string;
  };
}

export interface DonationPostType {
  user_name: string;
  phone?: string;
  donation: number;
  message?: string;
}

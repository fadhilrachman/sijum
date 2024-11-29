export interface AdminType {
  id: string;
  user_name: string;
  email: string;
  is_super_admin: boolean;
}

export interface CreateAdminType {
  user_name: string;
  email: string;
  password: string;
}

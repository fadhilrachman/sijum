import { ImgType } from "./shared.type";

export interface ProgramType {
  id: string;
  name: string;
  target_date_donation?: Date;
  is_not_target_donaion: boolean;
  target_nominal: number;
  description?: string;
  thumbnail: ImgType;
  total_donation: number;
}

export interface ProgramPostType {
  name: string;
  target_date_donation?: Date;
  is_not_target_donaion: boolean;
  is_not_target_date_donation: boolean;
  target_nominal: number;
  description?: string;
  thumbnail_img_id?: string;
}

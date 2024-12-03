import { ImgType } from "./shared.type";

export interface NewsType {
  id: string;
  date: Date;
  is_not_target_donaion: boolean;
  program_id: string;
  description?: string;
  thumbnail: ImgType;
}

export interface NewsPostType {
  date: Date;
  thumbnail_img_id: string;
  description?: string;
}

export interface BaseResponseListType<T> {
  result: T[];
  pagination: {
    current: number;
    total_page: number;
    total_data: number;
  };
}

export interface ImgType {
  id: string;
  url: string;
}

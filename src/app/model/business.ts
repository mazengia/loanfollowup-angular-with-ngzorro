import {Page} from "./page";
 export interface Business{
  id?: number;
  name: string;
}
export interface BusinessResponse {
  _embedded: {
    businessFormDtoes: Business[];
  };
  page:Page;
}


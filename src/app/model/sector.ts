import {Page} from "./page";

export interface Sector
{
  id?:number;
  name:string;
}

export interface SectorResponse
{
  _embedded: {
    sectorDToes: Sector[]
  };
  page:Page;
}

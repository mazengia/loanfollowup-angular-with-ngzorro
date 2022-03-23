import {Page} from "./page";

export interface Collateral {
  id: number;
  name:	string;
  collateralDegree:	string;
}
export interface CollateralResponse
{
  _embedded: {
    collateralDToes:Collateral[]
  };
  page:Page;
}

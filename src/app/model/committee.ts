import {Page} from "./page";

export interface Committee {
  id: number;
  title:	string;
  type:	string;
}
export interface CommitteeResponse
{
  _embedded: {
    committeeDToes:Committee[]
  };
  page:Page;
}

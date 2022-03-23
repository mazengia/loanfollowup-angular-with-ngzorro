import {Category} from './category';
import {Page} from "./page";
import {Branch} from './branch';
import {Department} from './department';

export interface Operator{
  id: number;
  firstName: string ;
  middleName: string;
  lastName: string;
  employeeId: string;
  branchCode: string;
  departmentCode: string;

}
export interface OperatorResponse {
  _embedded: {
    operatorDtoes:Operator[],
    category: Category,
    branch:Branch,
    department:Department
  };

  page:Page;
}

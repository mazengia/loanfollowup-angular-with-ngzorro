import {Branch} from './branch';
import {Department} from './department';


export  interface Employee{
  branch:Branch[]
  department:Department[]
  employeeId	:string
  firstName	:string
  id?:number
  lastName	:string
  middleName	:string
}
export interface EmployeeResponse{
  content: Employee[];
  page:number;
  size:number;
  totalElements:number;
}

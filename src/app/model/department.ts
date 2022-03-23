import {Page} from './page';

export interface Department{
  id? :string;
  name	:string;
  code	:string;

}
export  interface DepartmentResponse{
  content: Department[];
  page:Page;
}

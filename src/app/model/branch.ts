import {Page} from './page';

export interface Branch{
  id?	: number;
  name	: string
  code	: string;
}
export interface BranchResponse{
  content: Branch[];
  page:Page;
}

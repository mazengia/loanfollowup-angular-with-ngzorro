import {Page} from './page';

export interface Category
{
  id?:number;
  title:string;
}

export interface CategoryResponse
{
  _embedded: {
    categoryDToes: Category[];
  };
  page:Page;
}

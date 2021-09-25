import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectorComponent} from './pages/sector/sector.component';
import {DepartmentComponent} from './pages/department/department.component';
import {BusinessComponent} from './pages/business/business.component';
import {CategoryComponent} from './pages/category/category.component';


const routes: Routes = [
  {  path: '', pathMatch: 'full', redirectTo: '/welcome'  },
  {  path: 'welcome', component: WelcomeComponent  },
  {  path: 'sector', component: SectorComponent  },
  {  path: 'department', component: DepartmentComponent  },
  {  path: 'business', component: BusinessComponent  },
  {  path: 'category', component: CategoryComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

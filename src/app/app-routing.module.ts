import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectorComponent} from './pages/sector/sector.component';
import {DepartmentComponent} from './pages/department/department.component';
import {BusinessComponent} from './pages/business/business.component';
 import {CollateralComponent} from './pages/collateral/collateral.component';
import {OperatorComponent} from "./pages/operator/operator.component";
import {CommitteeComponent} from "./pages/committee/committee.component";
import {CategoryComponent} from "./pages/category/category.component";


const routes: Routes = [
  // {  path: '', pathMatch: 'full', redirectTo: '/welcome'  },
  {  path: 'welcome', component: WelcomeComponent  },
  {  path: 'business', component: BusinessComponent  },
  {  path: 'category', component: CategoryComponent  },
  {  path: 'collateral', component: CollateralComponent},
  {  path: 'department', component: DepartmentComponent  },
  {  path: 'sector', component: SectorComponent  },
  {  path: 'operator', component: OperatorComponent  },
  {  path: 'committee', component: CommitteeComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

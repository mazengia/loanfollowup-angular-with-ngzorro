import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzBackTopModule} from 'ng-zorro-antd/back-top';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzAnchorModule} from 'ng-zorro-antd/anchor';
import {IconsProviderModule} from './icons-provider.module';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzAffixModule} from 'ng-zorro-antd/affix';
import {SectorComponent} from './pages/sector/sector.component';
import {DepartmentComponent} from './pages/department/department.component';
import {OperatorComponent} from './pages/operator/operator.component';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {CollateralComponent} from './pages/collateral/collateral.component';
 import {RequestInterceptorService} from './services/request-interceptor.service';
import {BusinessComponent} from './pages/business/business.component';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NzSelectModule} from "ng-zorro-antd/select";
import {CommitteeComponent} from "./pages/committee/committee.component";
 import {CreateUpdateCategoryComponent} from "./pages/category/create-update-category/create-update-category.component";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CreateUpdateSectorComponent} from "./pages/sector/create-update-sector/create-update-sector.component";
import {CategoryComponent} from "./pages/category/category.component";
import {CreateUpdateOperatorComponent} from "./pages/operator/create-update-operator/create-update-operator.component";
import {CreateUpdateBusinessComponent} from "./pages/business/create-update-business/create-update-business.component";
import {CreateUpdateCollateralComponent} from "./pages/collateral/create-update-collateral/create-update-collateral.component";
import {CreateUpdateCommitteeComponent} from "./pages/committee/create-update-committee/create-update-committee.component";
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CommitteeComponent,
    MainNavComponent,
    SectorComponent,
    OperatorComponent,
    DepartmentComponent,
    CollateralComponent,
    BusinessComponent,
    CategoryComponent,
    CreateUpdateCategoryComponent,
    CreateUpdateSectorComponent,
    CreateUpdateOperatorComponent,
    CreateUpdateBusinessComponent,
    CreateUpdateCollateralComponent,
    CreateUpdateCommitteeComponent
  ],
  imports: [
    BrowserModule,
    ResizeObserverModule,
    AppRoutingModule,
    OAuthModule.forRoot(
      {
        resourceServer: {
          allowedUrls: ['http://api.enatbanksc.com/','http://localhost:4200/'],
          sendAccessToken: true
        }
      }
    ),
    HttpClientModule,
    NzLayoutModule,
    NzButtonModule,
    FormsModule,
    NzIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzTableModule,
    NzFormModule,
    NzDrawerModule,
    NzDropDownModule,
    NzInputModule,
    NzPopconfirmModule,
    NzToolTipModule,
    NzSelectModule,
    NzDividerModule,
    ReactiveFormsModule

  ],
  providers:
    [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    { provide: NZ_ICONS, useValue: icons },
    NzNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

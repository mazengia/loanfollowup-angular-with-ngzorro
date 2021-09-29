import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
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
import {SectorComponent} from "./pages/sector/sector.component";
import {DepartmentComponent} from "./pages/department/department.component";
import {ResizeObserverModule} from "@ng-web-apis/resize-observer";
import {OperatorComponent} from "./pages/operator/operator.component";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NZ_ICONS} from "ng-zorro-antd/icon";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzInputModule} from "ng-zorro-antd/input";
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainNavComponent,
    SectorComponent,
    OperatorComponent,
    DepartmentComponent
  ],
    imports: [
        BrowserModule,
        ResizeObserverModule,
        AppRoutingModule,
        OAuthModule.forRoot(
            {
                resourceServer: {
                    allowedUrls: ['http://api.enatbanksc.com/'],
                    sendAccessToken: true
                }
            }
        ),
        HttpClientModule,
        NzLayoutModule,
        NzButtonModule,
        FormsModule,
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
        NzDrawerModule,
        NzFormModule,
        NzTableModule,
        NzDropDownModule,
        NzInputModule,

    ],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {NzPipesModule} from 'ng-zorro-antd/pipes';
import {NzResizableModule} from 'ng-zorro-antd/resizable';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzTreeViewModule} from 'ng-zorro-antd/tree-view';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzTransferModule} from 'ng-zorro-antd/transfer';
import {NzTransButtonModule} from 'ng-zorro-antd/core/trans-button';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzNoAnimationModule} from 'ng-zorro-antd/core/no-animation';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzMentionModule} from 'ng-zorro-antd/mention';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzI18nModule} from 'ng-zorro-antd/i18n';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import {SectorComponent} from './pages/sector/sector.component';
import {OperatorComponent} from './pages/operator/operator.component';
import {DepartmentComponent} from './pages/department/department.component';
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
    ReactiveFormsModule ,
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
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzImageModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeViewModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzPipesModule,


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
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzImageModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeViewModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzPipesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

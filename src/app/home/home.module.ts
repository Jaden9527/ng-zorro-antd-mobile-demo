import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CalendarComponent } from './calendar/calendar.component';

const COMPONENTS = [
  CalendarComponent
];
const COMPONENTS_EXPORT = [

];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdMobileModule,
  ],
  declarations: [
    ...COMPONENTS, ...COMPONENTS_EXPORT
  ],
  providers:[],
  exports: COMPONENTS_EXPORT
})
export class HomeModule { }

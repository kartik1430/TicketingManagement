import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy , DatePipe} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
// import {Ng2OrderModule} from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  TableModule,
  UtilitiesModule, 
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { RolemasterComponent } from './rolemaster/rolemaster.component';
import { EmployeeComponent } from './employee/employee.component';
import { DesignationComponent } from './designation/designation.component';
import { EducationComponent } from './education/education.component';
import { DepartmentComponent } from './department/department.component';
import { BloodgroupComponent } from './bloodgroup/bloodgroup.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { BloodgrouplistComponent } from './bloodgrouplist/bloodgrouplist.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { DesignationlistComponent } from './designationlist/designationlist.component';
import { EducationlistComponent } from './educationlist/educationlist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { TicketComponent } from './ticketmaster/ticket/ticket.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, RolemasterComponent, EmployeeComponent, DesignationComponent, EducationComponent, DepartmentComponent, BloodgroupComponent, CountryComponent, StateComponent, CityComponent, EmployeelistComponent, BloodgrouplistComponent, RolelistComponent, DesignationlistComponent, EducationlistComponent, DepartmentlistComponent, ],
  imports: [
    BrowserModule, MatIconModule,
    BrowserAnimationsModule, 
    AppRoutingModule, MatTableModule,
    AvatarModule, MatButtonModule,
    BreadcrumbModule, NgxPaginationModule,
    FooterModule,
    DropdownModule,
    GridModule, 
    HeaderModule, Ng2SearchPipeModule,
    SidebarModule, MatPaginatorModule,
    IconModule,  MatToolbarModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule, FormsModule,
    SidebarModule,
    SharedModule, Ng2OrderModule,
    TabsModule,
    TableModule,
    UtilitiesModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule, MatInputModule,
    ListGroupModule,
    CardModule, MatFormFieldModule, MatSortModule,
    HttpClientModule, TableModule, UtilitiesModule
  ],
  providers: [
    {
      
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    DatePipe,
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

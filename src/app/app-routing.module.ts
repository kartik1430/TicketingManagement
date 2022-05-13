import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard as AuthGuard } from './auth/auth.guard';
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { RolemasterComponent } from './rolemaster/rolemaster.component';
import { EmployeeComponent } from './employee/employee.component';
import { DesignationComponent } from './designation/designation.component';
import { EducationComponent } from './education/education.component';
import { DepartmentComponent } from './department/department.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { BloodgroupComponent } from './bloodgroup/bloodgroup.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { BloodgrouplistComponent } from './bloodgrouplist/bloodgrouplist.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { DesignationlistComponent } from './designationlist/designationlist.component';
import { EducationlistComponent } from './educationlist/educationlist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import {MenuGuard} from './auth/menu.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule) , canActivate:[AuthGuard]
      },
      {
        path: 'rolemaster',
        component : RolemasterComponent, canActivate:[MenuGuard],
        data: {
          title: 'Role',
        },
      },
      {
        path: 'rolelist',
        component : RolelistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Roles'
        },
      },
      {
        path: 'edit/:id',
        component : RolemasterComponent, canActivate:[MenuGuard],
        data: {
          title: 'EditRole'
        },
      },
      {
        path: 'employeelist',
        component : EmployeelistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Employees'
        },
      },
      {
        path: 'employee',
        component : EmployeeComponent, canActivate:[MenuGuard],
        data: {
          title: 'Employee'
        },
      },
      {
        path: 'employeeedit/:id',
        component : EmployeeComponent, canActivate:[MenuGuard],
        data: {
          title: 'Employee'
        },
      },
      {
        path: 'designation',
        component : DesignationComponent, canActivate:[MenuGuard],
        data: {
          title: 'Designation'
        },
      },
      {
        path: 'designationlist',
        component : DesignationlistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Designations'
        },
      },
      {
        path: 'designationedit/:id',
        component : DesignationComponent, canActivate:[MenuGuard],
        data: {
          title: 'EditDesignation'
        },
      },
      
      {
        path: 'education',
        component : EducationComponent, canActivate:[MenuGuard],
        data: {
          title: 'Education'
        },
      },
      {
        path: 'educationlist',
        component : EducationlistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Educations'
        },
      },
      {
        path: 'educationedit/:id',
        component : EducationComponent, canActivate:[MenuGuard],
        data: {
          title: 'EditEducation'
        },
      },
      {
        path: 'department',
        component : DepartmentComponent, canActivate:[MenuGuard],
        data: {
          title: 'Department'
        },
      },
      {
        path: 'departmentedit/:id',
        component : DepartmentComponent, canActivate:[MenuGuard],
        data: {
          title: 'EditDepartment'
        },
      },
      
      {
        path: 'departmentlist',
        component : DepartmentlistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Departments'
        },
      },
      {
        path: 'country',
        component : CountryComponent, canActivate:[MenuGuard],
      },
      {
        path: 'state',
        component : StateComponent, canActivate:[MenuGuard],
      },
      {
        path: 'city',
        component : CityComponent, canActivate:[MenuGuard],
      },
      {
        path: 'bloodgroup',
        component : BloodgroupComponent, canActivate:[MenuGuard],
        data: {
          title: 'Bloodgroup'
        },
      },
      {
        path: 'bloodgrouplist',
        component : BloodgrouplistComponent, canActivate:[MenuGuard],
        data: {
          title: 'Bloodgroups'
        },
      },
      {
        path: 'bloodgroupedit/:id',
        component : BloodgroupComponent, canActivate:[MenuGuard],
        data: {
          title: 'EditBloodgroup'
        },
      },
      {
        path: 'ticketmaster',
        loadChildren: () =>
          import('./ticketmaster/ticketmaster.module').then((m) => m.TicketmasterModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '**',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import {TicketComponent} from './ticket/ticket.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: 'ticket',
        component: TicketComponent,
        data: {
          title: 'Ticket',
        },
      },
      {
        path: 'add-edit-ticket',
        component: AddEditTicketComponent,
        data: {
          title: '',
        },
      },
],
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketmasterRoutingModule { }

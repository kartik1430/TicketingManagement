import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
],
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketmasterRoutingModule { }

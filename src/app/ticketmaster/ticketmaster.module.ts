import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketmasterRoutingModule } from './ticketmaster-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';


@NgModule({
  declarations: [
    TicketComponent,
    AddEditTicketComponent
  ],
  imports: [
    CommonModule,
    TicketmasterRoutingModule
  ]
})
export class TicketmasterModule { }

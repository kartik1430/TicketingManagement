import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketmasterRoutingModule } from './ticketmaster-routing.module';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketmasterRoutingModule
  ]
})
export class TicketmasterModule { }

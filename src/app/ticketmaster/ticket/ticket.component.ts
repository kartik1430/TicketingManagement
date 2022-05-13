import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  add(){
    this.route.navigateByUrl('ticketmaster/add-edit-ticket')
  }

}

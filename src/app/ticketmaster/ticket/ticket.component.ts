import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  id: any;
  ticket! : Ticket;
  constructor(private router : Router , private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.singleticketfetch();
    }
    this.getAllTickets();
  }

  add(){
    this.router.navigateByUrl('ticketmaster/add-edit-ticket')
  }

  getAllTickets() {
    this.service.getTickets().subscribe(data => {
      this.service.listTicket = data;
      console.log(data);
    });
  }

  singleticketfetch() {
    this.service.singleTicket(this.id).subscribe((res: any) => {
      this.service.TicketData = res;
    });
  }

  viewTicket(id: number) {
    this.router.navigateByUrl('/view/' + id);
  };


}

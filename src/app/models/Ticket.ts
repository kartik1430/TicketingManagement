export class Ticket{
    id : number=0;
    description : string='';
    assignedUserName : string='';
    ticketStatus : string='';
    priorityType : string='';
    departmentName : string='';
    createdDate!: Date;
    modifiedDate !: Date;
}
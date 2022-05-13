import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from '../models/designation';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  
  actionBtn : string = "Save";
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.actionBtn = "Update";
      this.singledesigfetch();

    }
    this.getAllDesignations();
  }

  getAllDesignations(){
    this.service.getDesigantions().subscribe(data=>{
      this.service.listDesignation=data;
      // console.log(data);
    });
  }

  // populateDesig(selectedDesig : Designation){
  //   this.actionBtn = "Update";
  //   console.log(selectedDesig);
  //   this.service.desigData = selectedDesig;
  // }

  singledesigfetch() {
    this.service.singleDesignation(this.id).subscribe((res: any) => {
      this.service.desigData = res;

    });
  }

  deleteDesignation(id : number){
    if(confirm('Are you really want to delete this record?')){
      this.service.deleteDesignation(id).subscribe(data =>{
        console.log('record deleted');
        this.getAllDesignations();
      },err=>{
        console.log('record not deleted');
      });
    }
  }

  submit(form : NgForm){
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if(this.service.desigData.id==0){
      this.insertDesig(form);
    }
    else{
      this.updateDesig(form);
    }

    
  }

  Back(){
    this.router.navigateByUrl('/designationlist')
  }

  insertDesig(myform : NgForm){  
   
     this.service.saveDesignation().subscribe(d=>{
      this.resetForm(myform);
      console.log('Save Success');
      alert("Designation added successfully");
      this.router.navigateByUrl('/designationlist')
    },err=>{
      if(err.status == 400)
        alert("Designation Already Exists");
    });
    
  }

  updateDesig(myform : NgForm){
    // this.actionBtn = "Update";
    this.service.updateDesignation().subscribe(d=>{
      this.resetForm(myform);
    });
    alert("Designation updated successfully");
    this.router.navigateByUrl('/designationlist')
  }

  resetForm(myform : NgForm){
    myform.form.reset();
    this.service.desigData = new Designation();
  }


}

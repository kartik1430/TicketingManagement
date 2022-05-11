import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloodgroup } from '../models/bloodgroup';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.component.html',
  styleUrls: ['./bloodgroup.component.scss']
})
export class BloodgroupComponent implements OnInit {

  actionBtn : string = "Save";
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //  
    if (this.id) {
      this.actionBtn = "Update";
      this.singlebgfetch();

    }
    this.getAllbg();
  }

  singlebgfetch() {
    this.service.singleBloodgroup(this.id).subscribe((res: any) => {
      this.service.bgData = res;
    });
  }

  getAllbg(){
    this.service.getBloodgroups().subscribe(data=>{
      this.service.listbg=data;
    });
  }

  populateBg(selectedBg : Bloodgroup){
    this.actionBtn = "Update";
    console.log(selectedBg);
    this.service.bgData = selectedBg;
  }

  deleteBg(id : number){
    if(confirm('Are you really want to delete this record?')){
      this.service.deleteBloodgroup(id).subscribe(data =>{
        console.log('record deleted');
        this.getAllbg();
      },err=>{
        console.log('record not deleted');
      });
    }
  }

  submit(form : NgForm){
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if(this.service.bgData.id==0){
      this.insertBg(form);
    }
    else{
      this.updateBg(form);
    }

    
  }

  insertBg(myform : NgForm){  
    this.service.saveBloodgroup().subscribe(d=>{
      this.resetForm(myform);
      console.log('Save Success');
      alert("Bloodgroup added successfully");
    this.router.navigateByUrl('/bloodgrouplist')
    },err=>{
      if(err.status == 400)
        alert("Bloodgroup Already Exists");
    });
    
  }

  updateBg(myform : NgForm){
    // this.actionBtn = "Update";
    this.service.updateBloodgroup().subscribe(d=>{
      this.resetForm(myform);
    });
    alert("Bloodgroup updated successfully");
    this.router.navigateByUrl('/bloodgrouplist')
  }

  resetForm(myform : NgForm){
    myform.form.reset();
    this.service.bgData = new Bloodgroup();
  }

}

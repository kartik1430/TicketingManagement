import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $  from 'jquery';
import { Role } from '../models/role';
import { ApiService} from '../shared/api.service'



@Component({
  selector: 'app-rolemaster',
  templateUrl: './rolemaster.component.html',
  styleUrls: ['./rolemaster.component.scss']
})
export class RolemasterComponent implements OnInit {

  actionBtn : string = "Save";
  id: any;
  
  constructor(private router: Router, private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.actionBtn = "Update";
      this.singlerolefetch();
    }
    this.getAllRoles();

  
    
  }

  getAllRoles(){
    this.service.getRoles().subscribe(data=>{
      this.service.listRole=data;
    });
  }

  Back(){
    this.router.navigateByUrl('/rolelist')
  }
  // populateRole(selectedRole : Role){
  //   this.actionBtn = "Update";
  //   console.log(selectedRole);
  //   this.service.roleData = selectedRole;
  // }

  singlerolefetch() {

    this.service.singlerole(this.id).subscribe((res: any) => {
      this.service.roleData = res;

    });
  }

  deleteRole(id : number){
    if(confirm('Are you really want to delete this record?')){
      this.service.deleteRole(id).subscribe(data =>{
        console.log('record deleted');
        this.getAllRoles();
      },err=>{
        console.log('record not deleted');
      });
    }
  }

  submit(form : NgForm){
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if(this.service.roleData.id==0){
      this.insertRole(form);
    }
    else{
      this.updateRole(form);
    }

    
  }

  insertRole(myform : NgForm){  
    this.service.saveRole().subscribe(d=>{
      this.resetForm(myform);
      console.log('Save Success');
      alert("Role added successfully");
      this.router.navigateByUrl('/rolelist')
    },err=>{
      if(err.status == 400)
        alert("Role Already Exists");
    });
    
   
  }

  updateRole(myform : NgForm){
    // this.actionBtn = "Update";
    this.service.updateRole().subscribe(d=>{
      this.resetForm(myform);
    });
    alert("Role updated successfully");
    this.router.navigateByUrl('/rolelist')
  }

  resetForm(myform : NgForm){
    myform.form.reset();
    this.service.roleData = new Role();
  }

  
  

  
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  actionBtn : string = "Save";
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.actionBtn = "Update";
      this.singledepartfetch();

    }
    this.getAllDepartments();
  }

  getAllDepartments(){
    this.service.getDepartments().subscribe(data=>{
      this.service.listDepartment=data;
    });
  }

  populateDepart(selectedDepart : Department){
    this.actionBtn = "Update";
    console.log(selectedDepart);
    this.service.departmentData = selectedDepart;
  }

  singledepartfetch(){
    this.service.singleDepartment(this.id).subscribe((res: any) => {
      this.service.departmentData = res;
    });
  }

  deleteDepartment(id : number){
    if(confirm('Are you really want to delete this record?')){
      this.service.deleteDepartment(id).subscribe(data =>{
        console.log('record deleted');
        this.getAllDepartments();
      },err=>{
        console.log('record not deleted');
      });
    }
  }

  submit(form : NgForm){
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if(this.service.departmentData.id==0){
      this.insertDepart(form);
    }
    else{
      this.updateDepart(form);
    }
  }

  insertDepart(myform : NgForm){
    this.service.saveDepartment().subscribe(d=>{
      this.resetForm(myform);
      console.log('Save Success');
      alert("Department added successfully");
      this.router.navigateByUrl('/departmentlist')
    },err=>{
      if(err.status == 400)
        alert("Department Already Exists");
    });
   
  }

  updateDepart(myform : NgForm){
    this.service.updateDepartment().subscribe(d=>{
      this.resetForm(myform);
    });
    alert("Department updated successfully");
    this.router.navigateByUrl('/departmentlist')
  }

  resetForm(myform : NgForm){
    myform.form.reset();
    this.service.departmentData = new Department();
  }

}

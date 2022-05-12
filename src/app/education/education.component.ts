import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../models/education';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  actionBtn : string = "Save";
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, public service : ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.actionBtn = "Update";
      this.singleeducation();

    }
    this.getAllEducations();
  }

  getAllEducations(){
    this.service.getEducations().subscribe(data=>{
      this.service.listeducation=data;
    });
  }

  // populateEdu(selectedEdu : Education){
  //   this.actionBtn = "Update";
  //   console.log(selectedEdu);
  //   this.service.educationData = selectedEdu;
  // }

  singleeducation() {
    this.service.singleEducation(this.id).subscribe((res: any) => {
      this.service.educationData = res;
    });
  }

  deleteEducation(id : number){
    if(confirm('Are you really want to delete this record?')){
      this.service.deleteEducation(id).subscribe(data =>{
        console.log('record deleted');
        this.getAllEducations();
      },err=>{
        console.log('record not deleted');
      });
    }
  }

  submit(form : NgForm){
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if(this.service.educationData.id==0){
      this.insertEducation(form);
    }
    else{
      this.updateEducation(form);
    }
  }

  insertEducation(myform : NgForm){  
    this.service.saveEducation().subscribe(d=>{
      this.resetForm(myform);
      console.log('Save Success');
      alert("Education added successfully");
      this.router.navigateByUrl('/educationlist')
    },err=>{
      if(err.status == 400)
        alert("Education Already Exists");
    });
   
  }

  updateEducation(myform : NgForm){
    // this.actionBtn = "Update";
    this.service.updateEducation().subscribe(d=>{
      this.resetForm(myform);
    });
    alert("Education updated successfully");
    this.router.navigateByUrl('/educationlist')
  }

  resetForm(myform : NgForm){
    myform.form.reset();
    this.service.educationData = new Education();
  }

}

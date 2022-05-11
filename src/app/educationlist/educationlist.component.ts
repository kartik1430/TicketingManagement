import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Education } from '../models/education';



@Component({
  selector: 'app-educationlist',
  templateUrl: './educationlist.component.html',
  styleUrls: ['./educationlist.component.scss']
})
export class EducationlistComponent implements OnInit {
  user : any
  displayedColumns: string[] = ['id', 'name' , 'action'];
  dataSource!: MatTableDataSource<Education>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private route : Router , public service: ApiService) { }

  ngOnInit(): void {
    this.getAllEducation();
    
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAdd(){
    this.route.navigateByUrl('/education')
    this.service.educationData.name="";
  }

  getAllEducation() {
    this.service.getEducations().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listeducation = data;
    });
  }

  updateEducation(id: number) {
    this.route.navigateByUrl('/educationedit/' + id);
  };

  deleteEducation(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteEducation(id).subscribe(data => {
        console.log('record deleted');
        this.getAllEducation()

      }, err => {
        console.log('record not deleted');
      });
    }
   
  }

}

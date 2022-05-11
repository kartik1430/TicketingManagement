import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Designation } from '../models/designation';

@Component({
  selector: 'app-designationlist',
  templateUrl: './designationlist.component.html',
  styleUrls: ['./designationlist.component.scss']
})
export class DesignationlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name' , 'action'];
  dataSource!: MatTableDataSource<Designation>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route : Router , public service: ApiService) { }

  ngOnInit(): void {
    this.getAllDesignation();
  }

  onAdd(){

    this.route.navigateByUrl('/designation')
    this.service.desigData.name="";
  }

  getAllDesignation() {
    this.service.getDesigantions().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listDesignation = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateDesignation(id: number) {
    this.route.navigateByUrl('/designationedit/' + id);
  };

  deleteDesignation(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteDesignation(id).subscribe(data => {
        console.log('record deleted');
        this.getAllDesignation()

      }, err => {
        console.log('record not deleted');
      });
    }
   
  }

}

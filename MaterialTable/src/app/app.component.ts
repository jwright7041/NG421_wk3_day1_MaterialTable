import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEmployees } from './models/iemployees';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'startdate', 'age'];
  dataSource!: MatTableDataSource<IEmployees>;
  @ViewChild(MatSort, {static: true})sort!: MatSort;
  constructor(private employeeService: EmployeesService){

  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IEmployees>(this.employeeService.getMembers());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string): void{
    this.dataSource.filter = filter;
  }
}

import { Injectable } from '@angular/core';
import { IEmployees } from '../models/iemployees';
import { EMPLOYEES } from '../data/employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  members: IEmployees[] = [];
  constructor() { 
    this.members = EMPLOYEES;
  }

  getMembers(): IEmployees[]{
    return this.members;
  }
}

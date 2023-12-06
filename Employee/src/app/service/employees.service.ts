import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl ="http://localhost:5250/api/EmployeeDetails";

  constructor(private http:HttpClient) { }

  //get all employees
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }
  addEmployee(employee:Employee): Observable<Employee>{
    employee.employeeID='0';
    return this.http.post<Employee>(this.baseUrl,employee);
  
  }
  deleteEmployee(employeeID:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl + '/'+ employeeID);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl + '/'+ employee.employeeID,employee);
  }
}

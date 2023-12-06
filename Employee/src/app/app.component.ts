import { Component ,OnInit } from '@angular/core';
import { EmployeesService } from './service/employees.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee';
  employees:Employee[] = [];
  employee:Employee = {
    employeeID: '',
    employeeName: '',
    department: '',
    joiningDate: ''
  }

  constructor(private employeesService: EmployeesService){

  }
  ngOnInit():void{
   this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeesService.getAllEmployees()
    .subscribe(
      response =>{
      this.employees =response;
      }
    );
  }


  onSubmit(){
    if(this.employee.employeeID === '') {
      this.employeesService.addEmployee(this.employee)
      .subscribe(
        response => {
          this.getAllEmployees();
          this.employee ={
            employeeID: '',
            employeeName: '',
            department: '',
            joiningDate: ''
    
          };
        }
      );
      } else{
        this.updateEmployee(this.employee);

      }
  }

  deleteEmployee(employeeID:string){
    this.employeesService.deleteEmployee(employeeID)
    .subscribe(
      response =>{
        this.getAllEmployees();
      }
    )
  }

  EditForm(employee:Employee){
    this.employee=employee;
  }

  updateEmployee(employee:Employee){
    this.employeesService.updateEmployee(employee)
    .subscribe(
      response => {
        this.getAllEmployees();
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddEmpComponent>,
    private service:EmployeeService,
    private snackBar:MatSnackBar) { }

    ngOnInit(): void {

      this.resetForm();
  
    }
  
    resetForm(form?:NgForm) {
      if(form!=null)
      form.resetForm();
  
      this.service.formData = {
        EmployeeID:0,
        EmployeeName:'',
        Department:'',
        MailId:'',
        DOJ:null
      }
    
    }

    onClose() {
      this.dialogbox.close();
      this.service.filter('Register click');
    }

    onSubmit(form:NgForm) {
      this.service.addEmployee(form.value).subscribe(res =>{
        this.resetForm(form);
        this.snackBar.open(res.toString(), '', {
          duration:3000,
          verticalPosition:'top'
        });
       
      })
    }

}

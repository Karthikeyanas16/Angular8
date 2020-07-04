import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee-model';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatSort } from '@angular/material/sort';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/employee/add-emp/add-emp.component';
import { EditEmpComponent } from 'src/app/employee/edit-emp/edit-emp.component';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: EmployeeService, private dialog:MatDialog,
    private snackBar:MatSnackBar) { 
        this.service.listen().subscribe((m:any)=>{
          console.log(m);
          this.refreshEmpList();
        })
    }

  listData : MatTableDataSource<any>
  displayedColumns : string[] = ['Options', 'EmployeeID', 'EmployeeName', 'Department', 'MailId', 'DOJ'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  applyFilter(filtervalue: string) {
    this.listData.filter=filtervalue.trim().toLocaleLowerCase();
  }

  refreshEmpList() {
      this.service.getEmpList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);

  }


}

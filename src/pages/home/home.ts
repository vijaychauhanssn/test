import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fileOpener: FileOpener) {  }

 
 ngOnInit() {
    this.employeeLists();
  }

  employeeLists() {
   this.employees = 
  [
    {
      "FirstName": "vijay",
      "LastName":"Chauhan",
      "Mobile":"989365656"
    },
    {
      "FirstName": "Ravi",
      "LastName":"Chauhan",
      "Mobile":"999365656"
    },
    {
      "FirstName": "Uday",
      "LastName":"Chauhan",
      "Mobile":"979365656"
    },
    {
      "FirstName": "Prateek",
      "LastName":"Chauhan",
      "Mobile":"979365656"
    },
    {
      "FirstName": "Ajay",
      "LastName":"Chauhan",
      "Mobile":"979365656"
    },
    {
      "FirstName": "vijay",
      "LastName":"Chauhan",
      "Mobile":"97936985656"
    }
  ];
  }

  filterEmployeeLists(ev: any) {
    this.employeeLists();
    let val = ev.target.value;

    if (val && val.trim() !== "") {
      this.employees = this.employees.filter(function(employee) {
        return employee.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

 
}

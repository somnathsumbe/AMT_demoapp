import { Component, OnInit, ViewChild } from '@angular/core';
import { Emp } from '../model/emp.model';
import { NgForm,FormArray } from '@angular/forms'

@Component({
  selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild(NgForm) resetForm: NgForm;
  language: any[] = ["English", "Hindi", "Marathi", "Other"];
  model = new Emp('Somnath', 'Sumbe', true, 'w1', 'English');
  
  constructor() {

    console.log("form component load");
   }

  ngOnInit() {
    
  }

  userobj(userobj) {
  }

  ragisterForm(regform) {
    var fname = regform.controls.fname.value;
    var lname = regform.controls.lname.value;
    var email = regform.controls.email.value;
  }

  resetform() {
    this.resetForm.reset({
      fname: "somnath",
      lname: "sumbe",
      email: "somasumbe@gmail.com"
    });

  }

  fill() {
    this.resetForm.setValue({
      fname: "sunita",
      lname: "sumbe",
      email: "sunitakarle23@gmail.com",
    });
  }

  
}

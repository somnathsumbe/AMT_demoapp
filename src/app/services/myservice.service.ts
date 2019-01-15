import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  dept:any[]=[];
  constructor() { 
    this.dept=[
      {
        id:0,fullname:"suman Sumbe"
      },
      {
        id:1,fullname:"Somnath Sumbe"
      },
      {
        id:2,fullname:"sunita Sumbe"
      },
      {
        id:3,fullname:"shivansh Sumbe"
      }
    ]

  }

  display(){
     return "somnath";
  }

  
}

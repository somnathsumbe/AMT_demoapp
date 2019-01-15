import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
student:any[];

  constructor() {

   }
   
   getstudent(){
    return this.student=[
      "somnath","sunita"
    ];
   }

  
}

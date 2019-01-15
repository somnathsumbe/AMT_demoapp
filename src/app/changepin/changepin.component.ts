import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'pm-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent implements OnInit {
  currentpin:number;
  constructor(private route: ActivatedRoute,private router: Router,private globals:GlobalsService) {
    let param = this.route.snapshot.paramMap.get('id');
    if (param) {
     this.currentpin = +param;
    }
   }

  ngOnInit() {
  }
  confirmpincode(changeyourpindata){
    if (this.globals.users.length > 0 && changeyourpindata) {
      this.globals.users.filter(user => {
        if(user.phone && user.phone.includes(this.currentpin)){
        user['pincode']=changeyourpindata.confirmpin;
          this.router.navigate(["/profileupdate"]);
        }
      });
    } 
}
}

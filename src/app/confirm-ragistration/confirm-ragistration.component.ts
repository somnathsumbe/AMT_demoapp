import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'pm-confirm-ragistration',
  templateUrl: './confirm-ragistration.component.html',
  styleUrls: ['./confirm-ragistration.component.css']
})
export class ConfirmRagistrationComponent implements OnInit {
phone:number;
  constructor(private route: ActivatedRoute,private router: Router,private globals:GlobalsService) {
    let param = this.route.snapshot.paramMap.get('id');
    if (param) {
     this.phone = +param;
    }
   }

  ngOnInit() {
   

  }
  RagistrationConfirm(ConfirmRagistrationData){
      if (this.globals.users.length > 0 && ConfirmRagistrationData) {
        this.globals.users.filter(user => {
          if(user.phone && user.phone.includes(ConfirmRagistrationData.phone)){
          //  user= Object.assign({},user,ConfirmRagistrationData);
           user['pincode']=ConfirmRagistrationData.pincode;
            this.router.navigate([`/Changepin/${ConfirmRagistrationData.phone}`]);
          }
        });
      } 
  }
}

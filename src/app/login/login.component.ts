import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  doRagistration(){
    this.router.navigate(['/ragister']);
  }

  doLogin(logindata){
    if(!logindata) return;
    if(logindata.phone == "9028787219" && logindata.pincode=="414001"){
      this.router.navigate(['/dashbord']);
    }else{
      alert();
    }
   

   
  }
}

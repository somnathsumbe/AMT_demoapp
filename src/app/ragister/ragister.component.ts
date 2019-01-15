import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'pm-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {
  citys: string[] = ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad'];
  isregisterUser: any = {};
  constructor(private router: Router, private globals: GlobalsService) { }

  ngOnInit() {
  }

  ConfirmRagistration(ragistationdata) {
    if (ragistationdata) {

      if (this.globals.users.length > 0) {
        this.isregisterUser = this.globals.users.filter(user => {
          if (user.phone) {
            return user.phone.includes(ragistationdata.phone);
          }
        });
      }

      if (this.isregisterUser.length > 0) {
        this.router.navigate(['/login']);
      } else {
        this.globals.users.push(ragistationdata);
        this.router.navigate([`/ConfirmRagistration/${ragistationdata.phone}`]);
      }

    }


  }

}

import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'pm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() changeicon:boolean=true;
  data;
  constructor() { }

  ngOnInit() {
  }

  getdata(value){
   this.data=value;
  }


}

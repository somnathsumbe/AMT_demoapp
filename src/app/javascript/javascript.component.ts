import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-javascript',
   templateUrl: './javascript.component.html',

  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {

  }
 myfuction(){
 var ss = document.getElementById('demo').innerHTML="hello javascript";
 console.log(ss);
 }


}

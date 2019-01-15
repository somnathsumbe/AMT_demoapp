import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DemoService } from './demo.service';
import { MyserviceService } from '../services/myservice.service'

@Component({
  selector: 'pm-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [MyserviceService]
})
export class DemoComponent implements OnInit {
  title: string = "angular application";
  names;
  colSpan = 3;
  @Input() change: boolean;
  @Output() outputdata: EventEmitter<any> = new EventEmitter();
  outputstring: any[] = ["somnath", "sunita", "shivansh"];
  servicetitle: string;
  depts:any[]=[];


  logo = "../../assets/images/a.jpg";
  constructor(demoservice: DemoService, private myservice: MyserviceService) {
    this.names = demoservice.getstudent();

    this.servicetitle = myservice.display();
    console.log(this.servicetitle);
    this.depts=myservice.dept;
    console.log(this.depts);

    console.log("form component load");
  }

  btnclick(){
    alert(this.servicetitle);
  }

  ngOnInit() {
    
  }

  get() {
    console.log(this.title);
  }
  senddata() {
    this.outputdata.emit(this.outputstring);
  }
  onSave($event) {
    event.stopPropagation();
    console.log("onsave " + $event);
  }

  changeicon() {

    return this.change = !this.change;
  }

  onMassage() {
    console.log("onMassage ");
  }
  text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam eum unde doloremque voluptatum beatae deserunt vitae dolores, itaque labore!"
  books = [
    {
      name: "angular 4",
      relisedate: new Date(2018, 10, 11),
      price: 750.8888
    },
    {
      name: "angular 4",
      relisedate: new Date(2018, 10, 11),
      price: 750
    }
  ]
}

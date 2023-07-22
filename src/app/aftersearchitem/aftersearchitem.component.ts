import { Component, Input } from '@angular/core';
import { AfterSearch } from '../classes/afterseatch';

@Component({
  selector: 'app-aftersearchitem',
  templateUrl: './aftersearchitem.component.html',
  styleUrls: ['./aftersearchitem.component.css']
})
export class AftersearchitemComponent {

  @Input() name:string="";
  @Input() age:number = 0;
  @Input() location:string = "";
  @Input() phonenumber = "";
  @Input() email:string = "";

  
  constructor(){
  }


}
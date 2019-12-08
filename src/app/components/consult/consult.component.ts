import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  public tableConsult: boolean
  public celda="3";
  constructor() {
    this.tableConsult=false;
   }

  ngOnInit() {
  }

  Ubication(){
  this.tableConsult=true;
  }

}

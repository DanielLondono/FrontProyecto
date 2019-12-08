import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-filter',
  templateUrl: './consult-filter.component.html',
  styleUrls: ['./consult-filter.component.css']
})
export class ConsultFilterComponent implements OnInit {
public showTable:boolean
  constructor() { 
    this.showTable=false;
  }

  ngOnInit() {
  }

  consultFilter(){
    this.showTable=true;
  }

}

import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-register-motorcycle',
  templateUrl: './register-motorcycle.component.html',
  styleUrls: ['./register-motorcycle.component.css']
})
export class RegisterMotorcycleComponent implements OnInit {
public banderaMostrar:boolean ;
  constructor() { 
    this.banderaMostrar=false;
  }

  ngOnInit() {
  }

  mostrar(){
    this.banderaMostrar= true;
  }
  


}




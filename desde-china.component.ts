import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desde-china',
  templateUrl: './desde-china.component.html',
  styleUrls: ['./desde-china.component.css']
})
export class DesdeChinaComponent implements OnInit {
  desdechinaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.desdechinaForm = this.fb.group({
      usuario: ['', [Validators.required,Validators.email]]
    })
   }

  ngOnInit(): void {
  }
  desdechina(){
    
  }

}

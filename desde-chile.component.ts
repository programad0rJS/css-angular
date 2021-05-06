import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desde-chile',
  templateUrl: './desde-chile.component.html',
  styleUrls: ['./desde-chile.component.css']
})
export class DesdeChileComponent implements OnInit {
  desdeChileForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.desdeChileForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  desdeChile() {
    console.log(this.desdeChileForm);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-capisule',
  templateUrl: './capisule.component.html',
  styleUrls: ['./capisule.component.css']
})
export class CapisuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getuserValue(form: NgForm)
   {
   console.log(form.value)
   }
}

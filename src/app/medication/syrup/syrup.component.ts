import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-syrup',
  templateUrl: './syrup.component.html',
  styleUrls: ['./syrup.component.css']
})
export class SyrupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getuserValue(form: NgForm) {
    console.log(form.value)
  }

}

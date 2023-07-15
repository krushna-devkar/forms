import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.css']
})
export class DropdownFormComponent {

  @ViewChild ('contactForm')  NgForm : any
 
  selectOption = '';

selected(value : string){
    this.selectOption = value;
  }
}

import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.css']
})
export class RadioFormComponent {
  
  selectOption = '';

  changeContact(eve : any){
    
      console.log(this.selectOption =eve.target.value)
    
  }

  
  
}

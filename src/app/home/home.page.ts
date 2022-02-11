import {Component} from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formArray: FormArray = new FormArray([]);

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.formArray.push(new FormControl('my text value'));
    }
  }
}

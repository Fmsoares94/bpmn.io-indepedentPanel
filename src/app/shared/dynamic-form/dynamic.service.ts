import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  saveForm:Array<any> = []
  constructor() { }

  saveFormGroup() {
    if(this.saveForm !== undefined ) {  
     this.saveForm
    }
  }

  save(a) {
    this.saveForm.push(a)
    console.log(this.saveForm)
  }
}

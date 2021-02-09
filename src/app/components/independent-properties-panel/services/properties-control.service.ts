import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { PropertiesBase } from './propertiesBase';

@Injectable()
export class PropertiesControlService {
  constructor() { }

  toFormGroup(questions: PropertiesBase<string>[]) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] =
        question.type == 'FormArray' ? 
          new FormArray([]) :
          question.required ? new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
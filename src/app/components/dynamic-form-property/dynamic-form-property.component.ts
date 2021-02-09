import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropertiesBase } from '../independent-properties-panel/services/propertiesBase';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../dynamic-form/dynamic.service';
import { PropertiesService } from '../independent-properties-panel/services/properties.service';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"

@Component({
  selector: 'app-dynamic-form-property',
  templateUrl: './dynamic-form-property.component.html',
  styleUrls: ['./dynamic-form-property.component.scss'],
  providers: [DynamicService]
})
export class DynamicFormPropertyComponent {
  @Input() question: PropertiesBase<string>;
  @Input() form: FormGroup;
  constructor(private dynamicService: PropertiesService) { }
  get isValid() { return this.form.controls[this.question.key] }
  ngOnInit() {
  
  }

  ngOnChanges(changes) {
    
    this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(res => {
        if (this.question.key == 'outputDataLock') {
          this.question.options = this.dynamicService.getOutputDataLock(this.question.id)
        }

        if (this.question.key == 'inputDataLock' && this.question.id !== 'StartEvent_1') {
          this.question.options = this.dynamicService.getInputDataLock(this.question.id)
        }
        this.dynamicService.getValue(res, this.question.id)
      });
  }

}

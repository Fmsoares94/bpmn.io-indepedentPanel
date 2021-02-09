import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropertiesBase } from '../independent-properties-panel/services/propertiesBase';
import { FormGroup } from '@angular/forms';
import { PropertiesControlService } from '../independent-properties-panel/services/properties-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [PropertiesControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: PropertiesBase<string>[] = []
  @Output() change = new EventEmitter()
  form: FormGroup;
  validTab: Boolean = false
  payLoad = '';
  constructor(private pcs: PropertiesControlService) {
  }

  ngOnInit() {
    this.form = this.pcs.toFormGroup(this.questions);
  }

  ngOnChanges(changes) {
    if (changes.questions) {
      this.form = this.pcs.toFormGroup(this.questions);
      this.isTab()
    }
  }

  isTab() {
    this.questions.forEach(item => {
      if (item.tab !== null) {
        this.validTab = true
      } else {
        this.validTab = false
      }
    })
  }

  changeValue($event) {
    this.change.emit($event)
  }

  // onSubmit() {
  //   this.payLoad = JSON.stringify(this.form.getRawValue());
  // }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropertiesBase } from '../../components/independent-properties-panel/propertiesBase';
import { FormGroup } from '@angular/forms';
import { PropertiesControlService } from '../../components/independent-properties-panel/properties-control.service';

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
  payLoad = '';
  constructor(private pcs: PropertiesControlService) {
  }

  ngOnInit() {
    this.form = this.pcs.toFormGroup(this.questions);
  }

  ngOnChanges(changes) {
    if (changes.questions) {
      console.log('MUDOU',this.questions)
      this.form = this.pcs.toFormGroup(this.questions);
    }
  }

  changeValue($event) {
    this.change.emit($event)
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}

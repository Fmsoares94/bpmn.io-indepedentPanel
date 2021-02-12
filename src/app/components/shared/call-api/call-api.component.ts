import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertiesService } from '../../independent-properties-panel/services/properties.service';
import { PropertiesBase } from '../../independent-properties-panel/services/propertiesBase';
import  _ from 'lodash'

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss']
})
export class CallApiComponent implements OnInit {
  @Input() questions: PropertiesBase<string>[] = []
  @Output() isTab = new EventEmitter()
  @Input() form: FormGroup;
  list
  idElement
  skill
  group
  cont = 0
  skills = new FormArray([]);
  constructor(private fb: FormBuilder, private dynamicService: PropertiesService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.cont = 0
    let x = (questions) => questions.filter((v, i) => questions.indexOf(v) === i)
    let value = this.questions.map(a => a.tab)
    let ids = this.questions.map(a => a.id)
    this.idElement = ids.filter((item, index) => ids.indexOf(item) !== index)
    this.questions.map(a => {
      this.skill = this.form.get(a.key)
    })
    this.list = x(value)
    this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(res => {
        for (let entry of this.idElement) {
          this.dynamicService.getValue(res, entry)
        }
      })
  }

  createSubItem(): FormGroup {
    return this.fb.group({
      key: '',
      value: ''
    });
  }

  load(data, item) {
    if (this.cont == 0) {
      let abc = this.form.get(data) as FormArray
      if (item !== undefined) {
        item.forEach(element => {
          if (abc.value.length == 0) {
            const group = new FormGroup({
              key: new FormControl(element.key),
              value: new FormControl(element.value)
            });
            abc.push(group);
          } else if (abc.value.filter(a => _.isEqual(element, a)).length == 0) {
            const group = new FormGroup({
              key: new FormControl(element.key),
              value: new FormControl(element.value)
            });
            abc.push(group);
          }
        });
      }
    }
  }


  additem(data) {
    let item = this.form.get(data) as FormArray
    item.push(this.createSubItem())
  }

  getItem(data) {
    let abc = this.form.get(data) as FormArray
    return abc
  }
  addSkill(data) {
    const group = new FormGroup({
      key: new FormControl(''),
      value: new FormControl('')
    });
    let abc = this.form.get(data) as FormArray
    abc.push(group);
  }

  removeSkill(index: number, data) {
    this.cont++
    let abc = this.form.get(data) as FormArray
    abc.removeAt(index);
  }


}

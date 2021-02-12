import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertiesService } from '../../../services/properties.service';
import { PropertiesBase } from '../../../services/propertiesBase';
import _ from 'lodash'

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

  ngOnChanges() {
    this.cont = 0
    let x = (questions) => questions.filter((v, i) => questions.indexOf(v) === i)
    let value = this.questions.map(a => a.tab)
    let ids = this.questions.map(a => a.id)
    this.idElement = ids.filter((item, index) => ids.indexOf(item) !== index)
    console.log('ID ELEMENT', this.idElement)
    this.questions.map(a => {
      this.skill = this.form.get(a.key)
    })
    this.list = x(value)
    this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(res => {
          this.dynamicService.getValue(res, this.idElement[0])
      })
  }

  createSubItem(): FormGroup {
    return this.fb.group({
      key: '',
      value: ''
    });
  }

  load(data, item, tab) {

    if (this.cont == 0) {
      let abc = this.form.get(data) as FormArray
      if (item !== undefined) {
        let itens = JSON.parse(item)
        itens.forEach(element => {
          if (abc.value.length == 0) {
            if (tab == 'general') {
              const group = new FormGroup({
                value: new FormControl(element.value)
              });
              abc.push(group);

            } else {
              const group = new FormGroup({
                key: new FormControl(element.key),
                value: new FormControl(element.value)
              });
              abc.push(group);
            }
          } else if (abc.value.filter(a => _.isEqual(element, a)).length == 0) {
            if (tab == 'general') {
              const group = new FormGroup({
                value: new FormControl(element.value)
              });
              abc.push(group);
            } else {
              const group = new FormGroup({
                key: new FormControl(element.key),
                value: new FormControl(element.value)
              });
              abc.push(group);
            }
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
  addSkill(data, tab) {
    let abc = this.form.get(data) as FormArray
    if (tab == 'general') {
      const group = new FormGroup({
        value: new FormControl('')
      });
      abc.push(group);
    } else {
      const group = new FormGroup({
        key: new FormControl(''),
        value: new FormControl('')
      });
      abc.push(group);
    }
  }

  removeSkill(index: number, data) {
    this.cont++
    let abc = this.form.get(data) as FormArray
    abc.removeAt(index);
  }


}

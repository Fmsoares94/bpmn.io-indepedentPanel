import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertiesBase } from '../../independent-properties-panel/services/propertiesBase';

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
  skill
  group
  skills = new FormArray([]);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }

  ngOnChanges(changes) {
    let x = (questions) => questions.filter((v, i) => questions.indexOf(v) === i)
    let value = this.questions.map(a => a.tab)
    console.log('FORM------------------', this.form.get('dev_list'))
    this.questions.map(a => {
      this.skill = this.form.get(a.key)
    })
    this.list = x(value)
    this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(res => {

        console.log('VALORES INPUT', res)
      })
  }

 createSubItem(): FormGroup {
    return this.fb.group({
      key: '',
      value: ''
    });
 }

 additem(data){
  let item =  this.form.get(data) as FormArray
  item.push(this.createSubItem())
 }

 getItem(data) {
   return this.form.get(data) as FormArray
 }

 addSkill(data) {
  const group = new FormGroup({
    key: new FormControl(''),
    value: new FormControl('')
  });
  let abc = this.form.get(data) as FormArray
  abc.push(group);
}

removeSkill(index: number, data, data2) {
  console.log('data2', data2)
  let abc = this.form.get(data) as FormArray
  abc.removeAt(index);
}


}

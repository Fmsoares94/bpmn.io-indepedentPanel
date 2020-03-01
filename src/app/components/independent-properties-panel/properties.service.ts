import { Injectable } from '@angular/core';
import { PropertiesBase } from './propertiesBase';
import { DropdownProperties } from './properties-dropdown';
import { TextboxProperties } from './properties-textbox';
import { of } from 'rxjs';
import { EventPropertiesPanel } from '../../models/startEvent.model';
import { SliderProperties } from './properties-slider';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  save: Array<PropertiesBase<string>[]> = []
  save2: Array<any> = []
  outputDataLock: Array<any> = []
  currentID: string = ''
  constructor() { }

  getQuestions(a?: EventPropertiesPanel) {
    let questions: PropertiesBase<string>[] = []
    let validation = false
    if (a !== undefined) {
      this.currentID = a.id
      console.log(a)
      this.save.forEach(b => {
        if (b.filter(c => c.id == a.id).length !== 0) {
          validation = true
        }
      })
      switch (a.businessObject.$type) {
        case 'bpmn:Task':
          if (this.save.length == 0 || !validation) {
            questions = [
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'inputDataLock',
                  label: 'Input Data Lock',
                  options: [],
                  order: 3
                },
              ),
              new TextboxProperties({
                id: a.id,
                key: 'name',
                label: 'Name',
                value: a.businessObject.name,
                required: true,
                order: 2
              }),
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'outputDataLock',
                  label: 'Output Data Lock',
                  options: [],
                  order: 1
                },
              ),
              new SliderProperties({

              })
            ];
          }
          break
        case 'bpmn:StartEvent':
          if (this.save.length == 0 || !validation) {
            questions = [
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'inputDataLock',
                  label: 'Input Data Lock',
                  options: [
                    { key: 'SessionData', value: '__SessionData__' }
                  ],
                  order: 3
                },
              ),
              new TextboxProperties({
                id: a.id,
                key: 'name',
                label: 'Name',
                value: a.businessObject.name,
                required: true,
                order: 1
              }),
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'outputDataLock',
                  label: 'Output Data Lock',
                  options: [],
                  order: 3
                },
              ),
            ];
          }
          break
        case 'bpmn:ExclusiveGateway':
          if (this.save.length == 0 || !validation) {
            questions = [
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'inputDataLock',
                  label: 'Input Data Lock',
                  options: [],
                  order: 3
                },
              ),
              new TextboxProperties({
                id: a.id,
                key: 'name',
                label: 'Name',
                value: a.businessObject.name,
                required: true,
                order: 1
              }),
              new DropdownProperties(
                {
                  id: a.id,
                  key: 'outputDataLock',
                  label: 'Output Data Lock',
                  options: [],
                  order: 3
                },
              ),
            ];
          }
          break
        default:
          break;
      }
    }
    if (questions.length !== 0) {
      this.save.push(questions)
    }
    this.save.forEach(b => {
      if (b.filter(c => c.id == a.id).length !== 0) {
        questions = b.filter(c => c.id == a.id)
        questions = this.updateForm(questions, a)
      }
    })
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getOutputDataLock(id) {
    let output = []
    this.outputDataLock.forEach(a => {
      if (a.id == id) {
        output.push({ key: a.out, value: a.out })
      }
    })
    return output
  }

  getInputDataLock(id) {
    let output = []
    this.outputDataLock.forEach(a => {
      if (a.id !== id) {
        output.push({ key: a.out, value: a.out })
      }

    })
    return output
  }

  getValue(value, id) {
    let result = {
      id: id,
      value: value
    }
    let outputDataLock = {
      id: id,
      out: `${value.name}_out`
    }
    let outputValidation = this.outputDataLock.filter(result => result.id == id).length > 0
    if (this.outputDataLock.length == 0 || !outputValidation) {
      this.outputDataLock.push(outputDataLock)
    } else {
      this.outputDataLock.forEach((value, index) => {
        if (value.id == id) {
          this.outputDataLock[index] = outputDataLock
        }
      })
    }

    let validation = this.save2.filter(result => result.id == id).length > 0
    if (this.save2.length == 0 || !validation) {
      this.save2.push(result)
    } else {
      this.save2.forEach((value, index) => {
        if (value.id == id) {
          this.save2[index] = result
        }
      })
    }
  }

  updateForm(value: PropertiesBase<string>[], a?: EventPropertiesPanel) {

    value.forEach(res => {
      if (this.save2.length == 0) {
        switch (res.key) {
          case 'name':
            res.value = a.businessObject.name
            break
          default:
            break;
        }
      } else {
        this.save2.filter(result => result.id == res.id).forEach((result, index) => {
          switch (res.key) {
            case 'name':
              a.businessObject.name = result.value.name
              break
            default:
              break;
          }
        })
      }
    })
    return value
  }

  updateCanvasElement(value: EventPropertiesPanel) {
    this.save2.forEach(res => {
      if (res.id == value.id) {
        value.businessObject.name = res.value.name
      }
    })
    return value
  }

}


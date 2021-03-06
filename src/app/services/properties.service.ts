import { Injectable } from '@angular/core';
import { PropertiesBase } from './propertiesBase';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { EventPropertiesPanel } from '../models/startEvent.model';
import { CallApi } from './properties/CallApi';
import { SendMessage } from './properties/SendMessage';
import { UserRequest } from './properties/UserRequest';
import { UserResponse } from './properties/UserResponse';
import { Mapper } from './properties/Mapper';
import { Filter } from './properties/Filter';
import { TransactionResponse } from './properties/TransactionResponse';
import { TransactionRequest } from './properties/TransactionRequest';
import { GoToFlow } from './properties/GoToFlow';
import { StartSubFlow } from './properties/StartSubFlow';
import { BackToParent } from './properties/BackToParent';
import { StartFlow } from './properties/StartFlow';
import { Decision } from './properties/Decision';
import { EndOfFlow } from './properties/EndOfFlow';
import { CustomPropsProvider } from '../props-provider/CustomPropsProvider';
@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  save: Array<PropertiesBase<string>[]> = []
  save2: Array<any> = []
  outputDataLock: Array<any> = []
  currentID: string = ''
  element
  private subject = new BehaviorSubject<any>('');
  constructor() { }

  getQuestions(propertiesPanel?: EventPropertiesPanel) {
    let questions: PropertiesBase<string>[] = []
    let validation = false
    this.subject.next(propertiesPanel)

    if (propertiesPanel !== undefined) {
      this.currentID = propertiesPanel.id
      let atrr = propertiesPanel.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie
      // console.log('TYPE', atrr)
      this.save.forEach(b => {
        validation = b.filter(c => c.id == propertiesPanel.id).length !== 0
      })
      switch (atrr) {
        case 'StartFlow':
          if (this.save.length == 0 || !validation) {
            let startFlow = new StartFlow()
            questions = startFlow.get(propertiesPanel)
          }
          break
        case 'EndOfFlow':
          if (this.save.length == 0 || !validation) {
            let endOfFlow = new EndOfFlow()
            questions = endOfFlow.get(propertiesPanel)
          }
          break
        case 'Decision':
          if (this.save.length == 0 || !validation) {
            let decision = new Decision()
            questions = decision.get(propertiesPanel)
          }
          break
        case 'CallApi':
          if (true) {
            let callApi = new CallApi()
            questions = callApi.get(propertiesPanel)
          }
          break
        case 'SendMessage':
          if (this.save.length == 0 || !validation) {
            let sendMessage = new SendMessage()
            questions = sendMessage.get(propertiesPanel)
          }
          break
        case 'UserRequest':
          if (this.save.length == 0 || !validation) {
            let userRequest = new UserRequest()
            questions = userRequest.get(propertiesPanel)
          }
          break
        case 'UserResponse':
          if (this.save.length == 0 || !validation) {
            let userResponse = new UserResponse()
            questions = userResponse.get(propertiesPanel)
          }
          break
        case 'Mapper':
          if (this.save.length == 0 || !validation) {
            let mapper = new Mapper()
            questions = mapper.get(propertiesPanel)
          }
          break
        case 'Filter':
          if (this.save.length == 0 || !validation) {
            let filter = new Filter()
            questions = filter.get(propertiesPanel)
          }
          break
        case 'TransactionResponse':
          if (this.save.length == 0 || !validation) {
            let transactionResponse = new TransactionResponse()
            questions = transactionResponse.get(propertiesPanel)
          }
          break
        case 'TransactionRequest':
          if (this.save.length == 0 || !validation) {
            let transactionRequest = new TransactionRequest()
            questions = transactionRequest.get(propertiesPanel)
          }
          break
        case 'GoToFlow':
          if (this.save.length == 0 || !validation) {
            let goToFlow = new GoToFlow()
            questions = goToFlow.get(propertiesPanel)
          }
          break
        case 'StartSubFlow':
          if (this.save.length == 0 || !validation) {
            let startSubFlow = new StartSubFlow()
            questions = startSubFlow.get(propertiesPanel)
          }
          break
        case 'BackToParent':
          if (this.save.length == 0 || !validation) {
            let backToParent = new BackToParent()
            questions = backToParent.get(propertiesPanel)
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
      if (b.filter(c => c.id == propertiesPanel.id).length !== 0) {
        questions = b.filter(c => c.id == propertiesPanel.id)
        questions = this.updateForm(questions, propertiesPanel)
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
    let save = true

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
getElement(){
  return this.subject.asObservable()
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
            case 'activityName':
              a.businessObject.name = result.value.activityName
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
    this.element = value
    this.subject.next(value)
    this.save2.forEach(res => {
      // console.log('RES UPDATE CANVAS', res)
      switch (value.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie) {
        case "CallApi":
          let callapi = new CallApi()
          return callapi.update(value, res)
          break;

        default:
          break;
      }
      if (res.id == value.id) {

      }
    })
    return value
  }

  updateElement(value: any) {

    // console.log('SAVE2', this.save2)

  }

}


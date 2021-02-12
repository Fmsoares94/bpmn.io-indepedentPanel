import { EntryFactory, IPropertiesProvider } from '../bpmn-js/bpmn-js';
import { Subject, Observable } from 'rxjs';
var elementPanel = new Subject<any>()
export var value 
export class CustomPropsProvider implements IPropertiesProvider {
  static $inject = ['translate', 'bpmnPropertiesProvider'];
  // Note that names of arguments must match injected modules, see InjectionNames.
  constructor(private translate, private bpmnPropertiesProvider) {
  }

  getTabs(element?) {
    elementPanel.next(element)
    value = element
    if (this.bpmnPropertiesProvider !== undefined) {
      return this.bpmnPropertiesProvider.getTabs(element)
    } else {
      return
    }
  }
}

export default elementPanel.asObservable()

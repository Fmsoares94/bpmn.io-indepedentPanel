import {IPalette, IPaletteProvider, OriginalPaletteProvider} from "../bpmn-js";
import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import * as icones from './customImages/customIcons';


const _getPaletteEntries = _PaletteProvider.prototype.getPaletteEntries;


export class CustomPaletteProvider implements IPaletteProvider {


  static $inject = ['palette', 'originalPaletteProvider', 'create', 'elementFactory', 'bpmnFactory'];


  private readonly create: any;
  private readonly elementFactory: any;
  private readonly bpmnFactory: any;


  constructor(private palette: IPalette, private originalPaletteProvider: IPaletteProvider,
              create, elementFactory, bpmnFactory) {
    palette.registerProvider(this);
    this.create = create;
    this.elementFactory = elementFactory;
    this.bpmnFactory = bpmnFactory;
  }


  getPaletteEntries() {
    return {
      'create.startflow': {
        group: 'event',
        className: 'bpmn-icon-start-event-none',
        title: 'START FLOW',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:StartEvent', 'StartFlow'),
          click: (evt) => this.createObj(evt, 'bpmn:StartEvent', 'StartFlow')
        }
      },
      'create.endofflow': {
          group: 'event',
          className: 'bpmn-icon-end-event-none',
          title: 'END FLOW',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:EndEvent', 'EndOfFlow'),
            click: (evt) => this.createObj(evt, 'bpmn:EndEvent', 'EndOfFlow')
          }
      },
      'create.decision': {
          group: 'event',
          imageUrl: icones.imgDecision,
          title: 'DECISION',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Gateway', 'Decision'),
            click: (evt) => this.createObj(evt, 'bpmn:Gateway', 'Decision')
          },
      },
      'create.startSubFlow': {
        group: 'event',
        imageUrl: icones.imgStartSubFlow,
        title: 'START SUBFLOW',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:Gateway', 'StartSubFlow'),
          click: (evt) => this.createObj(evt, 'bpmn:Gateway', 'StartSubFlow')
        }
      },
      'tool-separator3': {
        group: 'event',
        separator: true
      },
      'create.callapi': {
          group: 'activity',
          imageUrl: icones.imgCallApi,
          title: 'CALLAPI',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'CallApi'),
            click: (evt) => this.createObj(evt, 'bpmn:Task', 'CallApi')
          }
      },
      'create.sendmessage': {
          group: 'activity',
          imageUrl: icones.imgSendMessage,
          title: 'SEND MESSAGE',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'SendMessage'),
            click: (evt) => this.createObj(evt, 'bpmn:Task', 'SendMessage')
          }
      },
      'create.userrequest': {
        group: 'activity',
        imageUrl: icones.imgUserRequest,
        title: 'USER REQUEST',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'UserRequest'),
          click: (evt) => this.createObj(evt, 'bpmn:Task', 'UserRequest')
        }
      },
      'create.userresponse': {
          group: 'activity',
          imageUrl: icones.imgUserResponse,
          title: 'USER RESPONSE',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'UserResponse'),
            click: (evt) => this.createObj(evt, 'bpmn:Task', 'UserResponse')
          }
      },
      'create.mapper': {
          group: 'activity',
          imageUrl: icones.imgMapper,
          title: 'MAPPER',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'Mapper'),
            click: (evt) => this.createObj(evt, 'bpmn:Task', 'Mapper')
          }
      },
      'create.filter': {
          group: 'activity',
          imageUrl: icones.imgFilter,
          title: 'FILTER',
          action: {
            dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'Filter'),
            click: (evt) => this.createObj(evt, 'bpmn:Task', 'Filter')
          }
      },
      'create.transactionRequest': {
        group: 'activity',
        imageUrl: icones.imgTransactionRequest,
        title: 'TRANSACTION REQUEST',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'TransactionRequest'),
          click: (evt) => this.createObj(evt, 'bpmn:Task', 'TransactionRequest')
        }
      },
      'create.transactionResponse': {
        group: 'activity',
        imageUrl: icones.imgTransactionResponse,
        title: 'TRANSACTION RESPONSE',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:Task', 'TransactionResponse'),
          click: (evt) => this.createObj(evt, 'bpmn:Task', 'TransactionResponse')
        }
      },
      'create.gotoflow': {
        group: 'activity',
        imageUrl: icones.imgGoToFlow,
        title: 'GO TO FLOW',
        action: {
          dragstart: (evt) => this.createObj(evt, 'bpmn:Gateway', 'GoToFlow'),
          click: (evt) => this.createObj(evt, 'bpmn:Gateway', 'GoToFlow')
        }
    },
    
  'create.backToParent': {
    group: 'activity',
    imageUrl: icones.imgBackToParent,
    title: 'BACKTOPARENT',
    action: {
      dragstart: (evt) => this.createObj(evt, 'bpmn:Gateway', 'BackToParent'),
      click: (evt) => this.createObj(evt, 'bpmn:Gateway', 'BackToParent')
    }
},
    };
  }


  createObj(event, type, rtType) {
    ;
    const businessObject = this.bpmnFactory.create(type);
    businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie = rtType;    


    const shape = this.elementFactory.create(
      'shape', {
        type: type,
        businessObject: businessObject
      }
    );
    this.create.start(event, shape);
  }


}


_PaletteProvider.prototype.getPaletteEntries = function(element) {
  const entries = _getPaletteEntries.apply(this);


  delete entries['create.data-object'];
  delete entries['create.data-store'];
  delete entries['create.start-event'];
  delete entries['create.end-event'];
  delete entries['create.exclusive-gateway'];
  delete entries['create.task'];
  delete entries['create.group'];
  delete entries['space-tool'];
  delete entries['create.intermediate-event'];
  delete entries['create.participant-expanded'];
  delete entries['create.subprocess-expanded'];


  return entries;
};




import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';
import { hasPrimaryModifier } from 'diagram-js/lib/util/Mouse';
import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
import * as icones from './customImages/customIcons';
import {
  assign,
  isArray
} from 'min-dash';


import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


import {
  isExpanded,
  isEventSubProcess
} from 'bpmn-js/lib/util/DiUtil';
export class CustomContextPadProvider extends ContextPadProvider {


  constructor(config: any, injector: any, eventBus: any, contextPad: any, modeling: any,
    elementFactory: any, connect: any, create: any, popupMenu: any, canvas: any,
    rules: any, translate: any) {
      super(config, injector, eventBus, contextPad, modeling, elementFactory, connect,
        create, popupMenu, canvas, rules, translate);



  contextPad.registerProvider(this);


  eventBus.on('create.end', 250, function(event) {
    const shape = event.context.shape;


    if (!hasPrimaryModifier(event)) {
      return;
    }


    const entries = contextPad.getEntries(shape);


    if (entries.replace) {
      entries.replace.action.click(event, shape);
    }
  });
}


static $inject = [
  'config.contextPad',
  'injector',
  'eventBus',
  'contextPad',
  'modeling',
  'elementFactory',
  'connect',
  'create',
  'popupMenu',
  'canvas',
  'rules',
  'translate'
];
}


ContextPadProvider.prototype.getContextPadEntries = function(element) {


  const contextPad = this._contextPad,
      modeling = this._modeling,


      elementFactory = this._elementFactory,
      connect = this._connect,
      create = this._create,
      popupMenu = this._popupMenu,
      canvas = this._canvas,
      rules = this._rules,
      autoPlace = this._autoPlace,
      translate = this._translate;


  const actions = {};


  if (element.type === 'label') {
    return actions;
  }


  const businessObject = element.businessObject;


  function startConnect(event, element) {
    connect.start(event, element);
  }


  function removeElement(e) {
    modeling.removeElements([ element ]);
  }


  function appendAction(type, imageUrl, title, rtType) {


    if (typeof title !== 'string') {
      title = translate('Append {type}', { type: type.replace(/^bpmn:/, '') });
    }


    function appendStart(event, element) {


      const shape = elementFactory.createShape(assign({ type: type }));
      create.start(event, shape, element);
    }



    const append = autoPlace ? function(event, element) {
      const shape = elementFactory.createShape(assign({ type: type }));
      shape.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie = rtType;
      autoPlace.append(element, shape);
    } : appendStart;


    if(rtType === 'EndOfFlow') {
      return {
        group: 'model',
        className: imageUrl,
        title: title,
        action: {
          dragstart: appendStart,
          click: append
        }
      }
    }


    return {
      group: 'model',
      imageUrl: imageUrl,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }


  if (is(businessObject, 'bpmn:FlowNode')) {


    if (!is(businessObject, 'bpmn:EndEvent') && !is(businessObject, 'bpmn:StartEvent') &&
        !businessObject.isForCompensation &&
        !isEventType(businessObject, 'bpmn:Gateway', 'bpmn:LinkEventDefinition') &&
        !isEventSubProcess(businessObject)) {


        assign(actions, {
        'append.endofflow': appendAction(
          'bpmn:EndEvent',
          'bpmn-icon-end-event-none',
          translate('END FLOW'),
          'EndOfFlow'
        ),
        'append.decision':appendAction(
          'bpmn:Gateway',
          icones.imgDecisionSmal,
          translate('DECISION'),
          'Decision'
        ),
        'append.callapi': appendAction(
          'bpmn:Task',
          icones.imgCallApiSmal,
          translate('CALLAPI'),
          'CallApi'
        ),
        'append.sendmessage': appendAction(
          'bpmn:Task',
          icones.imgSendMessageSmal,
          translate('SEND MESSAGE'),
          'SendMessage'
        ),
        'append.userrequest': appendAction(
          'bpmn:Task',
          icones.imgUserRequestSmal,
          translate('USER REQUEST'),
          'UserRequest'
        ),
        'append.userresponse': appendAction(
          'bpmn:Task',
          icones.imgUserResponseSmal,
          translate('USER RESPONSE'),
          'UserResponse'
        ),
        'append.mapper': appendAction(
          'bpmn:Task',
          icones.imgMapperSmal,
          translate('MAPPER'),
          'Mapper'
        ),
        'append.filter': appendAction(
          'bpmn:Task',
          icones.imgFilterSmal,
          translate('FILTER'),
          'Filter'
        ),
        'append.transactionRequest': appendAction(
          'bpmn:Task',
          icones.imgTransactionRequestSmal,
          translate('TRANSACTION REQUEST'),
          'TransactionRequest'
        ),
        'append.transactionResponse': appendAction(
          'bpmn:Task',
          icones.imgTransactionResponseSmal,
          translate('TRANSACTION RESPONSE'),
          'TransactionResponse'
        ),
        'append.gotoflow': appendAction(
          'bpmn:Gateway',
          icones.imgGoToFlow,
          translate('GO TO FLOW'),
          'GoToFlow'
        ),
        'append.startSubFlow': appendAction(
          'bpmn:Gateway',
          icones.imgStartSubFlow,
          translate('StartSubFlow'),
          'StartSubFlow'
        ),
        'append.backToParent': appendAction(
          'bpmn:Gateway',
          icones.imgBackToParent,
          translate('BackToParent'),
          'BackToParent'
        ),
      });
    }
    else if (is(businessObject, 'bpmn:StartEvent')) {
      assign(actions, {
      'append.decision':appendAction(
        'bpmn:Gateway',
        icones.imgDecisionSmal,
        translate('DECISION'),
        'Decision'
      ),
      'append.callapi': appendAction(
        'bpmn:Task',
        icones.imgCallApiSmal,
        translate('CALLAPI'),
        'CallApi'
      ),
      'append.sendmessage': appendAction(
        'bpmn:Task',
        icones.imgSendMessageSmal,
        translate('SEND MESSAGE'),
        'SendMessage'
      ),
      'append.userrequest': appendAction(
        'bpmn:Task',
        icones.imgUserRequestSmal,
        translate('USER REQUEST'),
        'UserRequest'
      ),
      'append.userresponse': appendAction(
        'bpmn:Task',
        icones.imgUserResponseSmal,
        translate('USER RESPONSE'),
        'UserResponse'
      ),
      'append.mapper': appendAction(
        'bpmn:Task',
        icones.imgMapperSmal,
        translate('MAPPER'),
        'Mapper'
      ),
      'append.filter': appendAction(
        'bpmn:Task',
        icones.imgFilterSmal,
        translate('FILTER'),
        'Filter'
      ),
      'append.transactionRequest': appendAction(
        'bpmn:Task',
        icones.imgTransactionRequestSmal,
        translate('TRANSACTION REQUEST'),
        'TransactionRequest'
      ),
      'append.transactionResponse': appendAction(
        'bpmn:Task',
        icones.imgTransactionResponseSmal,
        translate('TRANSACTION RESPONSE'),
        'TransactionResponse'
      ),
      'append.gotoflow': appendAction(
        'bpmn:Gateway',
        icones.imgGoToFlow,
        translate('GO TO FLOW'),
        'GoToFlow'
      ),
      'append.startSubFlow': appendAction(
        'bpmn:Gateway',
        icones.imgStartSubFlow,
        translate('StartSubFlow'),
        'StartSubFlow'
      ),
      'append.backToParent': appendAction(
        'bpmn:Gateway',
        icones.imgBackToParent,
        translate('BackToParent'),
        'BackToParent'
      ),
    });
  }
}


  if (isAny(businessObject, [
    'bpmn:FlowNode',
    'bpmn:InteractionNode',
    'bpmn:DataObjectReference',
    'bpmn:DataStoreReference'
  ])) {


    assign(actions, {
      'connect': {
        group: 'connect',
        className: 'bpmn-icon-connection-multi',
        title: translate('CONNECT'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    });
  }


  let deleteAllowed = rules.allowed('elements.delete', { elements: [ element ] });


  if (isArray(deleteAllowed)) {
    deleteAllowed = deleteAllowed[0] === element;
  }


  if (deleteAllowed) {
    assign(actions, {
      'delete': {
        group: 'edit',
        className: 'bpmn-icon-trash',
        title: translate('DELETE'),
        action: {
          click: removeElement
        }
      }
    });
  }


  return actions;
};


function isEventType(eventBo, type, definition) {


  const isType = eventBo.$instanceOf(type);
  let isDefinition = false;


  const definitions = eventBo.eventDefinitions || [];
  definitions.forEach(def => {
    if (def.$type === definition) {
      isDefinition = true;
    }
  });


  return isType && isDefinition;
}


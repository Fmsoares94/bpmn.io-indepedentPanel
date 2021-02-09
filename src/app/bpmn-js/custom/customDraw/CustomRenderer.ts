import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import * as icons from '../customImages/customIcons';


import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate,
  remove as svgRemove
} from 'tiny-svg';


import { getRoundRectPath } from 'bpmn-js/lib/draw/BpmnRenderUtil';


import { is } from 'bpmn-js/lib/util/ModelUtil';
import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
// import { ConsoleService } from '@ng-select/ng-select/ng-select/console.service';
let elem
const HIGH_PRIORITY = 1500,
  TASK_BORDER_RADIUS = 2;


export default class CustomRenderer extends BaseRenderer {
  bpmnRenderer: any;
  static $inject = ['eventBus', 'bpmnRenderer'];


  constructor(eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY);


    this.bpmnRenderer = bpmnRenderer;
  }


  canRender(element) {
    let result = isAny(element, ['bpmn:SendTask']);
    elem = element
    return isAny(element, ['bpmn:Task', 'bpmn:Gateway']) && !element.labelTarget
      && !(isAny(element, ['bpmn:BusinessRuleTask', 'bpmn:ScriptTask', 'bpmn:ReceiveTask',
        'bpmn:SendTask', 'bpmn:CallActivity', 'bpmn:UserTask', 'bpmn:SequenceFlow']));
  }


  drawShape(parentNode, element) {
    const shape = this.bpmnRenderer.drawShape(parentNode, element);
    const type = element.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie
    console.log('criando o shape')
    const url = addUrlImage(element);
    const imageGfx = svgCreate('image');
    
      switch (type) {
        case 'GoToFlow':
          let goto = drawRect(2, 0, parentNode, 45, 45, url, TASK_BORDER_RADIUS, '#52B415');
          prependTo(goto, parentNode);
          svgRemove(shape);
          return shape;
        case 'StartSubFlow':
          let startSubFlow = drawRect(2, 0, parentNode, 45, 45, url, TASK_BORDER_RADIUS, '#52B415');
          prependTo(startSubFlow, parentNode);
          svgRemove(shape);
          return shape;
        case 'BackToParent':
          let backToParent = drawRect(2, 0, parentNode, 45, 45, url, TASK_BORDER_RADIUS, '#52B415');
          prependTo(backToParent, parentNode);
          svgRemove(shape);
          return shape;
          break;
        default:
          // let def = drawRect(0, 0, parentNode, 20, 20, url, TASK_BORDER_RADIUS, '#52B415');
          // prependTo(def, parentNode);
          svgAttr(imageGfx, {
            x: 0,
            y: 0,
            width: '20',
            height: '20',
            href: url,
            transform: 'translate(3, 3)'
          });
          if(url !== undefined){
            svgAppend(parentNode, imageGfx); 
          }
          return shape
      }


    
  }



  getShapePath(shape) {
    if (is(shape, 'bpmn:Task')) {
      return getRoundRectPath(shape, TASK_BORDER_RADIUS);
    }


    return this.bpmnRenderer.getShapePath(shape);
  }
}



function addUrlImage(element) {
  const type = element.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie;
  console.log('DALE',element.businessObject)
  let url;


  switch (type) {
    case 'CallApi':
      url = icons.imgCallApi;
      break;
    case 'SendMessage':
      url = icons.imgSendMessage;
      break;
    case 'UserRequest':
      url = icons.imgUserRequest;
      break;
    case 'UserResponse':
      url = icons.imgUserResponse;
      break;
    case 'Mapper':
      url = icons.imgMapper;
      break;
    case 'Filter':
      url = icons.imgFilterSmal;
    break;
    case 'TransactionRequest':
      url = icons.imgTransactionRequest;
    break;
    case 'TransactionResponse':
      url = icons.imgTransactionResponse;
    break;
    case 'GoToFlow':
      url = icons.imgGoToFlow;
      break;
    case 'StartSubFlow':
      url = icons.imgStartSubFlow;
      break;
    case 'BackToParent':
      url = icons.imgBackToParent;
      break;


  }
  return url;
}




function drawRect(x, y, parentNode, width, height, url, borderRadius, strokeColor?) {
  const rect = svgCreate('image');


  svgAttr(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    rx: borderRadius,
    ry: borderRadius,
    stroke: strokeColor || '#000',
    strokeWidth: 2,
    href: url,
    transform: 'translate(0, 0)'
  });


  svgAppend(parentNode, rect);


  return rect;
}


function prependTo(newNode, parentNode, siblingNode?) {
  parentNode.insertBefore(newNode, siblingNode || parentNode.firstChild);
}




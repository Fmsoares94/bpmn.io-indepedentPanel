// import {map, assign, pick} from 'min-dash';
// import {isAny} from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
// import BpmnFactory from 'bpmn-js/lib/features/modeling/BpmnFactory';
// import uuidv4 from 'uuid/v4';
// import {Modeler} from '../bpmn-js';
// import BpmnModdle from 'bpmn-moddle';


// const customModdle = '../../resources/customModdle';
// const CamundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda.json');
// const bpmn2Moddle = require('bpmn-moddle/resources/bpmn/json/bpmn.json');
// const optionsModdle = {
//   moddleExtension: {
//     camunda: CamundaModdleDescriptor,
//     bpmn: customModdle,
//     bpmn2: bpmn2Moddle
//   }
// }


// export class CustomBpmnFactory extends BpmnFactory {
//   static $inject = [ 'moddle' ];


//   private readonly _model: any;
//   _needsId: (element: any) => any;
//   _ensureId: (element: any) => void;
//   create: (type: any, attrs: any) => any;
//   createDiLabel: () => any;
//   createDiShape: (semantic: any, bounds: any, attrs: any) => any;
//   createDiBounds: (bounds: any) => any;
//   createDiWaypoints: (waypoints: any) => any[];
//   createDiWaypoint: (point: any) => any;
//   createDiEdge: (semantic: any, waypoints: any, attrs: any) => any;
//   createDiPlane: (semantic: any) => any;


//   constructor(moddle:any){
//     super(moddle);
//     this._model = moddle;
//   }
// }


// CustomBpmnFactory.prototype._needsId = function(element) {
//   return isAny(element, [
//     'bpmn:RootElement',
//     'bpmn:FlowElement',
//     'bpmn:MessageFlow',
//     'bpmn:DataAssociation',
//     'bpmn:Artifact',
//     'bpmn:Participant',
//     'bpmn:Lane',
//     'bpmn:LaneSet',
//     'bpmn:Process',
//     'bpmn:Collaboration',
//     'bpmndi:BPMNShape',
//     'bpmndi:BPMNEdge',
//     'bpmndi:BPMNDiagram',
//     'bpmndi:BPMNPlane',
//     'bpmn:Property'
//   ]);
// };


// CustomBpmnFactory.prototype._ensureId = function(element) {
//   let prefix = uuidv4();
//   const regex = /^[0-9]/;


//   while(regex.test(prefix)){
//     prefix = uuidv4();
//   }


//   if (!element.id && this._needsId(element)) {
//     element.id = prefix;
//   }
// };


// CustomBpmnFactory.prototype.create = function(type, attrs) {
//   const sliceType = type.slice(0, 7);
//   if (sliceType === 'camunda'){
//     this._model = new BpmnModdle({camunda:CamundaModdleDescriptor});
//   }
  
//   if(type === 'bpmn:ExtensionElements'){
//     this._model = Modeler.prototype._createModdle(optionsModdle);
//   }    
  
//   const element = this._model.create(type, attrs || {});
//   this._ensureId(element);
//   return element;
// };



// CustomBpmnFactory.prototype.createDiLabel = function() {
//   return this.create('bpmndi:BPMNLabel', {
//     bounds: this.createDiBounds()
//   });
// };



// CustomBpmnFactory.prototype.createDiShape = function(semantic, bounds, attrs) {


//   return this.create('bpmndi:BPMNShape', assign({
//     bpmnElement: semantic,
//     bounds: this.createDiBounds(bounds)
//   }, attrs));
// };



// CustomBpmnFactory.prototype.createDiBounds = function(bounds) {
//   return this.create('dc:Bounds', bounds);
// };



// CustomBpmnFactory.prototype.createDiWaypoints = function(waypoints) {
//   const self = this;


//   return map(waypoints, function(pos) {
//     return self.createDiWaypoint(pos);
//   });
// };


// CustomBpmnFactory.prototype.createDiWaypoint = function(point) {
//   // return this.create('dc:Point', pick(point, [ 'x', 'y' ]));
// };



// CustomBpmnFactory.prototype.createDiEdge = function(semantic, waypoints, attrs) {
//   return this.create('bpmndi:BPMNEdge', assign({
//     bpmnElement: semantic
//   }, attrs));
// };


// CustomBpmnFactory.prototype.createDiPlane = function(semantic) {
//   return this.create('bpmndi:BPMNPlane', {
//     bpmnElement: semantic
//   });
// };



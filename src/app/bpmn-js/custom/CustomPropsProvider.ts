// import { EntryFactory, IPropertiesProvider } from '../bpmn-js';
// import _PropertiesPanel from 'bpmn-js-properties-panel/lib/PropertiesPanel';
// import { is } from 'bpmn-js/lib/util/ModelUtil';
// import CustomTabs from './customTabs';
// import { CustomBpmnFactory } from './CustomBpmnFactory';


// let oldElement;
// let tabs;
// const domQuery = require('min-dom').query,
//   domQueryAll = require('min-dom').queryAll,
//   domClasses = require('min-dom').classes,
//   domAttr = require('min-dom').attr;
// const forEach = require('lodash/forEach');


// export class CustomPropsProvider implements IPropertiesProvider {


//   static $inject = ['translate', 'bpmnPropertiesProvider', 'elementRegistry', 'eventBus', 'bpmnFactory'];
//   bpmnFactory: any;
//   _propertiesProvider: any;
//   _current: any;
//   _eventBus: any;


//   constructor(private translate, private bpmnPropertiesProvider, eventBus, bpmnFactory) {
//     this.bpmnFactory = CustomBpmnFactory.prototype;
//     this._propertiesProvider = _PropertiesPanel.prototype;
//     this._eventBus = eventBus;


//   }


//   getTabs(element) {

//     let attrsRtType = element.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie;


//     if (element.type === 'bpmn:SequenceFlow') {


//       tabs = CustomTabs.SequenceFlowTabs(element, this.translate, EntryFactory);
//       if (oldElement.type !== 'bpmn:SequenceFlow') {
//         activateTab(element, tabs);
//       }
//       oldElement = element;
//       return tabs;
//     }


//     if (element.type === 'label') {
//       activateTab(element, tabs);
//       oldElement = element;
//       return tabs;
//     }


//     if (is(element.businessObject, 'bpmn:Process')) {
//       tabs = CustomTabs.
//         CustomProcessTabs(element, this.translate, EntryFactory, data);
//       putNewVersion(data, element);
//       activateTab(element, tabs);


//     } else {
//       tabs = CustomTabs.
//         CustomGeneralTabs(element, this.translate, EntryFactory, this.bpmnFactory, data);
//       activateTab(element, tabs);
//       switch (attrsRtType) {
//         case 'CallApi':
//           tabs = tabs.concat(
//             CustomTabs.
//               CallApiTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'SendMessage':
//           tabs = tabs.concat(
//             CustomTabs.
//               SendMessageTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'Filter':
//           tabs = tabs.concat(
//             CustomTabs.
//               FilterTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'Mapper':
//           tabs = tabs.concat(
//             CustomTabs.
//               MapperTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'EndOfFlow':
//           tabs = tabs.concat(
//             CustomTabs.
//               EndOfFlowTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'UserRequest':
//           tabs = tabs.concat(
//             CustomTabs.
//               UserRequestTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'Decision':
//           tabs = tabs.concat(
//             CustomTabs.
//               DecisionTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'UserResponse':
//           tabs = tabs.concat(
//             CustomTabs.
//               UserResponseTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'TransactionRequest':
//           tabs = tabs.concat(
//             CustomTabs.
//               TransactionRequestTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//         case 'TransactionResponse':
//             tabs = tabs.concat(
//               CustomTabs.
//                 TransactionResponseTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//             break;
//         case 'GoToFlow':
//           tabs = tabs.concat(
//             CustomTabs.
//               GoToFlowTabs(element, this.translate, EntryFactory, this.bpmnFactory, data));
//           break;
//       }
//     }
//     oldElement = element;
//     return tabs;
//   }
// }


// function activateTab(element, tab) {
//   if (!(oldElement === element)) {
//     const tabId = typeof tab === 'string' ? tab : tab.id;
//     const allTabNodes = domQueryAll('.bpp-properties-tab', document.body),
//       allTabLinkNodes = domQueryAll('.bpp-properties-tab-link', document.body);


//     forEach(allTabNodes, function (tabNode) {
//       const currentTabId = domAttr(tabNode, 'data-tab');
//       domClasses(tabNode).toggle('bpp-active', tabId === currentTabId);
//     });


//     forEach(allTabLinkNodes, function (tabLinkNode) {
//       const tabLink = domQuery('[data-tab-target]', tabLinkNode),
//         currentTabId = domAttr(tabLink, 'data-tab-target');
//       domClasses(tabLinkNode).toggle('bpp-active', tabId === currentTabId);
//     });
//   }


// };


// function putNewVersion(data, element) {
//   if (data.lastVersion !== undefined) {
//     element.businessObject.$attrs.num_vers_defi_rotr_jorn_clie = data.lastVersion + 1;
//   } else if (data.lastVersion === undefined) {
//     element.businessObject.$attrs.num_vers_defi_rotr_jorn_clie = 1;
//   }
// }



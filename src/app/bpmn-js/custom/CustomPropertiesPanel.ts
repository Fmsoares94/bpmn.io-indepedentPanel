// import PropertiesPanel from 'bpmn-js-properties-panel/lib/PropertiesPanel';


// const domify = require('min-dom').domify,
//   domQuery = require('min-dom').query,
//   domQueryAll = require('min-dom').queryAll,
//   domRemove = require('min-dom').remove,
//   domClasses = require('min-dom').classes,
//   domClosest = require('min-dom').closest,
//   domAttr = require('min-dom').attr,
//   domDelegate = require('min-dom').delegate,
//   domMatches = require('min-dom').matches;


// const forEach = require('lodash/forEach'),
//   filter = require('lodash/filter');


// const getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;


// const HIDE_CLASS = 'bpp-hidden';


// function isToggle(node) {
//   return node.type === 'checkbox' || node.type === 'radio';
// }


// function isContentEditable(node) {
//   return domAttr(node, 'contenteditable');
// }


// function getFormControlValues(entryNode) {


//   let values;


//   const listContainer = domQuery('[data-list-entry-container]', entryNode);
//   if (listContainer) {
//     values = [];
//     const listNodes = listContainer.children || [];
//     forEach(listNodes, function (listNode) {
//       values.push(getFormControlValuesInScope(listNode));
//     });
//   } else {
//     values = getFormControlValuesInScope(entryNode);
//   }


//   return values;
// }


// function getFormControlValuesInScope(entryNode) {
//   const values = {};


//   const controlNodes = getFormControls(entryNode, undefined);


//   forEach(controlNodes, function (controlNode) {
//     let value = controlNode.value;


//     const name = domAttr(controlNode, 'name') || domAttr(controlNode, 'data-name');


//     if (isToggle(controlNode)) {
//       if (controlNode.checked) {
//         if (!domAttr(controlNode, 'value')) {
//           value = true;
//         } else {
//           value = controlNode.value;
//         }
//       } else {
//         value = null;
//       }
//     } else
//       if (isContentEditable(controlNode)) {
//         value = controlNode.innerText;
//       }


//     if (value !== null) {
//       values[name] = value;
//     }
//   });


//   return values;
// }


// function getFormControls(node, all) {
//   let controls = domQueryAll('input[name], textarea[name], select[name], [contenteditable]', node);


//   if (!controls || !controls.length) {
//     controls = domMatches(node, 'option') ? [node] : controls;
//   }


//   if (!all) {
//     controls = filter(controls, function (node) {
//       return !domClosest(node, '.' + HIDE_CLASS);
//     });
//   }


//   return controls;
// }


// export class CustomPropertiesPanel extends PropertiesPanel {


//   static $inject = [
//     'config.propertiesPanel',
//     'eventBus',
//     'modeling',
//     'propertiesProvider',
//     'commandStack',
//     'canvas'
//   ];


//   constructor(config, eventBus, modeling, propertiesProvider, commandStack, canvas) {
//     super(config, eventBus, modeling, propertiesProvider, commandStack, canvas);


//   }
// }


// PropertiesPanel.prototype._updateActivation = function (current) {
//   const self = this;


//   const eventBus = this._eventBus;


//   const element = current.element;


//   function isEntryVisible(entry) {
//     return eventBus.fire('propertiesPanel.isEntryVisible', {
//       entry: entry,
//       element: element
//     });
//   }


//   function isGroupVisible(group, element, groupNode) {
//     if (typeof group.enabled === 'function') {
//       return group.enabled(element, groupNode);
//     } else {
//       return true;
//     }
//   }


//   function isTabVisible(tab, element) {
//     if (typeof tab.enabled === 'function') {
//       return tab.enabled(element);
//     } else {
//       return true;
//     }
//   }


//   function toggleVisible(node, visible) {
//     domClasses(node).toggle(HIDE_CLASS, !visible);
//   }


//   function checkActiveTabVisibility(node, visible) {
//     const isActive = domClasses(node).has('bpp-active');
//     if (!visible && isActive) {
//       self.activateTab(current.tabs[0]);
//     }
//   }


//   function updateLabel(element, selector, text) {
//     const labelNode = domQuery(selector, element);


//     if (!labelNode) {
//       return;
//     }


//     labelNode.textContent = text;
//   }


//   const panelNode = current.panel;


//   forEach(current.tabs, function (tab) {


//     const tabNode = domQuery('[data-tab=' + tab.id + ']', panelNode);
//     const tabLinkNode = domQuery('[data-tab-target=' + tab.id + ']', panelNode).parentNode;


//     let tabVisible = false;


//     forEach(tab.groups, function (group) {


//       let groupVisible = false;


//       const groupNode = domQuery('[data-group=' + group.id + ']', tabNode);


//       forEach(group.entries, function (entry) {


//         const entryNode = domQuery('[data-entry="' + entry.id + '"]', groupNode);


//         const entryVisible = isEntryVisible(entry);


//         groupVisible = groupVisible || entryVisible;


//         toggleVisible(entryNode, entryVisible);


//         const values = 'get' in entry ? entry.get(element, entryNode) : {};


//         if (values instanceof Array) {
//           const listEntryContainer = domQuery('[data-list-entry-container]', entryNode);
//           const existingElements = listEntryContainer.children || [];


//           for (let i = 0; i < values.length; i++) {
//             const listValue = values[i];
//             let listItemNode = existingElements[i];
//             if (!listItemNode) {
//               listItemNode = domify(entry.createListEntryTemplate(listValue, i, listEntryContainer));
//               listEntryContainer.appendChild(listItemNode);
//             }
//             domAttr(listItemNode, 'data-index', i);


//             self._bindTemplate(element, entry, listValue, listItemNode, i);
//           }


//           const entriesToRemove = existingElements.length - values.length;


//           for (let j = 0; j < entriesToRemove; j++) {


//             listEntryContainer.removeChild(listEntryContainer.lastChild);
//           }


//         } else {
//           self._bindTemplate(element, entry, values, entryNode);
//         }


//         self.updateState(entry, entryNode);
//         self.validate(entry, values, entryNode);


//         entry.oldValues = getFormControlValues(entryNode);
//       });


//       if (typeof group.label === 'function') {
//         updateLabel(groupNode, '.group-label', group.label(element, groupNode));
//       }


//       groupVisible = groupVisible && isGroupVisible(group, element, groupNode);


//       tabVisible = tabVisible || groupVisible;


//       toggleVisible(groupNode, groupVisible);
//     });


//     tabVisible = tabVisible && isTabVisible(tab, element);


//     toggleVisible(tabNode, tabVisible);
//     toggleVisible(tabLinkNode, tabVisible);


//     checkActiveTabVisibility(tabNode, tabVisible);
//   });


//   let rtType = element.businessObject.$attrs.nom_tipo_atii_rotr_jorn_clie;
//   if (rtType !== undefined) {
//     updateLabel(panelNode, '[data-label-id]', rtType || '');
//   } else {
//     if (element.type === 'label' || element.type === 'bpmn:SequenceFlow') {
//       updateLabel(panelNode, '[data-label-id]', element.businessObject.name || getBusinessObject(element).id || '');
//     } else {
//       updateLabel(panelNode, '[data-label-id]', getBusinessObject(element).id || '');
//     }
//   }


// };




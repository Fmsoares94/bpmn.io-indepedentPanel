import * as _Modeler from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import * as _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import _ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';
import _BaseRenderer from 'bpmn-js/lib/draw/BpmnRenderer';
import * as _BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.development.js';


export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  propertiesProvider: 'propertiesProvider',
  bpmnPropertiesProvider: 'bpmnPropertiesProvider',
  paletteProvider: 'paletteProvider',
  originalPaletteProvider: 'originalPaletteProvider',
  contextPadProvider: 'contextPadProvider',
  baseRenderer: 'baseRenderer',
  propertiesPanel: 'propertiesPanel'
};


export const Modeler = _Modeler;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const EntryFactory = _EntryFactory;
export const OriginalPaletteProvider = _PaletteProvider;
export const OriginalPropertiesProvider = _BpmnPropertiesProvider;
export const ContextPadProvider = _ContextPadProvider;
export const BaseRenderer = _BaseRenderer;
export const BpmnJS = _BpmnJS;


export interface IPaletteProvider {
  getPaletteEntries(): any;
}


export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}


export interface IPropertiesProvider {
  getTabs(element): any;
}


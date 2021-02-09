import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider } from "../../bpmn-js/bpmn-js";
import { CustomPropsProvider } from '../../props-provider/CustomPropsProvider';
import { CustomPaletteProvider } from "../../props-provider/CustomPaletteProvider";
import { saveAs } from 'file-saver';
import * as bpmnjs from "../../bpmn-js/bpmn-js";
import Custom from '../../bpmn-js/custom';
import customRenderer from '../../bpmn-js/custom/customDraw'

const customModdle = {
  name: "customModdle",
  uri: "http://example.com/custom-moddle",
  prefix: "custom",
  xml: {
    tagAlias: "lowerCase"
  },
  associations: [],
  types: [
    {
      "name": "ExtUserTask",
      "extends": [
        "bpmn:UserTask"
      ],
      "properties": [ 
        {
          "name": "worklist",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
  ]
};

@Component({
  selector: 'app-create-canvas',
  templateUrl: './create-canvas.component.html',
  styleUrls: ['./create-canvas.component.scss']
})
export class CreateCanvasComponent implements OnInit {

  title = 'Angular/BPMN';
  modeler;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.modeler = new Modeler({
      container: '#canvas',
      width: '100%',
      height: '100vh;',
      additionalModules: [
        PropertiesPanelModule,
        customRenderer,
        { [InjectionNames.bpmnPropertiesProvider]: ['type', OriginalPropertiesProvider.propertiesProvider[1]] },
        { [bpmnjs.InjectionNames.originalPaletteProvider]: ['type', bpmnjs.OriginalPaletteProvider] },
        { [bpmnjs.InjectionNames.paletteProvider]: ['type', Custom.CustomPaletteProvider] },
        // Re-use original bpmn-properties-module, see CustomPropsProvider
        { [InjectionNames.propertiesProvider]: ['type', CustomPropsProvider] },
        { [bpmnjs.InjectionNames.contextPadProvider]: ['type', Custom.CustomContextPadProvider] },
      ]
    });
    this.load()
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    const url = '/assets/bpmn/initial.bpmn';
    this.http.get(url, {
      headers: { observe: 'response' }, responseType: 'text'
    }).subscribe(
      (x: any) => {
        this.modeler.importXML(x, this.handleError);
      },
      this.handleError
    );
  }

  save(): void {
    this.modeler.saveXML((err: any, xml: any) => console.log(xml))
  }
}
import { Component, OnInit } from '@angular/core';
import elementPanel, { CustomPropsProvider } from '../../props-provider/CustomPropsProvider'
import { PropertiesService } from './properties.service';
import { EventPropertiesPanel } from '../../models/startEvent.model';
import { PropertiesBase } from './propertiesBase';
import { Observable, Subject } from 'rxjs';
import { DynamicService } from '../../shared/dynamic-form/dynamic.service';
@Component({
  selector: 'app-independent-properties-panel',
  templateUrl: './independent-properties-panel.component.html',
  styleUrls: ['./independent-properties-panel.component.css'],
  providers:[PropertiesService, DynamicService]
})
export class IndependentPropertiesPanelComponent implements OnInit {

  property: Subject<EventPropertiesPanel>
  questions$: Observable<PropertiesBase<any>[]>
  constructor(private propertiesService: PropertiesService, private dynamicSerive: DynamicService) {
    this.questions$ = this.propertiesService.getQuestions()
    this.ngOnChanges()
  }

  ngOnChanges(){
    elementPanel.subscribe((a: EventPropertiesPanel) => {
      this.propertiesService.updateCanvasElement(a)
      this.questions$ = this.propertiesService.getQuestions(this.propertiesService.updateCanvasElement(a))
    })
  }

  ngOnInit() {
  }

}

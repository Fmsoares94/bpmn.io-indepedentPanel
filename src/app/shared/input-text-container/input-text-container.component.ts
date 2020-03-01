import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-text-container',
  templateUrl: './input-text-container.component.html',
  styleUrls: ['./input-text-container.component.css']
})
export class InputTextContainerComponent implements OnInit, AfterContentInit{
  input: any
  @Input() label: string
  @Input() errorMessage: string
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.control
    console.log('INPUT', this.input)
    if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com a diretiva FormControlName') 
    }
  }

}

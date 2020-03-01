import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextareaContainerComponent } from './input-textarea-container.component';

describe('InputTextareaContainerComponent', () => {
  let component: InputTextareaContainerComponent;
  let fixture: ComponentFixture<InputTextareaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextareaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextareaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

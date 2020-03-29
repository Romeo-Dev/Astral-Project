import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTecComponent } from './select-tec.component';

describe('SelectTecComponent', () => {
  let component: SelectTecComponent;
  let fixture: ComponentFixture<SelectTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

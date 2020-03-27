import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDummyComponent } from './page-dummy.component';

describe('PageDummyComponent', () => {
  let component: PageDummyComponent;
  let fixture: ComponentFixture<PageDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

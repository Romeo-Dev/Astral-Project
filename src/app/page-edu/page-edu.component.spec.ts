import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEduComponent } from './page-edu.component';

describe('PageEduComponent', () => {
  let component: PageEduComponent;
  let fixture: ComponentFixture<PageEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

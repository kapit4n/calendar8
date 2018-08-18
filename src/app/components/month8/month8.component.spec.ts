import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Month8Component } from './month8.component';

describe('Month8Component', () => {
  let component: Month8Component;
  let fixture: ComponentFixture<Month8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Month8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Month8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

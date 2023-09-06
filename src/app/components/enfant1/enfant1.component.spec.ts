/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enfant1Component } from './enfant1.component';

describe('Enfant1Component', () => {
  let component: Enfant1Component;
  let fixture: ComponentFixture<Enfant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enfant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

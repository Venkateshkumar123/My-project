/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bussimulator21Component } from './bussimulator21.component';

describe('Bussimulator21Component', () => {
  let component: Bussimulator21Component;
  let fixture: ComponentFixture<Bussimulator21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bussimulator21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bussimulator21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

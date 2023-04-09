/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Gta4Component } from './gta4.component';

describe('Gta4Component', () => {
  let component: Gta4Component;
  let fixture: ComponentFixture<Gta4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

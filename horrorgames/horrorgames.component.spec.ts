/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorrorgamesComponent } from './horrorgames.component';

describe('HorrorgamesComponent', () => {
  let component: HorrorgamesComponent;
  let fixture: ComponentFixture<HorrorgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GtavComponent } from './gtav.component';

describe('GtavComponent', () => {
  let component: GtavComponent;
  let fixture: ComponentFixture<GtavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

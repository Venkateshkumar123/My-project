/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RacinggamesComponent } from './racinggames.component';

describe('RacinggamesComponent', () => {
  let component: RacinggamesComponent;
  let fixture: ComponentFixture<RacinggamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacinggamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacinggamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

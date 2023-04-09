/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodComponent } from './cod.component';

describe('CodComponent', () => {
  let component: CodComponent;
  let fixture: ComponentFixture<CodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

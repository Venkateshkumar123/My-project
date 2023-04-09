/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyberpunkComponent } from './cyberpunk.component';

describe('CyberpunkComponent', () => {
  let component: CyberpunkComponent;
  let fixture: ComponentFixture<CyberpunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberpunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberpunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

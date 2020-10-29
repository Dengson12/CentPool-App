import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateContractComponent } from './terminate-contract.component';

describe('TerminateContractComponent', () => {
  let component: TerminateContractComponent;
  let fixture: ComponentFixture<TerminateContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

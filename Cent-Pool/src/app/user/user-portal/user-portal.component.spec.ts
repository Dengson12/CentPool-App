import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortalComponent } from './user-portal.component';

describe('UserPortalComponent', () => {
  let component: UserPortalComponent;
  let fixture: ComponentFixture<UserPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
